import { Redirect } from "react-router-dom";
import { useFocused, useSelected } from "slate-react"

const Element = (props) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'code':
      return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      )
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'iframe':
      return <Video {...props} />
    case 'image':
      return <Image {...props} />
    case 'link':
      return (
        <a {...attributes} title={element.url} href={element.url} target="_blank">
          {children}
        </a>
      )
    case 'list-item':
      return <li {...attributes}>{children}</li>
     case 'note2':
      return <Note {...props} />
   
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Image = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url_desktop}
          className="image-style"
          style={{
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none'
          }}
        />
      </div>
      {children}
    </div>
  )
}

const Video = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <iframe
          src={element.url}
          className="iframe-style"
          style={{
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none'
          }}
          width="560"
          height="315"
          allowfullscreen="true"
        />
      </div>
      {children}
    </div>
  ) 
}

const Note = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <div        
         
          style={{
            backgroundColor:"#005993",
            color:"white",
            opacity: 0.15,
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none'
          }}
          width="560"
          height="315"
         >
           <h3>{element.title}</h3>

           {element.prueba_text}
       </div>
      </div>
      {children}
    </div>
  ) 
}



export default Element;
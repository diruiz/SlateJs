import React, { useState, useCallback } from 'react';
import { createEditor, Editor, Text, Transforms } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, Editable, withReact } from 'slate-react';
import Menu from '../Menu/Menu';
import MarkButton from '../MarkButton/MarkButton';
import Icons from '../../Icons/Icons';
import Element from '../Element/Element';
import Leaf from '../Leaf/Leaf';
import { isImageUrl, isUrl } from '../../Utility/Tools';
import BlockButton from '../BlockButton/BlockButton';
import { addArticle } from '../../Services/Article.services';
import LinkButton, { wrapLink } from '../LinkButton/LinkButton';

function RichTextEditor(props) {

  const [editor] = useState(withLinks(withImages(withHistory(withReact(createEditor())))), [])
  //const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState(initialValue);

  const renderElement = useCallback(props => <Element {...props} />, []);

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    // Add a toolbar with buttons that call the same methods.
    <>
      Titulo: <input type="text"></input>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Menu>
          <MarkButton format="bold" click={
            event => {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
            }}>{Icons.Bold}</MarkButton>
          <MarkButton format="italic" click={
            event => {
              event.preventDefault()
              CustomEditor.toggleItalicMark(editor)
            }}>{Icons.Italic}</MarkButton>
          <MarkButton format="underline" click={
            event => {
              event.preventDefault()
              CustomEditor.toggleUnderlineMark(editor)
            }}>{Icons.Underline}</MarkButton>
          {/* <MarkButton format="code" click={
          event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}>{Icons.Code}</MarkButton> */}
          <MarkButton click={
            event => {
              const url = window.prompt('Enter the URL of the image:')
              if (url && !isImageUrl(url)) {
                alert('URL is not an image')
                return
              }
              insertImage(editor, url)
            }}>{Icons.Image}</MarkButton>

          <MarkButton click={
            event => {
              const url = window.prompt('Enter the URL of the video:')
              if (url && !isUrl(url)) {
                alert('URL is not an url')
                return
              }
              insertVideo(editor, url)
            }}>{Icons.Video}</MarkButton>
           <MarkButton click={
            event => {
              const msg = window.prompt('Enter the message:')
              if (!msg) {
                alert('URL is not an nessage')
                return
              }
              insertNote(editor, msg,'titulo quemado')
            }}>Nota</MarkButton>
         
          <BlockButton format="heading-one" >T</BlockButton>
          <BlockButton format="heading-two" >S</BlockButton>
          {/* <BlockButton format="block-quote" >{Icons.Quote}</BlockButton>
        <BlockButton format="numbered-list" >{Icons.OrderedList}</BlockButton> */}
          <BlockButton format="bulleted-list" >{Icons.UnorderedList}</BlockButton>
          <LinkButton>{Icons.Link}</LinkButton>

          <MarkButton click={
            event => {
              event.preventDefault()
              let articleName = prompt("Seleccione el nombre del articulo");
              if (articleName) {
                const article = { country: 'AR', name: articleName, title:articleName, description:"description" , content: value };
                console.log(article);
                addArticle(article)
                  .then(data => {
                    console.log("data ok: ", data)
                    alert("articulo guardado correctamente");

                  })
                  .catch(error => alert("error: " + alert.toString()));

              }
              else {
                alert('no ingreso nombre');
              }

            }}>{Icons.Save}</MarkButton>

          <MarkButton click={
            event => {
              event.preventDefault()
              var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

              fetch("https://beta.directv.com.co/coverage/Cds/Article/AEM", requestOptions)
                .then(response => {
                  if (response.ok) {
                    response.text();
                  }
                  else {
                    throw ("Error")
                  }

                })
                .then(result => {
                  console.log(result);
                  alert("enviado correctamente")
                })
                .catch(error => {
                  console.log('error', error)
                  alert("Error enviando")
                });

            }}>Enviar a AEM</MarkButton>
        </Menu>
        <Editable

          editor={editor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={event => {
            console.log(value);
            const content = JSON.stringify(value)
            localStorage.setItem('content', content)
            if (!event.ctrlKey) {
              return
            }

            switch (event.key) {
              case '`': {
                event.preventDefault()
                CustomEditor.toggleCodeBlock(editor)
                break
              }

              case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
              }
            }


          }}
        />
      </Slate>
    </>
  )
}

export default RichTextEditor;

const withImages = editor => {
  const { insertData, isVoid } = editor;

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element);
  }

  editor.insertData = data => {
    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            insertImage(editor, url);
          })

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  }
  return editor;
}

const withLinks = editor => {
  const { insertData, insertText, isInline } = editor

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element)
  }

  editor.insertText = text => {
    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertText(text)
    }
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')

    if (text && isUrl(text)) {
      wrapLink(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}


const insertImage = (editor, url_desktop) => {
  const text = { text: '' };
  const image = { type: 'image', url_desktop, children: [text] }
  Transforms.insertNodes(editor, image)
}



const insertVideo = (editor, url) => {
  const text = { text: '' };
  const image = { type: 'iframe', url, children: [text] }
  Transforms.insertNodes(editor, image);
}
const insertNote = (editor, prueba_text, title) => {
  const text = { text: '' };
  const image = { type: 'note2', prueba_text, title, children: [text] }
  Transforms.insertNodes(editor, image);
}

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },
  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true,
    })

    return !!match
  },

  isUnderlineMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.underline === true,
      universal: true,
    })

    return !!match
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.code === true,
      universal: true,
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },
  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor)
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleUnderlineMark(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor)
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor)
    Transforms.setNodes(
      editor,
      { code: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },
}

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', underline: true },
      { text: '!' },
    ],
  },
  {
    type: 'heading-two',
    children: [
      { text: 'Titulo' },

    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page.',
      },
    ],
  },

  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
]


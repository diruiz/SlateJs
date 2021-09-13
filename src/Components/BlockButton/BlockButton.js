import {
  Editor,
  Transforms,
  Element as SlateElement,
} from 'slate'
import { useSlate } from "slate-react";
import { LIST_TYPES } from "../../Utility/Lists";

function BlockButton(props) {
  const editor = useSlate();
  return (
    <button
      className="mark-button"
      style={{ color: isBlockActive(editor, props.format) ? 'black' : '#aaa' }}
      onClick={event => {
        event.preventDefault()
        toggleBlock(editor, props.format)
      }} >
      {props.children}
    </button>
  );
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  })
  return !!match
}


const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  })
  const newProperties = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  }
  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}


export default BlockButton;
import './MarkButton.css';
import {
  Editor,
  Transforms,
  Element as SlateElement,
} from 'slate'
import { useSlate } from "slate-react";


function MarkButton(props) {
  const editor = useSlate();
  return (
    <button
      className="mark-button"
      onClick={props.click}
      style={{ color: isMarkActive(editor, props.format) ? 'black' : '#aaa' }} >
      {props.children}
    </button>
  );
}

const isMarkActive = (editor, format) => {
  if (!format) {
    return true;
  }
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

export default MarkButton;
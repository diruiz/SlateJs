import './MarkButton.css'

function MarkButton(props) {
  return (
    <button className="mark-button" onClick={props.click} >
      {props.children}
    </button>
  );
}

export default MarkButton;
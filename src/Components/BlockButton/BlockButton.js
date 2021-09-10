function BlockButton(props) {
  return (
    <button className="mark-button" style={{ color: props.active ? 'white' : '#aaa' }} onClick={props.click} >
      {props.children}
    </button>
  );
}

export default BlockButton;
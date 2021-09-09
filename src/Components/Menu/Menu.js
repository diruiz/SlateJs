import './Menu.css';

function Menu(props) {
  return (
    <div className="menu-container">
      {props.children}
    </div>
  );
}

export default Menu;
import './App.css';
import { Counter } from "./Components/Counter/Counter";
import RichTextEditor from './Components/Slate/SlateTest';

function App() {
  return (
    <div className="App-container">
      <h1>Rich Text</h1>
      <RichTextEditor />
    </div>
  );
}

export default App;

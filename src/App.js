import { useState } from "react"
import './App.css';
import { books } from './data';
import BookContainer from "./components/book/BookContainer";


function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
      {toggle && <BookContainer books={books}/>}
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Navbar from "./layouts/navbar/navbar.js";
import ShowNotes from "./layouts/screen1/screen1.js";
import ShowTodo from './layouts/screen2/screen2';

function App() {
  const [isNoteActive, setIsNoteActive] = useState(true);
  const [isTodoActive, setIsTodoActive] = useState(false);


  return (
    <div className="App">
      {isNoteActive && <ShowNotes />}
      {isTodoActive && <ShowTodo />}
      <Navbar isNoteActive={isNoteActive}
        setIsNoteActive={setIsNoteActive}
        isTodoActive={isTodoActive}
        setIsTodoActive={setIsTodoActive}/>
    </div>
  );
}

export default App;

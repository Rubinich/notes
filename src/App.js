import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./layouts/navbar/navbar.js";
import ShowNotes from "./layouts/screen1/screen1.js";
import ShowTodo from './layouts/screen2/screen2';

function App() {
  const [isNoteActive, setIsNoteActive] = useState(true);
  const [isTodoActive, setIsTodoActive] = useState(false);
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(), 
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="App">
      {isNoteActive && (
        <ShowNotes
          notes={notes}
          setNotes={setNotes}
          inputText={inputText}
          setInputText={setInputText}
          textHandler={textHandler}
          saveHandler={saveHandler}
          deleteNote={deleteNote}
        />
      )}
      {isTodoActive && <ShowTodo />}
      <Navbar
        isNoteActive={isNoteActive}
        setIsNoteActive={setIsNoteActive}
        isTodoActive={isTodoActive}
        setIsTodoActive={setIsTodoActive}
      />
    </div>
  );
}

export default App;

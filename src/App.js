import "./App.css";
import Notes from "./layouts/screen1/screen1.js";
import MakeNote from "./layouts/notes/notes.js"
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [notes, setNotes] = React.useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notesList={notes}/>}/>
          <Route path="/make-note" element={<MakeNote notesList={notes} setNotesList={setNotes}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
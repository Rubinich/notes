import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import Notes from "./layouts/screen1/screen1.js";
import Todos from "./layouts/screen2/screen2.js";
import MakeNote from "./layouts/notes/notes.js"
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [notes, setNotes] = React.useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Notes notesList={notes}/>}/>
          <Route path="/todos" element={<Todos />}/>
          <Route path="/make-note" element={<MakeNote notesList={notes} setNotesList={setNotes}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
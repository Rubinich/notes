import "./App.css";
import Notes from "./layouts/screen1/screen1.js";
import MakeNote from "./layouts/notes/notes.js"
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [notes, setNotes] = React.useState([]);
  
  useEffect(() => {
    const data = window.localStorage.getItem('LocalNotes');
    console.log('data', data)
    if (data) 
      setNotes(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('LocalNotes', JSON.stringify(notes));
    // console.log('notes',notes)
  }, [notes]);
  


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notesList={notes} notes={notes} setNotes={setNotes} />}/>
          <Route path="/make-note" element={<MakeNote notesList={notes} setNotesList={setNotes}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
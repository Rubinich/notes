import "./App.css";
import Notes from "./layouts/screen1/screen1.js";
import MakeNote from "./layouts/notes/notes.js"
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./lang/en.json"
import hr from "./lang/hr.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hr: {
        translation: hr,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
  });


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
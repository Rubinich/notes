import React, { useEffect } from 'react';
import Header from "./../header/header.js";
import AddNote from "./../add/add.js";
import Note from "../note/note.js";

export default function ShowNotes({ notesList, setNotes , notes}) {
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    // useEffect(() => {
    //     console.log('notes',notes)
    //     window.localStorage.setItem("Notes", JSON.stringify(notes));
    // }, [notes]);
    
    // useEffect(() => {
    //     const data = window.localStorage.getItem("Notes");
    //     if (data) {
    //         setNotes(JSON.parse(data))
    //     }
    // }, [])
    
    return (
        <div>
            <Header />
            <div className="notes-container">
                {notesList.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        deleteNote={deleteNote}
                    />
                ))}
            </div>
            <AddNote />
        </div>
    );
}

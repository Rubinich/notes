// import React from "react";
// import { v4 as uuid } from "uuid";
// import "../notes/notes.css";
// import Note from "../note/note";
// import CreateNote from "../createnote/createnote";


// function ShowNotes({ notes, setNotes, inputText, setInputText, textHandler, saveHandler, deleteNote }) {
//     return (
//         <div className="notes">
//             {notes && notes.map((note) => (
//                 <Note
//                     key={note.id}
//                     id={note.id}
//                     text={note.text}
//                     deleteNote={deleteNote}
//                 />
//             ))}
//             <CreateNote
//                 textHandler={textHandler}
//                 saveHandler={saveHandler}
//                 inputText={inputText}
//             />
//         </div>
//     );
// }
// export default ShowNotes;

import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import "../notes/notes.css";
import Note from "../note/note";
import CreateNote from "../createnote/createnote";

function Notes() {
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
        <div className="notes">
            
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            />
        </div>
    );
}
export default Notes;
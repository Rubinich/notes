import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import "../notes/notes.css";
import Note from "../note/note";
import CreateNote from "../createnote/createnote";
import Navbar from "../navbar/navbar";

function Notes({ notesList, setNotesList}) {
    const [inputText, setInputText] = useState("");
    const textHandler = (e) => {
        setInputText(e.target.value);
    };

    const saveHandler = () => {
        setNotesList(() => [
            ...notesList,
        {
            id: uuid(),
            text: inputText,
        },
        ]);
        setInputText("");
    };
    return (
        <div className="notes">
            {/*notesList.map((note) => (
                <Note
                key={note.id}
                id={note.id}
                text={note.text}
                deleteNote={deleteNote}
                />
            )) */}
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            /> 
        </div>
    );
}
export default Notes;

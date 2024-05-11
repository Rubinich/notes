import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import "../notes/notes.css";
import CreateNote from "../createnote/createnote";

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
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            /> 
        </div>
    );
}
export default Notes;

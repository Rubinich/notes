import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import "../notes/notes.css";
import CreateNote from "../createnote/createnote";
import closeBtn from "../../assets/close-icon.svg"

function Notes({ notesList, setNotesList, disabled  }) {
    const [inputText, setInputText] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const textHandler = (e) => {
        setInputText(e.target.value);
        setShowWarning(false);
    };

    const saveHandler = () => {
        if (inputText.trim() !== "") {
            setNotesList((prevNotes) => [
                ...prevNotes,
                {
                    id: uuid(),
                    text: inputText,
                },
            ]);
            setInputText("");
        } else {
            setShowWarning(true);
        }
    };
    const handleBackgroundClick = (e) => {
        e.stopPropagation();
    };

    
    return (
        <div className="notes" onClick={handleBackgroundClick}>
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
                disabled={disabled}
            />
            {showWarning && (
                <Warning onClick={(e) => e.stopPropagation()}>
                    <span>Please enter your note. Don't waste our space! :)</span>
                    <img src={closeBtn} alt="" />
                </Warning>
            )}
        </div>
    );
}
export default Notes;

function Warning() {
    return (
        <div className="warning">
            <span>Please enter your note. Don't waste our space! :)</span>
            <img src={closeBtn} alt="" />
        </div>
    );
}
import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import "../notes/notes.css";
import CreateNote from "../createnote/createnote";
import closeBtn from "../../assets/close-icon.svg"
import { useTranslation } from "react-i18next";

function Notes({ notesList, setNotesList, disabled }) {
    const [inputText, setInputText] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const textHandler = (e) => {
        setInputText(e.target.value);
        setShowWarning(false);
    };

    const saveHandler = () => {
        if (inputText.trim() !== "") {
            const newNote = {
                id: uuid(),
                text: inputText,
            };
            setNotesList((prevNotes) => [...prevNotes, newNote]);
            setInputText("");                    
        } else {
            setShowWarning(true);
        }
    };
    

    return (
        <div className="notes">
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
                disabled={disabled}
            />
            {showWarning && (
                <Warning onClose={() => setShowWarning(false)} />
            )}
        </div>
    );
}
export default Notes;

function Warning({ onClose }) {
    const handleClose = () => {
        onClose();
    }
    const [isCloseClicked, setIsCloseClicked] = useState(false);
    const closeBtnClass = isCloseClicked ? "closeBtn clicked" : "closeBtn";
    const isCloseBtnClicked = () => {
        setIsCloseClicked(!isCloseClicked);
    };
    const { t } = useTranslation();
    return (
        <div className="warning">
            <span>{t("warning")}</span>
            <div className={closeBtnClass} onClick={isCloseBtnClicked} onTransitionEnd={handleClose}>
                <button><img src={closeBtn} alt="" /></button>
            </div>
        </div>
    );
}
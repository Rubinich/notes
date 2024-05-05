import "./navbar.css";
import "./../../App.css";
import React, { useState } from "react";
import notesNoFillBtn from "./../../assets/note-nofill.svg";
import notesFillBtn from "./../../assets/note-fill.svg";
import toDoNoFillBtn from "./../../assets/todo-nofill.svg"
import toDoFillBtn from "./../../assets/todo-fill.svg"

export default function Navbar() {
    const [isNoteActive, setIsNoteActive] = useState(true);
    const [textNoteColor, setNoteTextColor] = useState("#2B6CFF");

    const isNoteClicked = () => {
        if(isNoteActive === true && isTodoActive === false){
            return null;
        } else if (isNoteActive === false && isTodoActive === true) {
            setIsNoteActive(true);
            setNoteTextColor("#2B6CFF");
            setIsTodoActive(false);
            setTodoTextColor("#5E5E5E");
        }
    };

    const [isTodoActive, setIsTodoActive] = useState(false);
    const [textTodoColor, setTodoTextColor] = useState("#5E5E5E");
    const isTodoClicked = () => {
        if(isTodoActive === true && isNoteActive === false){
            return null;
        } else if (isTodoActive === false && isNoteActive === true) {
            setIsNoteActive(false);
            setNoteTextColor("#5E5E5E");
            setIsTodoActive(true);
            setTodoTextColor("#2B6CFF");
        }
    };

    return (
        <div className="nav-wrapper">
            <div className="nav-btn">
                <button onClick={isNoteClicked}>
                    {isNoteActive ? (
                        <img src={notesFillBtn} alt=""/>
                    ) : (
                        <img src={notesNoFillBtn} alt=""/>
                    )}
                    <span style={{ color: textNoteColor }}>Notes</span>
                </button>
            </div>
            <div className="nav-btn">
            <button onClick={isTodoClicked}>
                    {isTodoActive ? (
                        <img src={toDoFillBtn} alt=""/>
                    ) : (
                        <img src={toDoNoFillBtn} alt=""/>
                    )}
                    <span style={{ color: textTodoColor }}>To-dos</span>
                </button>
            </div>
        </div>
    );
}
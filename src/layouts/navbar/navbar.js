import "./navbar.css";
import React, { useState } from "react";
import notesNoFillButton from "./../../assets/note-nofill.svg";
import notesFillButton from "./../../assets/note-fill.svg";
import toDoNoFillButton from "./../../assets/todo-nofill.svg"
import toDoFillButton from "./../../assets/todo-fill.svg"

export default function Navbar() {
    const [isNoteActive, setIsNoteActive] = useState(false);
    const [textNoteColor, setNoteTextColor] = useState("");
    const isNoteClicked = () => {
        setIsNoteActive(!isNoteActive);
        setNoteTextColor(isNoteActive ? "#5E5E5E" : "#2B6CFF");
    };

    const [isTodoActive, setIsTodoActive] = useState(false);
    const [textTodoColor, setTodoTextColor] = useState("");
    const isTodoClicked = () => {
        setIsTodoActive(!isTodoActive);
        setTodoTextColor((isTodoActive ? "#5E5E5E" : "#2B6CFF"));
    };

    return (
        <div className="nav-wrapper">
            <div className="nav-btn">
                <button onClick={isNoteClicked}>
                    {isNoteActive ? (
                        <img src={notesFillButton} alt=""/>
                    ) : (
                        <img src={notesNoFillButton} alt=""/>
                    )}
                    <span style={{ color: textNoteColor }}>Notes</span>
                </button>
            </div>
            <div className="nav-btn">
            <button onClick={isTodoClicked}>
                    {isTodoActive ? (
                        <img src={toDoFillButton} alt=""/>
                    ) : (
                        <img src={toDoNoFillButton} alt=""/>
                    )}
                    <span style={{ color: textTodoColor }}>To-dos</span>
                </button>
            </div>
        </div>
    );
}
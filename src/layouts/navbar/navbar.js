import "./navbar.css";
import "./../../App.css";
import React, { useState } from "react";
import notesNoFillBtn from "./../../assets/note-nofill.svg";
import notesFillBtn from "./../../assets/note-fill.svg";
import toDoNoFillBtn from "./../../assets/todo-nofill.svg"
import toDoFillBtn from "./../../assets/todo-fill.svg"

export default function Navbar() {
    const [isNoteActive, setIsNoteActive] = useState(false);
    const [textNoteColor, setNoteTextColor] = useState("");
    const isNoteClicked = () => {
        if(isTodoActive){
            isTodoClicked();
        }
        setIsNoteActive(!isNoteActive);
        setNoteTextColor(isNoteActive ? "#5E5E5E" : "#2B6CFF");
    };

    const [isTodoActive, setIsTodoActive] = useState(false);
    const [textTodoColor, setTodoTextColor] = useState("");
    const isTodoClicked = () => {
        if(isNoteActive){
            isNoteClicked();
        }
        setIsTodoActive(!isTodoActive);
        setTodoTextColor((isTodoActive ? "#5E5E5E" : "#2B6CFF"));
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
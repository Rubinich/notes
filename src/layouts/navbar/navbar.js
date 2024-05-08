import "./navbar.css";
import { useState } from "react";
import notesNoFillBtn from "./../../assets/note-nofill.svg";
import notesFillBtn from "./../../assets/note-fill.svg";
import toDoNoFillBtn from "./../../assets/todo-nofill.svg"
import toDoFillBtn from "./../../assets/todo-fill.svg"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isNoteActive, setIsNoteActive] = useState(true);
    const [isTodoActive, setIsTodoActive] = useState(false);
    const [textNoteColor, setNoteTextColor] = useState("#2B6CFF");
    const [textTodoColor, setTodoTextColor] = useState("#5E5E5E");

    const isNoteClicked = () => {
        setIsNoteActive(true);
        setNoteTextColor("#2B6CFF");
        setIsTodoActive(false);
        setTodoTextColor("#5E5E5E");
    };
    const isTodoClicked = () => {
        setIsNoteActive(false);
        setNoteTextColor("#5E5E5E");
        setIsTodoActive(true);
        setTodoTextColor("#2B6CFF");
    }



    const navigate = useNavigate()
    const goToNotes = () => {
        console.log("Navigating to notes");
        navigate("/")
    }
    const goToTodos = () => {
        console.log("Navigating to todos");
        navigate("/todos")
    }


    return (
        <div className="nav-wrapper">
            <div className="nav-btn">
                <button onClick={() => goToNotes() && isNoteClicked()}>
                    {isNoteActive ? (
                        <img src={notesFillBtn} alt=""/>
                    ) : (
                        <img src={notesNoFillBtn} alt=""/>
                    )}
                    {isNoteActive ? (
                        <span style={{ color: textNoteColor, fontWeight: 700 }}>Notes</span>
                    ) : (
                        <span style={{ color: textNoteColor, fontWeight: 400 }}>Notes</span>
                    )}
                </button>
            </div>
            <div className="nav-btn" >
                <button onClick={() => goToTodos() && isTodoClicked()}>
                    {isTodoActive ? (
                        <img src={toDoFillBtn} alt="" />
                    ) : (
                        <img src={toDoNoFillBtn} alt=""/>
                    )}
                    {isTodoActive ? (
                        <span style={{ color: textTodoColor, fontWeight: 700 }}>To-dos</span>
                    ) : (
                        <span style={{ color: textTodoColor, fontWeight: 400 }}>To-dos</span>
                    )}
                </button>
            </div>
        </div>
    );
}
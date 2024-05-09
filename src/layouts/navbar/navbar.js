import "./navbar.css";
//import { useState } from "react";
import notesNoFillBtn from "./../../assets/note-nofill.svg";
//import notesFillBtn from "./../../assets/note-fill.svg";
import toDoNoFillBtn from "./../../assets/todo-nofill.svg"
//import toDoFillBtn from "./../../assets/todo-fill.svg"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    /*const [isNoteActive, setIsNoteActive] = useState(true);
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
    }*/



    const navigate = useNavigate()
    const goToNotes = () => {
        navigate("/")
    }
    const goToTodos = () => {
        navigate("/todos")
    }

    return (
        <div className="nav-wrapper">
            <div className="nav-btn">
                <button onClick={() => goToNotes()}>
                    <img src={notesNoFillBtn} alt=""/>
                    <span>Notes</span>
                </button>
            </div>
            <div className="nav-btn" >
                <button onClick={() => goToTodos()}>
                    <img src={toDoNoFillBtn} alt=""/>
                    <span>To-dos</span>
                </button>
            </div>
        </div>
    );
}
import "./navbar.css";
import { useState } from "react";
import notesNoFillBtn from "./../../assets/note-nofill.svg";
import notesFillBtn from "./../../assets/note-fill.svg";
import toDoNoFillBtn from "./../../assets/todo-nofill.svg"
import toDoFillBtn from "./../../assets/todo-fill.svg"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    const goToNotes = () => {
        navigate("/")
    }
    const goToTodos = () => {
        navigate("/todos")
    }

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

    return (
        <div className="nav-wrapper">
            <div className="nav-btn">
                <button onClick={() => { goToNotes(); isNoteClicked(); }}>
                    {renderNotesBtn(isNoteActive, textNoteColor)}
                </button>
            </div>
            <div className="nav-btn" >
                <button onClick={() => { goToTodos(); isTodoClicked(); }}>
                    {renderTodoBtn(isTodoActive, textTodoColor)}
                </button>
            </div>
        </div>
    );
}

function renderNotesBtn(isNoteActive, textNoteColor) {
    if (isNoteActive) {
        return (
            <>
                <img src={notesFillBtn} alt="" style={{ backgroundColor: "#B9CEFF" }} />
                <span style={{ color: textNoteColor, fontWeight: 700 }}>Notes</span>
            </>
        );
    } else {
        return (
            <>
                <img src={notesNoFillBtn} alt="" />
                <span style={{ color: textNoteColor, fontWeight: 400 }}>Notes</span>
            </>
        );
    }
}


function renderTodoBtn(isTodoActive, textTodoColor) {
    if (isTodoActive) {
        return (
            <>
                <img src={toDoFillBtn} alt="" style={{ backgroundColor: "#b9ceff" }} />
                <span style={{ color: textTodoColor, fontWeight: 700 }}>To-dos</span>
            </>
        );
    } else {
        return (
            <>
                <img src={toDoNoFillBtn} alt="" />
                <span style={{ color: textTodoColor, fontWeight: 400 }}>To-dos</span>
            </>
        );
    }
}
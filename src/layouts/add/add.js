import "./add.css";
import addBtn from "./../../assets/add-icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNote() {
    const navigate = useNavigate()
    const goToMakeNote = () => {
        navigate("/make-note")
    }
    
    const [isClicked, setIsClicked] = useState(false);
    const addBtnClass = isClicked ? "add-btn clicked" : "add-btn";
    const isAddClicked = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="add-wrapper">
            <div className={addBtnClass} onClick={isAddClicked} onTransitionEnd={goToMakeNote}>
                <button><img src={addBtn} alt="" /></button>
            </div>
        </div>
    );
}
import "./add.css";
import addBtn from "./../../assets/add-icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNote() {
    const navigate = useNavigate()
    const goToMakeNote = () => {
        navigate("/make-note")
    }
    
    const [isADClicked, setIsADClicked] = useState(false);
    const addBtnClass = isADClicked ? "add-btn clicked" : "add-btn";
    const isAddClicked = () => {
        setIsADClicked(!isADClicked);
    };

    return (
        <div className="add-wrapper">
            <div className={addBtnClass} onClick={isAddClicked} onTransitionEnd={goToMakeNote}>
                <button><img src={addBtn} alt="" /></button>
            </div>
        </div>
    );
}
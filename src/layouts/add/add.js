import "./add.css";
import "./../../App.css";
import { useState } from "react";
import addBtn from "./../../assets/add-icon.svg";

export default function AddNote({ onClick }) {
    const [isClicked, setIsClicked] = useState(false);
    const isAddClicked = () => {
        setIsClicked(!isClicked);
    };
    const handleTransitionEnd = () => {
        onClick();
    };

    return (
        <div className="add-wrapper" onClick={onClick}>
            <div className={`add-btn ${isClicked ? 'clicked' : ''}`} onClick={isAddClicked} onTransitionEnd={handleTransitionEnd}>
                <button><img src={addBtn} alt=""/></button>
            </div>
        </div>
    );
}
import returnBtn from "./../../assets/return-icon.svg"
import confirmBtn from "./../../assets/check-icon.svg"
import "./header-add.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeaderAdd({ saveHandler }) {
    const navigate = useNavigate()
    const returnToNotes = () => {
        navigate("/");
    }

    const [isClicked, setIsClicked] = useState(false);
    const returnBtnClass = isClicked ? "returnBtn clicked" : "returnBtn";
    const isReturnClicked = () => {
        setIsClicked(!isClicked);
    };

    const [isAddClicked, setIsAddClicked] = useState(false);
    const confirmBtnClass = isAddClicked ? "confirmBtn clicked" : "confirmBtn";
    const isAddBtnClicked = () => {
        setIsAddClicked(!isAddClicked);
    };

    return (
        <div className="headeradd-wrapper">
            <div className={returnBtnClass} onClick={isReturnClicked} onTransitionEnd={returnToNotes}>
                <button className="btn1"><img src={returnBtn} alt=""/></button>
            </div>
            <div className={confirmBtnClass} onClick={isAddBtnClicked} onTransitionEnd={saveHandler}>
                <button className="btn2"><img src={confirmBtn} alt=""/></button>
            </div>
        </div>
        
    );
}
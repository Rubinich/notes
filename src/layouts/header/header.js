import "./header.css";
import "./../../App.css";
import { useState } from "react";
import menuBtn from "./../../assets/menu-icon.svg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header-wrapper">
            <span>My notes</span>
            <div className="menu-btn" onClick={toggleDropdown}>
                <button><img src={menuBtn} alt=""/></button>
                {isOpen && (
                    <div className="menu-layout">
                        <ul>
                            <DropDownItem text={"Croatian language"} />
                            <hr></hr>
                            <DropDownItem text={"English language"} />
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

function DropDownItem(props) {
    return (
        <li className="dropDownItem">{props.text}</li>
    );
}
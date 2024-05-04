import "./add.css";
import "./../../App.css";
import addBtn from "./../../assets/add-icon.svg";

export default function AddNote() {
    return (
        <div className="add-wrapper">
            <div className="add-btn">
                <button><img src={addBtn} alt=""/></button>
            </div>
        </div>
    );
}
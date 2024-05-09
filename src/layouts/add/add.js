import "./add.css";
import "./../../App.css";
import addBtn from "./../../assets/add-icon.svg";
import { useNavigate } from "react-router-dom";

export default function AddNote() {
    /*const [isClicked, setIsClicked] = useState(false);
    const isAddClicked = () => {
        setIsClicked(!isClicked);
    };
    const handleTransitionEnd = () => {
        onClick();
    };*/
    const navigate = useNavigate()
    const goToMakeNote = () => {
        navigate("/make-note")
    }

    return (
        <div className="add-wrapper">
            <div className="add-btn" onClick={() => goToMakeNote()}>
                <button><img src={addBtn} alt=""/></button>
            </div>
        </div>
    );
}
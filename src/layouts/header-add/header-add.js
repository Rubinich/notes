import returnBtn from "./../../assets/return-icon.svg"
import confirmBtn from "./../../assets/check-icon.svg"
import "./header-add.css"
import { useNavigate } from "react-router-dom";

export default function HeaderAdd() {
    const navigate = useNavigate()
    const returnToNotes = () => {
        navigate("/")
    }

    return (
        <div className="headeradd-wrapper">
            <button onClick={() => returnToNotes()}><img src={returnBtn} alt=""/></button>
            <button><img src={confirmBtn} alt=""/></button>
        </div>
        
    );
}
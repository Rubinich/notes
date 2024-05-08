import returnBtn from "./../../assets/return-icon.svg"
import confirmBtn from "./../../assets/check-icon.svg"
import "./header-add.css"

export default function HeaderAdd() {

    return (
        <div className="headeradd-wrapper">
            <button><img src={returnBtn} alt=""/></button>
            <button><img src={confirmBtn} alt=""/></button>
        </div>
        
    );
}
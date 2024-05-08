import returnBtn from "./../../assets/return-icon.svg"
import "./header-add.css"

export default function HeaderAdd(){
    return (
        <div className="headeradd-wrapper">
            <button><img src={returnBtn} alt=""/></button>
        </div>
        
    );
}
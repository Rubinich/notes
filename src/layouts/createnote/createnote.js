import { React } from "react";
import HeaderAdd from "../header-add/header-add.js";


function CreateNote({ textHandler, saveHandler, inputText }) {
    return (
        <>
            <HeaderAdd saveHandler={saveHandler}/>
            <div className="note" style={{ background: "rgb(43, 108, 255)" }}> 
                <textarea
                    cols="10"
                    rows="5"
                    value={inputText}
                    placeholder="Enter note"
                    onChange={textHandler}
                    maxLength="150"
                ></textarea>
            </div>
        </>
    );
}
export default CreateNote;
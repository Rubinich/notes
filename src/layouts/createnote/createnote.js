import { React } from "react";
import HeaderAdd from "../header-add/header-add.js";


function CreateNote({ textHandler, saveHandler, inputText }) {
    return (
        <>
            <HeaderAdd saveHandler={saveHandler}/>
            <div className="note" style={{ background: "rgba(43, 108, 255, 0.5)" }}> 
                <textarea
                    cols="10"
                    rows="5"
                    value={inputText}
                    placeholder="Enter note"
                    onChange={textHandler}
                    maxLength="150"
                ></textarea>
                {/* <div className="note__footer">
                    <span className="label"></span>
                    <button className="note__save" onClick={saveHandler}>
                        Save
                    </button>
                </div> */}
            </div>
        </>
    );
}
export default CreateNote;
import { React } from "react";

function CreateNote({ textHandler, saveHandler, inputText }) {
    return (
        <div className="note" style={{ background: "rgba(43, 108, 255, 0.5)" }}> 
            <textarea
                cols="10"
                rows="5"
                value={inputText}
                placeholder="Type...."
                onChange={textHandler}
                maxLength="100"
            ></textarea>
            <div className="note__footer">
                <span className="label"></span>
                <button className="note__save" onClick={saveHandler}>
                    Save
                </button>
            </div>
        </div>
    );
}
export default CreateNote;
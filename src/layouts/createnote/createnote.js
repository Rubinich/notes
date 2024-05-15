import { React, useState, useEffect } from "react";
import HeaderAdd from "../header-add/header-add.js";


function CreateNote({ textHandler, saveHandler, inputText, maxLength  }) {
    const [remainingCharacters, setRemainingCharacters] = useState(maxLength);

    useEffect(() => {
        setRemainingCharacters(maxLength - inputText.length);
    }, [inputText]);
    maxLength = 1000;

    return (
        <>
            <HeaderAdd saveHandler={saveHandler}/>
            <div className="note" style={{ background: "rgb(43, 108, 255)" }}> 
                <textarea
                    cols="10"
                    rows="10"
                    value={inputText}
                    placeholder="Enter note"
                    onChange={textHandler}
                    /*maxLength="500"*/
                    maxLength={maxLength}
                ></textarea>
                <div className="character-counter">
                    {remainingCharacters} characters remaining
                </div>
            </div>
        </>
    );
}
export default CreateNote;
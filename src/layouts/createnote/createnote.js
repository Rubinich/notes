import { React, useEffect, useState } from "react";
import HeaderAdd from "../header-add/header-add.js";


function CreateNote({ textHandler, saveHandler, inputText , maxLength }) {
    const [textareaHeight, setTextareaHeight] = useState("auto");
    const [remainingCharacters, setRemainingCharacters] = useState(maxLength);

    useEffect(() => {
        setTextareaHeight(`${inputText.split("\n").length * 1.2}em`);
        setRemainingCharacters(maxLength - inputText.length);
    }, [inputText]);
    maxLength = 1000;



    return (
        <>
            <HeaderAdd saveHandler={saveHandler} />
            <div className="note" style={{ background: "rgb(43, 108, 255)" }}>
                <textarea

                    value={inputText}
                    placeholder="Enter note"
                    onChange={textHandler}
                    maxLength={maxLength}
                    style={{ height: textareaHeight, resize: "none" }}
                ></textarea>
                <div className="character-counter">
                    {remainingCharacters} characters remaining
                </div>
            </div>
        </>
    );
}
export default CreateNote;
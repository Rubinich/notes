import React, { useState, useEffect } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import copyBtn from "./../../assets/copy-icon.svg";
import "./note.css";
import ClipboardJS from "clipboard";

export default function Note({ id, text, deleteNote }) {
    const [showCopyMessage, setShowCopyMessage] = useState(false);

    useEffect(() => {
        const clipboard = new ClipboardJS(`.copyBtn${id}`);

        clipboard.on('success', function(e) {
            setShowCopyMessage(true);
            setTimeout(() => {
                setShowCopyMessage(false);
            }, 2000); // Hide the message after 2 seconds
        });
        clipboard.on('error', function(e) {
            setShowCopyMessage(true);
            setTimeout(() => {
                setShowCopyMessage(false);
            }, 2000); // Hide the message after 2 seconds
        });

        return () => clipboard.destroy();
    }, [id]);

    return (
        <div className="note2">
            <div className="note__body">{text}</div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <button className={`copyBtn copyBtn${id}`} data-clipboard-text={text}><img src={copyBtn} alt="" /></button>
                {showCopyMessage && <span className="result">Copied to clipboard!</span>}
                <DeleteForeverOutlinedIcon
                    className="note__delete"
                    onClick={() => deleteNote(id)}
                    style={{ width: "30px", height: "30px" }}
                    aria-hidden="true">
                </DeleteForeverOutlinedIcon>
            </div>
        </div>
    );
}

import { React, useState, useEffect } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import copyBtn from "./../../assets/copy-icon.svg"
import "./note.css"
import ClipboardJS from "clipboard";

export default function Note({ id, text, deleteNote }) {
    const sharedText = text;
    const [result, setResult] = useState({
        show: false,
        content: "",
    });

    useEffect(() => {
        const clipboard = new ClipboardJS('.copyBtn');
        
        clipboard.on('success', function(e) {
            setResult({ show: true, content: "Copied to clipboard!" });
        });
        clipboard.on('error', function(e) {
            setResult({ show: true, content: "Failed to copy to clipboard" });
        });

        return () => clipboard.destroy();
    }, []);

    useEffect(() => {
        if (result.show) {
            const timeoutId = setTimeout(() => {
                setResult({ show: false, content: "" });
            }, 2000); 

            return () => clearTimeout(timeoutId); 
        }
    }, [result]);


    return (
        <div className="note2">
            <div className="note__body">{text}</div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <button className="copyBtn" data-clipboard-text={sharedText}><img src={copyBtn} alt="" /></button>
                {result.show && <span className="result">{result.content}</span>}
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

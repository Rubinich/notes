import React, { useState, useEffect } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import copyBtn from "./../../assets/copy-icon.svg";
import "./note.css";
import ClipboardJS from "clipboard";
import { Draggable } from "react-beautiful-dnd";

export default function Note({ id, text, deleteNote, index }) {
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    useEffect(() => {
        const clipboard = new ClipboardJS(`.copyBtn${id}`);
        clipboard.on('success', function (e) {
            setShowCopyMessage(true);
            setTimeout(() => {
                setShowCopyMessage(false);
            }, 2000);
        });
        clipboard.on('error', function (e) {
            setShowCopyMessage(true);
            setTimeout(() => {
                setShowCopyMessage(false);
            }, 2000);
        });
        return () => clipboard.destroy();
    }, [id]);

    const getItemStyle = (isDragging, draggableStyle) => ({
        userSelect: "none",
        backgroundColor: isDragging ? "#021068" : "rgb(43, 108, 255)",
        ...draggableStyle
    });

    return (
        <Draggable key={id} draggableId={id} index={index} className="note">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    className="note-style"
                >
                    <div className="note__body">{text}</div>
                    <div className="note__footer" style={{ justifyContent: "flex-end"}}>
                        <button className={`copyBtn copyBtn${id}`} data-clipboard-text={text}><img src={copyBtn} alt="" /></button>
                        {showCopyMessage && <span className="result">Copied to clipboard!</span>}
                        <DeleteForeverOutlinedIcon
                            className="note__delete"
                            onClick={() => deleteNote(id)}
                            style={{ width: "30px", height: "30px" }}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            )}
        </Draggable>
    );
}

import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function Note({ id, text, deleteNote }) {
    return (
        <div className="note2"> 
        <div className="note__body">{text}</div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <DeleteForeverOutlinedIcon
                    className="note__delete"
                    onClick={() => deleteNote(id)}
                    aria-hidden="true"
                ></DeleteForeverOutlinedIcon>
            </div>
        </div>
    );
}

import Header from "./../header/header.js";
import AddNote from "./../add/add.js";
import Notes from "../notes/notes.js";
import Note from "../note/note.js";

export default function ShowNotes({ notesList }) {
    return (
        <div>
            <Header />
            <div className="notes-container">
                {notesList.map((note, index) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        deleteNote={index}
                    />
                ))}
            </div>
            <AddNote />
        </div>
    );
}

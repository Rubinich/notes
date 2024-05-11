import Header from "./../header/header.js";
import AddNote from "./../add/add.js";
import Notes from "../notes/notes.js";
import Note from "../note/note.js";

export default function ShowNotes({ notesList, setNotes , notes}) {
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    return (
        <div>
            <Header />
            <div className="notes-container">
                {notesList.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        deleteNote={deleteNote}
                    />
                ))}
            </div>
            <AddNote />
        </div>
    );
}

import { useState } from "react";
import Notes from "./../notes/notes.js";
import Header from "./../header/header.js";
import AddNote from "./../add/add.js";

export default function ShowNotes() {
    const [showAddScreen, setShowAddScreen] = useState(false);
    const handleAddButtonClick = () => {
        setShowAddScreen(true);
    };

    return (
        <div>
            {!showAddScreen && (
                <>
                    <Header />
                    <AddNote onClick={handleAddButtonClick} />
                </>
            )}
            {showAddScreen && <Notes />}
        </div>
    );
}
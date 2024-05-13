import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Header from "./../header/header.js";
import AddNote from "./../add/add.js";
import Note from "../note/note.js";

export default function ShowNotes({ notesList, setNotes }) {
    const deleteNote = (id) => {
        const filteredNotes = notesList.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = Array.from(notesList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setNotes(items);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Header />
                <Droppable droppableId="notes">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="notes-container"
                        >
                            {notesList.map((note, index) => (
                                <Note
                                    key={note.id}
                                    id={note.id}
                                    text={note.text}
                                    deleteNote={deleteNote}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <AddNote />
            </div>
        </DragDropContext>
    );
}

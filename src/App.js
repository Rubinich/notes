import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import AddNote from "./layouts/add/add.js";
import React, { useState } from "react";
import Note from "./layouts/note/note.js";
import Notes from "./layouts/notes/notes.js";
// import "./layouts/notes/notes.css"
function App() {
  const [showAddScreen, setShowAddScreen] = useState(false);
  const handleAddButtonClick = () => {
    setShowAddScreen(true);
  };
  
  return (
    <div className="App">
      {!showAddScreen && (
        <>
          <AddNote onClick={handleAddButtonClick} />
          <Navbar/>
        </>
      )}
      {showAddScreen && <Notes/>}
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import AddNote from "./layouts/add/add.js";
import React, { useState } from "react";
<<<<<<< Updated upstream
import Note from "./layouts/note/note.js";
import Notes from "./layouts/notes/notes.js";
// import "./layouts/notes/notes.css"
=======
import AddScreenNote from "./layouts/add-screen/add-screen.js"
import Header from "./layouts/header/header.js"

>>>>>>> Stashed changes
function App() {
  const [showAddScreen, setShowAddScreen] = useState(false);
  const handleAddButtonClick = () => {
    setShowAddScreen(true);
  };
  
  return (
    <div className="App">
      {!showAddScreen && (
        <>
          <Header/>
          <AddNote onClick={handleAddButtonClick} />
          <Navbar/>
        </>
      )}
      {showAddScreen && <Notes/>}
    </div>
  );
}

export default App;

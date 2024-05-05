import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import AddNote from "./layouts/add/add.js";
import React, { useState } from "react";
import Notes from "./layouts/notes/notes.js";
import Header from "./layouts/header/header.js"

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

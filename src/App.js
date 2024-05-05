import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import AddNote from "./layouts/add/add.js";
import React, { useState } from "react";
import AddScreenNote from "./layouts/add-screen/add-screen.js"

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
      {showAddScreen && <AddScreenNote/>}
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import AddNote from "./layouts/add/add.js";

function App() {
  return (
    <div className="App">
      <AddNote/>
      <Navbar/>
    </div>
  );
}

export default App;

import "./App.css";
import Notes from "./layouts/screen1/screen1.js";
import Todos from "./layouts/screen2/screen2.js";
import MakeNote from "./layouts/notes/notes.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />}/>
          <Route path="/todos" element={<Todos />}/>
          <Route path="/make-note" element={<MakeNote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
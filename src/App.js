import "./App.css";
import Navbar from "./layouts/navbar/navbar.js";
import Notes from "./layouts/screen1/screen1.js";
import Todos from './layouts/screen2/screen2.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Notes />}/>
          <Route path="/todos" element={<Todos />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Header from "./../header/header.js";
import AddNote from "./../add/add.js";
import Navbar from "../navbar/navbar.js";

export default function ShowNotes() {
    return (
        <div>
            <Header />
            <AddNote />
            <Navbar />
        </div>
    );
}
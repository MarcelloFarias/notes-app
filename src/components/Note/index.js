import React from "react";
import './style.css';
import { IoMdClose } from "react-icons/io";

const Note = ({ note, onDelete }) => {
    return (
        <>
            <li className="note" style={{background: note?.backgroundColor}}> 
                <button className="btn-delete" onClick={onDelete}><IoMdClose/></button>
                <p>{note?.note}</p>
            </li>
        </>
    );
}

export default Note;
import React from "react";
import './style.css';
import { FaTrash } from "react-icons/fa";

const Note = ({ note, onDelete }) => {
    return (
        <>
            <li className="note" style={{background: note?.backgroundColor}}> 
                <p>{note?.note}</p>
                <button className="btn-delete" onClick={onDelete}><FaTrash/></button>
            </li>
        </>
    );
}

export default Note;
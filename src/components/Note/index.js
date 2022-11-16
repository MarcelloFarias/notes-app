import React from "react";
import './style.css';

const Note = ({ note, onDelete }) => {
    return (
        <>
            <li className="note"> 
                <p>{note}</p>
                <button className="btn-delete" onClick={onDelete}>delete</button>
            </li>
        </>
    );
}

export default Note;
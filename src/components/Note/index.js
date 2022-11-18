import React from "react";
import './style.css';

const Note = ({ note, onDelete, background }) => {
    return (
        <>
            <li className="note" style={{background: background}}> 
                <p>{note}</p>
                <button className="btn-delete" onClick={onDelete}>delete</button>
            </li>
        </>
    );
}

export default Note;
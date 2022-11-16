import React from "react";
import './style.css';

const Note = ({ note }) => {
    return (
        <>
            <li className="note"> 
                <p>{note}</p>
                <button className="btn-delete">delete</button>
            </li>
        </>
    );
}

export default Note;
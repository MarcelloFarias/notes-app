import React from "react";
import './style.css';

const NotesList = ({ children }) => {
    return (
        <>
            <ul className="notes-list">
                {children}
            </ul>
        </>
    );
}

export default NotesList;
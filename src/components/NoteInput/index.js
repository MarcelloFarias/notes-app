import React from "react";
import './style.css';

const NoteInput = ({ handleInputValue, inputNoteValue, createNote }) => {
    return (
        <>
            <div className="input-field">
                <input type='text' value={inputNoteValue} onChange={handleInputValue} className="input-note" placeholder="Type The Note Here..." />
                <button className="btn-add" onClick={createNote}>Add Note</button>
            </div>
        </>
    );
}

export default NoteInput;
import React from "react";
import './style.css';

const NoteInput = () => {
    return (
        <>
            <div className="input-field">
                <input type='text' className="input-note" placeholder="Type The Note Here..." />
                <button className="btn-add">Add Task</button>
            </div>
        </>
    );
}

export default NoteInput;
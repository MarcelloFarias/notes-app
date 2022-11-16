import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import NoteInput from './components/NoteInput/index.js';
import NotesList from './components/NotesList/index.js';
import Note from './components/Note/index.js';

function App() {

  const [ notes, setNotes ] = useState([]);
  const [ inputNote, setInputNote ] = useState('');

  function createNote() {
    notes.push(inputNote);
    setNotes(notes);
    setInputNote('');
  }

  return (
    <>
      <Header />
      <main>
        <NoteInput handleInputValue={(e) => setInputNote(e.target.value)} inputNoteValue={inputNote} createNote={createNote} />
        <NotesList>
          {notes.map((note, index) => {
            return (
              <Note key={index} note={note} />
            );
          })}
        </NotesList>
      </main>
    </>
  );
}

export default App;

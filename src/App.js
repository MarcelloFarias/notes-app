import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import NoteInput from './components/NoteInput/index.js';
import NotesList from './components/NotesList/index.js';
import Note from './components/Note/index.js';
import SearchInput from './components/SearchInput/index.js';

function App() {

  const [ notes, setNotes ] = useState([]);
  const [ inputNote, setInputNote ] = useState('');
  const [ inputSearch, setInputSearch ] = useState('');

  function createNote() {
    if(inputNote === '') {
      alert('You must to type any note !');
    }
    else {
      notes.push(inputNote);
      setNotes(notes);
      setInputNote('');
    } 
  }

  function deleteNote(index) {
    if(notes.length > 0) {
      notes.splice(index, 1);
      setNotes([...notes]);
    }
  }

  function searchNote(note) {
    if(note.toLowerCase().includes(inputSearch.toLowerCase())) {
      return note;
    }
    return;
  }

  return (
    <>
      <Header />
      <main>
        <NoteInput handleInputValue={(e) => setInputNote(e.target.value)} inputNoteValue={inputNote} createNote={createNote}/>
        <NotesList>
          {notes.filter((note) => searchNote(note)).map((note, index) => {
            return (
              <Note key={index} note={note} onDelete={() => deleteNote(index)} />
            );
          })}
          <SearchInput handleSearchValue={(e) => setInputSearch(e.target.value)} searchValue={inputSearch} />
        </NotesList>
      </main>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import NoteInput from './components/NoteInput/index.js';
import NotesList from './components/NotesList/index.js';
import Note from './components/Note/index.js';
import SearchInput from './components/SearchInput/index.js';
import ColorsList from './components/ColorsList';
import DotColor from './components/DotColor/index.js';

function App() {

  const [ notes, setNotes ] = useState([{note: null, backgroundColor: null}]);
  const [ inputNote, setInputNote ] = useState('');
  const [ inputSearch, setInputSearch ] = useState('');
  const [ selectedColor, setSelectedColor ] = useState('#fff69b');

  const colors = ['#f6c2d9', '#fff69b', '#bcdfc9', '#a1c8df', '#a4dae2'];

  function createNote() {
    if(inputNote === '') {
      alert('You must to type any note !');
    }
    else {
      notes.push({note: inputNote, backgroundColor: selectedColor});
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
    if(note.note?.toLowerCase().includes(inputSearch.toLowerCase())) {
      return note;
    }
    return;
  }

  return (
    <>
      <Header />
      <main>
        <NoteInput handleInputValue={(e) => setInputNote(e.target.value)} inputNoteValue={inputNote} createNote={createNote}/>
        <ColorsList>
          {colors.map((color, index) => {
            return (
              <DotColor key={index} background={color} selectColor={() => setSelectedColor(color)} selectedColor={selectedColor}/>
            );
          })}
        </ColorsList>
        <NotesList>
          <SearchInput handleSearchValue={(e) => setInputSearch(e.target.value)} searchValue={inputSearch} />
          {notes.filter((note) => searchNote(note)).map((note, index) => {
            return (
              <Note key={index} note={note.note} onDelete={() => deleteNote(index)} background={note.backgroundColor}/>
            );
          })}
        </NotesList>
      </main>
    </>
  );
}

export default App;

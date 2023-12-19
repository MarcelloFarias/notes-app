import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import NoteInput from './components/NoteInput/index.js';
import NotesList from './components/NotesList/index.js';
import Note from './components/Note/index.js';
import SearchInput from './components/SearchInput/index.js';
import ColorsList from './components/ColorsList';
import DotColor from './components/DotColor/index.js';
import Footer from './components/Footer/index.js';

function App() {

  const [ notes, setNotes ] = useState([]);
  const [ inputNote, setInputNote ] = useState('');
  const [ inputSearch, setInputSearch ] = useState('');
  const [ selectedColor, setSelectedColor ] = useState('#fff69b');

  const colors = ['#f6c2d9', '#fff69b', '#bcdfc9', '#a1c8df', '#a4dae2'];

  function createNote() {
    if(inputNote) {
      setNotes((prevValues) => [...prevValues, {note: inputNote, backgroundColor: selectedColor}]);
      setInputNote('');
    }
    else {
      alert('You must to type any note !');
    } 
  }

  function deleteNote(noteToDelete) {
    if(notes.length > 0) {
      setNotes(notes.filter((note) => {
        return note !== noteToDelete;
      }));
    }
  }

  function searchNote(note) {
    if(note.note?.toLowerCase().includes(inputSearch.toLowerCase())) {
      return note;
    }
    return;
  }
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('notes'))?.length > 0) {
      setNotes(JSON.parse(localStorage.getItem('notes')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header />
      <main>
        <NoteInput handleInputValue={(e) => setInputNote(e.target.value)} inputNoteValue={inputNote} createNote={createNote}/>
        <ColorsList>
          {colors.map((color) => {
            return (
              <DotColor key={color} background={color} selectColor={() => setSelectedColor(color)} selectedColor={selectedColor}/>
            );
          })}
        </ColorsList>
        <NotesList>
          {notes?.length > 3 ? (
            <SearchInput handleSearchValue={(e) => setInputSearch(e.target.value)} searchValue={inputSearch} />
          ) : null}
          {notes?.filter((note) => searchNote(note)).map((note, index) => {
            return (
              <Note key={index} note={note} onDelete={() => deleteNote(note)} />
            );
          })}
        </NotesList>
      </main>
      <Footer />
    </>
  );
}

export default App;

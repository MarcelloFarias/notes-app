import React from 'react';
import './App.css';
import Header from './components/Header/index.js';
import NoteInput from './components/NoteInput/index.js';
import NotesList from './components/NotesList/index.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <NoteInput />
        <NotesList />
      </main>
    </>
  );
}

export default App;

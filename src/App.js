import React from 'react';
import './App.css';
import Header from './components/Header/index.js';
import NoteInput from './components/NoteInput/index.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <NoteInput />
      </main>
    </>
  );
}

export default App;

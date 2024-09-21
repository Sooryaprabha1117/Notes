
    
        

import React, { useState } from 'react';
import "./Notes.css";


function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: 'Content of Note 1' },
    { id: 2, title: 'Note 2', content: 'Content of Note 2' }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const addNote = (title, content) => {
    const newNote = { id: notes.length + 1, title, content };
    setNotes([...notes, newNote]);
    setNewTitle('');
    setNewContent('');
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };
   
   
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(newTitle, newContent);
  };

  return (
    <div className="App-wrapper">
    <div className="App">
      <h1>Notes App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit" >Add Note</button>
      </form>
      <div className="notes-list">
        {notes.map(note => (
          <div key={note.id} className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button className="note-button" onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;

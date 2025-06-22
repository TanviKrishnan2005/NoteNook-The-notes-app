import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'

const App = () => {
  const [notes,setNotes]= useState([{
    id: nanoid(),
    text:"this is my first note",
    data:"15/05/2025"
  },
  {
    id: nanoid(),
    text:"this is my second note",
    data:"17/04/2025"
  },
  {
    id: nanoid(),
    text:"this is my third note",
    data:"20/03/2025"
  },
  {
    id: nanoid(),
    text:"this is my fourth note",
    data:"21/04/2025"
  },
]);

const addNote=(text)=>{
  const date = new Date();
  const newNote ={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);

}
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
    
  )
}

export default App
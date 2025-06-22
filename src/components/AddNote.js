import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const[noteText,setNoteText]=useState('')
    const handleChange =(event)=>{
        setNoteText(event.target.value);
    }

    const handlesaveClick=()=>{
        if(noteText.trim().length>0){
             handleAddNote(noteText);
             setNoteText("");
        }
    };
  return (
    <div className="note new">
        <textarea
            rows='8'
            cols='10'
            placeholder="ADD NOTE HERE.."
            value={noteText}
            onChange={handleChange}
            >
        </textarea>
        <div className="note-footer">
            <small>400 Remaining</small>
            <button className="save" onClick={handlesaveClick}>Save Note</button>
        </div>
    </div>
  )
}

export default AddNote
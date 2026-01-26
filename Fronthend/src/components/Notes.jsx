import React from 'react'
import Context from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useContext,useEffect } from 'react';
export default function Notes() {
    const context = useContext(Context);
    const {notes,fetchNotes,addNote, DeleteNote, EditNote} = context;
    useEffect(()=>{
      fetchNotes();
    },[]);
  return (
   <>
   <AddNote/>
    <div>
      <div className="row my-3">
      <h1>Your Notes </h1>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/>
      })}
     </div>
    </div>
   </>
  )
}

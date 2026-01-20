import React from 'react'
import Context from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import { useContext } from 'react';
export default function Notes() {
    const context = useContext(Context);
    const {notes,setNotes} = context;
  return (
    <div>
      <div className="row my-3">
      <h1>Your Notes </h1>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/>
      })}
     </div>
    </div>
  )
}

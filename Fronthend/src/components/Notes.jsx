import React from 'react'
import Context from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useContext,useEffect,useRef } from 'react';
export default function Notes() {
    const context = useContext(Context);
    const {notes,fetchNotes,addNote, DeleteNote, EditNote} = context;
    useEffect(()=>{
      fetchNotes();
      // eslint-disable-next-line
    },[]);
    const updatedNote = (note) =>{
       $('#myModal').modal('toggle')
    }
    const ref = useRef(null)
  return (
   <>
   <AddNote/>
  


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"  ref={ref} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div>
      <div className="row my-3">
      <h1>Your Notes </h1>
      {notes.map((note)=>{
        return <Noteitem key={note._id} updatedNote = {updatedNote} note={note}/>
      })}
     </div>
    </div>
   </>
  )
}

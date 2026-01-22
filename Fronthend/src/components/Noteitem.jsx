import React from "react";
import "../Styling/Noteitem.css"
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
  const { note } = props;
  const context = useContext(noteContext);
  const { DeleteNote} = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} 
          </p>
          <i className="fa-solid fa-trash" onClick={()=>{DeleteNote(note._id)}}></i> <i className="fa-regular fa-pen-to-square"></i>
        </div>
        
      </div>
      
    </div>
  );
};

export default Noteitem;

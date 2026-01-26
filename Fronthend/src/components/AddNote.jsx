import React from "react";
import Context from "../context/notes/noteContext"
import { useContext, useState } from "react";
const AddNote = () => {
        const context = useContext(Context);
        const {addNote} = context;
        const [note,setNote] = useState({title:"",description: "",tag: "default"})
        const handleclick = (e) =>{
                e.preventDefault();
                addNote(note.title,note.description,note.tag);
        }
        const onChange = (e) =>{
            setNote({...note,[e.target.name]: e.target.value})
        }
  return (
    <div>
      <div className="container">
        <h2>Add Your Note </h2>
      </div>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
        
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={handleclick}>
           Add Your Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

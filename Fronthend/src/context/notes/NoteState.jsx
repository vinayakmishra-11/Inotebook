import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  
  const [notes, setNotes] = useState([]);

  // fetchnotes 
  const fetchNotes = async () =>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method : "GET",
      headers :{
        "Content-Type" : "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1YTI0NjVlZGQ1ZjIzYTRlMjEwM2E3In0sImlhdCI6MTc2NzU1NjYwOX0.713Pkcv3NHyWFEjYYTJ55Hf16Vxrs-HNy9H6JWxXFwM",
      }
    });
    const json = await response.json();
    if (Array.isArray(json)) {
    setNotes(json);
  }
  }
  // Add A note
  const addNote = async (title, description, tag) => {
    //ToDo Api CAll:
    const response = await fetch(`${host}/api/notes/fetchallnotes/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1YTI0NjVlZGQ1ZjIzYTRlMjEwM2E3In0sImlhdCI6MTc2NzU1NjYwOX0.713Pkcv3NHyWFEjYYTJ55Hf16Vxrs-HNy9H6JWxXFwM",
      },
      body: JSON.stringify({title,description,tag}),
    });
    
    const note = await response.json();
    console.log("Adding a new note");
    setNotes([...notes, note]);
  };
  // Delete a Node
  const DeleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1YTI0NjVlZGQ1ZjIzYTRlMjEwM2E3In0sImlhdCI6MTc2NzU1NjYwOX0.713Pkcv3NHyWFEjYYTJ55Hf16Vxrs-HNy9H6JWxXFwM",
      },
    });
    const json = response.json();
    console.log(json)
    console.log("Its working deleting", id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note

  const EditNote = async (id, title, description, tag) => {
    //Api Call
    //url
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1YTI0NjVlZGQ1ZjIzYTRlMjEwM2E3In0sImlhdCI6MTc2NzU1NjYwOX0.713Pkcv3NHyWFEjYYTJ55Hf16Vxrs-HNy9H6JWxXFwM",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = await response.json();
    
    // Create a new array with updated note
    const newNotes = notes.map((note) => {
      if (note._id === id) {
        return { ...note, title, description, tag };
      }
      return note;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, fetchNotes,addNote, DeleteNote, EditNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

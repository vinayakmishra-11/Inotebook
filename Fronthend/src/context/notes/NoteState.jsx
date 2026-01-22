import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [
    {
      _id: "695d60bcbb803c3d038254291",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254292",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254293",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254294",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254295",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254296",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254297",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
    {
      _id: "695d60bcbb803c3d038254298",
      user: "695a2465edd5f23a4e2103a7",
      title: "my title updated",
      description: "pls wake early updated",
      tag: "personal",
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
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
    
    const note = {
      _id: "695d60bcbb803c3d038254299",
      user: "695a2465edd5f23a4e2103a7",
      title: title,
      description: description,
      tag: tag,
      date: "2026-01-06T19:21:32.465Z",
      __v: 0,
    };
    console.log("Adding a new note");
    setNotes([...notes, note]);
  };
  // Delete a Node
  const DeleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1YTI0NjVlZGQ1ZjIzYTRlMjEwM2E3In0sImlhdCI6MTc2NzU1NjYwOX0.713Pkcv3NHyWFEjYYTJ55Hf16Vxrs-HNy9H6JWxXFwM",
      },
      body: JSON.stringify(data),
    });
    const json = response.json();
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1YTI0NjVlZGQ1ZjIzYTRlMjEwM2E3In0sImlhdCI6MTc2NzU1NjYwOX0.713Pkcv3NHyWFEjYYTJ55Hf16Vxrs-HNy9H6JWxXFwM",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, DeleteNote, EditNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

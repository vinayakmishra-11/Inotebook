import React, { useState } from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notes =[
        [
  {
    "_id": "695d60bcbb803c3d03825429",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  }
]
  
    ]
    const [Notes,setNotes]  = useState(notes);
    
    return (
        <NoteContext.Provider value={{ notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
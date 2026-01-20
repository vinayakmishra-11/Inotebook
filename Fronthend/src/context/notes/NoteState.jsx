import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInitial = [
  {
    "_id": "695d60bcbb803c3d038254291",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  },
    {
    "_id": "695d60bcbb803c3d038254292",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  },
    {
    "_id": "695d60bcbb803c3d038254293",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  },
    {
    "_id": "695d60bcbb803c3d038254294",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  },
   {
    "_id": "695d60bcbb803c3d038254295",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  },
   {
    "_id": "695d60bcbb803c3d038254296",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  },
   {
    "_id": "695d60bcbb803c3d038254297",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  }, {
    "_id": "695d60bcbb803c3d038254298",
    "user": "695a2465edd5f23a4e2103a7",
    "title": "my title updated",
    "description": "pls wake early updated",
    "tag": "personal",
    "date": "2026-01-06T19:21:32.465Z",
    "__v": 0
  }
    ]
    const [notes, setNotes] = useState(notesInitial);
    
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "vinayak",
        "class": "5b"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => { // just temperarory 
            setState({
                "name": "Larry",
                "class": "6b"
            })
        }, 1000)
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
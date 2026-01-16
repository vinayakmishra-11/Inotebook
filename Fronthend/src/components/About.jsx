import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useEffect } from 'react'
export default function About() {
  const a = useContext(noteContext)
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div>
     This Is About {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

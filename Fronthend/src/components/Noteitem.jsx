import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
  return (
    <div>
      {note.title}
    </div>
  )
}

export default Noteitem

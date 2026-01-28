import React from "react";
import Context from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useContext, useEffect, useRef, useState } from "react";
export default function Notes() {
  const context = useContext(Context);
  const { notes, fetchNotes, addNote, DeleteNote, EditNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id:"",
    title: "",
    description: "",
    tag: "",
  });
  const handleclick = (e) => {
    console.log("updating the note ",note)
    EditNote(note.id,note.title,note.description,note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const updatedNote = (currentnote) => {
    ref.current.click();
    setNote({id: currentnote._id, title: currentnote.title, description: currentnote.description, tag: currentnote.tag});
  };

  return (
    <>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* for form control */}
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    title
                  </label>
                  <input
                  value={note.title}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="title"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                  value={note.description}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="description"
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                  value={note.tag}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="tag"
                    onChange={onChange}
                  />
                </div>
              </form>
              {/* end form */}
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleclick} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Update Notes{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row my-3">
          <h1>Your Notes </h1>
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updatedNote={updatedNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
}

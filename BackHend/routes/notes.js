const express = require("express");
const router = express.Router();
const fetchuser = require("../Middelware/login");
const notesmodel = require("../model/Notes");
const { body, validationResult } = require("express-validator");
const Notes = require("../model/Notes");
// route 1 get all the notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await notesmodel.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some erorr occured ");
  }
});

// route 2 add new notes
router.post(
  "/fetchallnotes/add",
  fetchuser,
  [
    body("title", "Enter a valid name").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array() });
      }
      const note = new notesmodel({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenote = await note.save();
      res.json(savenote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some erorr occured ");
    }
  }
);

// route 3 update an existing notes /update

router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newnote = {};
    if (title) {
      newnote.title = title;
    }
    if (description) {
      newnote.description = description;
    }
    if (tag) {
      newnote.tag = tag;
    }

    // find the note to be updated and update
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newnote },
      { new: true }
    );
    return res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occurred");
  }
});

//route 4 for delete  http://localhost:5000/api/notes/deletenote/:id

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let id = req.params.id;
  if (!id) return res.status(404).send("No Notes Exist ");
  let note = await Notes.findById(id);
  if (!note) {
    return res.status(404).send("Not Found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }
  note = await Notes.findByIdAndDelete(id);
  return res.json("Success fully deletd")
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;

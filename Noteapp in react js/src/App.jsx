import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ToggleTheme.jsx";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [noteArray, setNoteArray] = useState([]);
  //adding edit text in notes 
  const [editingIdx , setEditingIdx] = useState(null);
  const [editNoteText,setEditNoteText] = useState("");

  // Load saved notes from localStorage
  useEffect(() => {
    const saveNote = localStorage.getItem("note");

    if (saveNote) {
      try {
        const parsedTask = JSON.parse(saveNote);
        if (Array.isArray(parsedTask)) {
          setNoteArray(parsedTask);
        }
      } catch (error) {
        localStorage.removeItem("note");
      }
    }
  }, []);

  // Handle form submit and preventDefault
  function handleSubmit(e) {
  e.preventDefault();

  if (!title.trim() && !details.trim()) return;

  // EDIT MODE
  if (editingIdx !== null) {
    const updatedNotes = noteArray.map((note, idx) => {
      if (idx === editingIdx) {
        return {
          title: title.trim(),
          details: details.trim(),
        };
      }

      return note;
    });

    setNoteArray(updatedNotes);
    localStorage.setItem("note", JSON.stringify(updatedNotes));

    setEditingIdx(null);
  }

  // ADD MODE
  else {
    const newNote = [
      ...noteArray,
      {
        title: title.trim(),
        details: details.trim(),
      },
    ];

    setNoteArray(newNote);
    localStorage.setItem("note", JSON.stringify(newNote));
  }

  setTitle("");
  setDetails("");
}

  // Delete notes
  function deleteBtn(index) {
    const updatedNote = noteArray.filter((_, idx) => idx !== index);
    setNoteArray(updatedNote);
    localStorage.setItem("note", JSON.stringify(updatedNote));
  }


  //function that handle edit note feature 
  function handleEdit(index,note){
  setEditingIdx(index);
  setTitle(note.title);
  setDetails(note.details);
  }

  return (
    <div id="container" className="min-h-screen">
      <span id="toggle-btn" className="mt-10 flex h-10 w-10 cursor-pointer items-center justify-center ">
        <ThemeToggle />
      </span>

      <form
        id="form"
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-lg p-6"
      
      >
        <input
          type="text"
          value={title}
          placeholder="Note Heading"
          className="rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={details}
          placeholder="Note Details..."
          rows="4"
          className="resize-none rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-md px-6 py-2 font-semibold transition"
          >
          {editingIdx !== null ? "Update Note": "Add Note"}
        </button>
      </form>

      <div className="mx-auto max-w-xl space-y-4 p-6">
        {noteArray.map((e, index) => (
          <div
            key={index}
            className="note-card rounded-lg p-4 shadow transition hover:shadow-lg"
          >
            <h3 className="mb-2 text-lg font-semibold">{e.title}</h3>
            <p className="mb-4 whitespace-pre-wrap">{e.details}</p>
            <div className="flex justify-end">
              <div className="flex justify-end gap-2">
               <button
               className="rounded px-3 py-1 text-sm"
               onClick={() => handleEdit(index, e)
                
               }
               >
               Edit
               </button>
              <button
                className="rounded px-3 py-1 text-sm"
                onClick={() => {
                  deleteBtn(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

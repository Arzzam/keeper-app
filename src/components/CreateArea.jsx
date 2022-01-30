import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [noteExpand, setExpand] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }

  function buttonClick(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {noteExpand && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={noteExpand ? "3" : "1"}
        />
        <Zoom in={noteExpand}>
          <Fab className="fabbutton" onClick={buttonClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

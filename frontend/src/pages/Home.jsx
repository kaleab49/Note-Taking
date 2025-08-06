import { useState, useEffect } from "react";
import api from "../api";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => setNotes(res.data))
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted!");
          getNotes();
        } else {
          alert("Failed to delete");
        }
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created");
          setContent("");
          setTitle("");
          getNotes();
        } else {
          alert("Failed to make note");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
      </div>
      <div className="notes-list">
        {notes.length === 0 ? (
          <div className="empty-state">
            No notes yet. Create your first note!
          </div>
        ) : (
          notes.map((note) => (
            <div className="note-item" key={note.id}>
              <div className="note-title">{note.title}</div>
              <div className="note-content">{note.content}</div>
              <div className="note-actions">
                <button
                  className="delete-btn"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <h2>Create Note</h2>
      <form className="form-container" onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          className="form-input"
          type="text"
          name="title"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          className="form-input"
          name="content"
          id="content"
          placeholder="Your content here..."
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input className="form-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;

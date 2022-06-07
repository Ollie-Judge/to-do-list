import React, { useState } from "react";

function WriteANote(props) {
  const [todo, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(todo);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="toDo">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={todo.title}
          placeholder="To Do"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={todo.content}
          placeholder="What do you need to do?"
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default WriteANote;

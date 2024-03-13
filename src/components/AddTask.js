import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    if (!day) {
      alert("Please add a date");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);

    console.log(text, day, reminder);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
      </div>

      <div className="form-control">
        <label>Day</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Add Date"
        />
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>

      <button type="submit" className="btn btn-block">
        Save
      </button>
    </form>
  );
};

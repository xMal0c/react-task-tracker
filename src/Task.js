import { FaTimes } from "react-icons/fa";

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "#fc5b5b", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

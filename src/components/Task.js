const tasks = [
  {
    id: 1,
    text: "Dentist",
    day: "20.3.2024",
    reminder: true,
  },
  {
    id: 2,
    text: "Study",
    day: "24.3.2024",
    reminder: false,
  },
  {
    id: 3,
    text: "Lunch",
    day: "29.3.2024",
    reminder: true,
  },
];

export const Task = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

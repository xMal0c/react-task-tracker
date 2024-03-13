import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useEffect, useState } from "react";
import Clouds from "./Cloud";
import { myTasks } from "./myTasks";
import { AddTask } from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(myTasks);
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);

    //console.log(newTask);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();

      return data;
    };
    fetchTasks();
  }, []);

  return (
    <>
      <Clouds />
      <div className="container">
        <Header
          title="To Do List"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks to show"
        )}
      </div>
    </>
  );
}

export default App;

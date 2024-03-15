import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useEffect, useState } from "react";
import Clouds from "./Cloud";
// import { myTasks } from "./myTasks";
import { AddTask } from "./components/AddTask";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const server = "http://localhost:5004";

  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  const deleteTask = async (id) => {
    await fetch(`${server}/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: !task.reminder } : task
  //     )
  //   );
  // };

  const fetchTask = async (id) => {
    const response = await fetch(`${server}/tasks/${id}`);
    const task = await response.json();

    return task;
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const response = await fetch(`${server}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(updTask),
    });

    const updatedTask = await response.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: updatedTask.reminder } : task
      )
    );
  };

  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 100000) + 1;

  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);

  //   //console.log(newTask);
  // };

  const addTask = async (task) => {
    const response = await fetch(`${server}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const newTask = await response.json();
    setTasks([...tasks, newTask]);

    //console.log(newTask);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`${server}/tasks`);
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <>
      <Clouds />
      <Router>
        <div className="container">
          <Header
            title="To Do List"
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

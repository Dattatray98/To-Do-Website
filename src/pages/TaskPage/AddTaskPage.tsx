import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTaskPage: React.FC = () => {
  const navigate = useNavigate();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (!taskTitle.trim()) {
      alert("Please enter a task title.");
      return;
    }

    // Save task (could be to local storage, global state, or backend)
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

    // Navigate to preview or home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-lg  p-8 bg-blue-950 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">Add a New Task</h2>
        <form onSubmit={handleAddTask} className="space-y-4">
          <div>
            <label className="block text-blue-300 font-semibold mb-1">Task Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-4 py-2 border border-black
             rounded-md focus:outline-none  text-white focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Complete homework"
            />
          </div>

          <div>
            <label className="block text-blue-300 font-semibold mb-1">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none text-white focus:ring-2 focus:ring-indigo-500"
              placeholder="Optional description..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskPage;

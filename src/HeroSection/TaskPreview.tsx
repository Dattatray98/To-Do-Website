// TaskPreview.tsx
import { CheckSquare, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";  // Add this import

export default function TaskPreview() {
  const navigate = useNavigate();  // Use the useNavigate hook

  return (
    <section id="task-preview" className=" bg-gray-950 py-16 px-6 md:px-16">
      <div className="max-w-xl mx-auto bg-gray-800 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-200">Preview Your Productivity</h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between border rounded-lg px-4 py-3 bg-gray-500">
            <span className="text-gray-800">Finish React Project</span>
            <div className="flex space-x-2">
              <CheckSquare className="text-green-600 cursor-pointer" />
              <Trash2 className="text-red-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center justify-between border rounded-lg px-4 py-3 bg-gray-500">
            <span className="text-gray-800">Study TypeScript Interfaces</span>
            <div className="flex space-x-2">
              <CheckSquare className="text-green-600 cursor-pointer" />
              <Trash2 className="text-red-500 cursor-pointer" />
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-3">
            <button
              onClick={() => navigate("/add-task")}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              <Plus size={20} className="mr-2" />
              Add Task
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

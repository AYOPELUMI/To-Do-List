"use client";
import { ChangeEvent, FC, useState } from "react";
import { todoType } from "../types/todoType";
interface Props {
  todo: todoType;
  changeTodoTask: (id: number, task: string) => void;
  changeTodoTitle: (id: number, title: string) => void;
  toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}
const Todo: FC<Props> = ({
  todo,
  changeTodoTask,
  changeTodoTitle,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);
  // State for handling text input
  const [title, setTitle] = useState(todo.title);
  const [task, setTask] = useState(todo.task);
  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.done);
  // Event handler for text input change
  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };
  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };
  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoTask(todo.id, task);
    changeTodoTitle(todo.id, title);
    setEditing(false);
  };
  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setTitle(todo.title);
    setTask(todo.task);

  };
  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };
  // Rendering the Todo component
  return (
    <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      {/* Checkbox for marking the todo as done */}
      <input
        type="checkbox"
        className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onChange={handleIsDone}
      />
      {/* Input field for todo text */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        readOnly={!editing}
        className={`${todo.done ? "line-through" : ""
        } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
      />
            <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        readOnly={!editing}
        className={`${todo.done ? "line-through" : ""
        } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
      />
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
export default Todo;
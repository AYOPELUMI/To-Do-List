"use client";
import { ChangeEvent, FC, useState } from "react";
interface Props {
  createTodo: (title: string, task: string) => void;
}
const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState({title:"", task: ""});
  // Event handler for input change
  const handleTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({...input,
        task:e.target.value});
  };
  const handleTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({...input,
        title:e.target.value});
  };
  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(input.title, input.task);
    setInput({title:"", task:""});
  };
  // Rendering the AddTodo component
  return (
    <div className="w-full flex gap-1 mt-2">
      {/* Input field for entering new todo text */}
      <input
        type="text"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={handleTitleInput}
        value={input.title}
      />
      <input
        type="text"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={handleTaskInput}
        value={input.task}
      />
      {/* Button for adding a new todo */}
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;

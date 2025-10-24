import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMemo } from "../redux/memoSlice";

function AddMemoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addMemo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a memo..."
        className="border rounded px-3 py-2 w-64"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
}

export default AddMemoForm;

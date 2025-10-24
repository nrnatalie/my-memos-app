import React from "react";
import { useDispatch } from "react-redux";
import { toggleImportantMemo, deleteMemo } from "../redux/memoSlice";

function MemoItem({ memo }) {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center bg-white shadow p-2 mb-2 rounded">
      <span
        onClick={() => dispatch(toggleImportantMemo(memo.id))}
        className={`cursor-pointer ${
          memo.important ? "font-bold text-yellow-600" : ""
        }`}
      >
        {memo.text}
      </span>
      <button
        onClick={() => dispatch(deleteMemo(memo.id))}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default MemoItem;

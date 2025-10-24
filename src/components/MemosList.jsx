import React, { useState } from "react";
import { useSelector } from "react-redux";
import MemoItem from "./MemoItem";

function MemoList() {
  const memos = useSelector((state) => state.memosState);
  const [showImportant, setShowImportant] = useState(false);

  const filteredMemos = showImportant
    ? memos.filter((m) => m.important)
    : memos;

  if (filteredMemos.length === 0) {
    return <p className="text-gray-500">No memos for now</p>;
  }

  return (
    <>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="checkbox"
            checked={showImportant}
            onChange={() => setShowImportant(!showImportant)}
          />
          {""}
          Show only important
        </label>
      </div>
      <ul className="w-72">
        {filteredMemos.map((memo) => (
          <MemoItem key={memo.id} memo={memo} />
        ))}
      </ul>
    </>
  );
}

export default MemoList;

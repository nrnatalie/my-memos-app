import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import AddMemoForm from "./components/AddMemoForm";
import MemoList from "./components/MemosList";

export default function App() {
  return (
    <div className="p-6">
      <Header />
      <AddMemoForm />
      <MemoList />
    </div>
  );
}

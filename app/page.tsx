"use client";

import { useEffect, useState } from "react";
import Form from "./components/Form";

interface task {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<task[]>(() => {
    if (typeof window !== "undefined") {
      const tempTasks = localStorage.getItem("tasks");
      return JSON.parse(tempTasks || "[]");
    }
  });
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const gibeTask = JSON.stringify(tasks);
    localStorage.setItem("tasks", gibeTask);
  }, [tasks]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: title,
        description: description,
      };

      setTasks([...tasks, newTask]);
      console.log(tasks);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-row items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div id="task-list">
          <h1 className="text-2xl font-bold">To-Do Tasks</h1>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="h-fit w-xl border-amber-50 border rounded-md text-wrap mt-5 p-2.5"
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
        <div id="adding-task">
          <Form
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}

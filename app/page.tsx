"use client";

import { useEffect, useState } from "react";
import Form from "./components/Form";
// import dynamic from "next/dynamic";
import List from "./components/List";

interface task {
  id: number;
  title: string;
  description: string;
  priority: string | "low"
}

// const ListComponent = dynamic(() => import("./components/List"), {
//   ssr: false,
// });

export default function Home() {
  const [tasks, setTasks] = useState<task[]>(() => {
    if (typeof window !== "undefined") {
      const tempTasks = localStorage.getItem("tasks");
      return JSON.parse(tempTasks || "[]");
    }
  });

  useEffect(() => {
    const gibeTask = JSON.stringify(tasks);
    localStorage.setItem("tasks", gibeTask);
  }, [tasks]);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full flex-row items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div id="task-list">
            <h1 className="text-2xl font-bold">To-Do Tasks</h1>
            <List tasks={tasks} setTasks={setTasks} />
          </div>
          <div id="adding-task">
            <Form setTasks={setTasks} />
          </div>
        </main>
      </div>
    </>
  );
}

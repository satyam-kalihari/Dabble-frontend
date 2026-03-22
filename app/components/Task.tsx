import React, { useEffect } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string | "low";
}

type taskProp = {
  task: Task;
  onClickDelete: (id: number) => void;
  setEditId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

export const Task = ({
  task,
  onClickDelete,
  setEditId,
  setTitle,
  setDescription,
}: taskProp) => {
  useEffect(() => {
    console.log("rerendering: Task", task.id);
  });

  return (
    <div>
      <div className="h-fit w-xl border-amber-50 border rounded-md text-wrap mt-5 p-2.5">
        <div className="flex justify-between">
          <h3>{task.title}</h3>
          <div>{task.priority}</div>
        </div>
        <p>{task.description}</p>
      </div>
      <div className="text-amber-50 h-fit mt-1 mb-6 text-right flex items-center justify-end gap-2">
        <button
          className="h-3 px-2 cursor-pointer"
          onClick={() => onClickDelete(task.id)}
        >
          Delete
        </button>
        <button
          className="h-3 px-2 cursor-pointer"
          onClick={() => {
            setTitle(task.title);
            setDescription(task.description);
            setEditId(task.id);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

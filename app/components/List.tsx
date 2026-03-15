import React, { useState } from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
  priority: string | "low";
}

type ListProp = {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
};

const List = ({ tasks, setTasks }: ListProp) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editId, setEditId] = useState<number>();
  const [priority, setPriority] = useState<string | "low">();

  const onClickDelete = (taskId: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };
  const onClickSave = (taskId: number) => {
    console.log(taskId);
    const newTasks = tasks.map((task) =>
      task.id !== taskId
        ? task
        : {
            ...task,
            title: title,
            description: description,
            priority: priority || "low",
          },
    );
    setTasks(newTasks);
    setEditId(0);
  };

  return (
    <div>
      {tasks.map((task: Tasks) =>
        task.id !== editId ? (
          <div key={task.id}>
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
        ) : (
          <div key={task.id}>
            <div className="h-fit w-xl flex flex-col gap-3 border-amber-50 border rounded-md text-wrap mt-5 p-2.5">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder={task.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-8 w-xs border-amber-50 border"
                />
                <select
                  className=" bg-blue-500 p-1 border-blue-800 border-2 rounded-sm"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <textarea
                placeholder={task.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" border-amber-50 border"
              />
            </div>
            <div className="text-amber-50 h-fit mt-1 mb-6 text-right flex items-center justify-end gap-2">
              <button
                className="h-3 px-2 cursor-pointer"
                onClick={() => setEditId(0)}
              >
                Exit
              </button>
              <button
                className="h-3 px-2 cursor-pointer"
                onClick={() => onClickSave(task.id)}
              >
                Save
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default List;

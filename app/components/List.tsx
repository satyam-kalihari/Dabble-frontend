import React, { useState } from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
}

type ListProp = {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
};

const List = ({ tasks, setTasks }: ListProp) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editId, setEditId] = useState<number>();

  const onClickDelete = (taskId: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };
  const onClickSave = (taskId: number) => {
    console.log(taskId);
    const newTasks = tasks.map((task) =>
      task.id !== taskId
        ? task
        : { ...task, title: title, description: description },
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
              <h3>{task.title}</h3>
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
              <input
                type="text"
                placeholder={task.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-8 w-xs border-amber-50 border"
              />
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

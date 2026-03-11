import React from "react";

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

  const onClickDelete = (taskId: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div>
      {tasks.map((task: Tasks) => (
        <div key={task.id}>
          <div className="h-fit w-xl border-amber-50 border rounded-md text-wrap mt-5 p-2.5">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className="text-amber-50 h-fit mt-1 mb-6 text-right flex items-center justify-end gap-2">
            <button className="h-3 px-2 cursor-pointer" onClick={() => onClickDelete(task.id)}>Delete</button>
            {/* <button className="h-3 px-2 cursor-pointer">Edit</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

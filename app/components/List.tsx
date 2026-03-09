import React from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
}

type ListProp = {
    tasks: Tasks[]
}

const List = ({ tasks }: ListProp) => {
  return (
    <div>
      {tasks.map((task: Tasks) => (
        <div
          key={task.id}
          className="h-fit w-xl border-amber-50 border rounded-md text-wrap mt-5 p-2.5"
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;

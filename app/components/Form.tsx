import React, { useState } from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
  priority: string | "low";
}

type FormProps = {
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
};

const Form = ({ setTasks }: FormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  let count = 0;

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        priority: "low",
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      console.log(() => count++);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      className="flex flex-col gap-3  text-amber-50"
      onSubmit={(e) => handleSubmit(e)}
    >
      <header className="text-2xl font-bold text-amber-200">Add a Task</header>
      <input
        className="h-8 w-xs border-amber-50 border"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className=" border-amber-50 border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="submit"
        className="h-6 pb-1 bg-amber-300 rounded-sm cursor-pointer"
        value={"submit"}
      />
    </form>
  );
};

export default Form;

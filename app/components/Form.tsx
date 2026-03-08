import React from "react";

type FormProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({
  title,
  setTitle,
  description,
  setDescription,
  handleSubmit,
}: FormProps) => {
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

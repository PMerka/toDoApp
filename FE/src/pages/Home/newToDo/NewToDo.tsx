import { useState } from "react";
import { useCreateToDo } from "../../../hooks/useCreateToDo";
import BlueButton from "src/widgets/BlueButton";

const NewToDo = () => {
  const [text, setText] = useState("");
  const createToDoMutation = useCreateToDo();
  const handleCreate = () => {
    createToDoMutation.mutate({ text: text });
    setText("");
  };

  return (
    <div className="bg-white flex flex-col gap-4 p-8 rounded-2xl shadow-md w-full max-w-md mb-20">
      <textarea
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        name=""
        id=""
        placeholder="Enter new to do"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <BlueButton onClick={() => handleCreate()}>Submit</BlueButton>
    </div>
  );
};

export default NewToDo;

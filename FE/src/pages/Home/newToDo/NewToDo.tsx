import { useState } from "react";
import { useCreateToDo } from "../../../hooks/useCreateToDo";

const NewToDo = () => {
  const [text, setText] = useState("");
  const createToDoMutation = useCreateToDo();
  const handleCreate = () => {
    createToDoMutation.mutate({ text: text });
    setText("");
  };

  return (
    <div>
      <div>
        <textarea
          name=""
          id=""
          placeholder="Enter new to do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <button onClick={() => handleCreate()}>Submit</button>
    </div>
  );
};

export default NewToDo;

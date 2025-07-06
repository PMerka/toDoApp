interface ToDoItemProps {
  text: string;
  status: boolean;
}

const ToDoItem = ({ text, status }: ToDoItemProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <div>{status}</div>
      <div>{text}</div>
    </div>
  );
};

export default ToDoItem;

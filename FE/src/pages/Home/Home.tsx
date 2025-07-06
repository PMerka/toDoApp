import { useGetToDoList } from "src/hooks/useGetToDoList";
import NewToDo from "./newToDo/NewToDo";
import ToDoItem from "./toDoItem/ToDoItem";

const Home = () => {
  const toDoListQuery = useGetToDoList();

  return (
    <div className="flex flex-col items-center min-h-full justify-center px-6 py-12 lg:px-8">
      <h1>Home</h1>

      <NewToDo />
      <div className="flex flex-col gap-2">
        {toDoListQuery?.data?.map((item) => (
          <ToDoItem
            key={item?.id}
            text={item?.content}
            status={item?.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

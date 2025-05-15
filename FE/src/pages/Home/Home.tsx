import { useGetToDoList } from "src/hooks/useGetToDoList";
import NewToDo from "./newToDo/NewToDo";

const Home = () => {
  const toDoListQuery = useGetToDoList();

  return (
    <div className="flex flex-col min-h-full justify-center px-6 py-12 lg:px-8">
      <h1>Home</h1>

      <NewToDo />

      {toDoListQuery?.data?.map((item, index) => (
        <div key={index}>
          {item?.content} {item?.completed}
        </div>
      ))}
    </div>
  );
};

export default Home;

import { useGetToDoList } from "../../hooks/useGetToDoList";
import NewToDo from "./newToDo/NewToDo";

const Home = () => {
  const toDoListQuery = useGetToDoList();
  console.log("TEST");
  return (
    <div>
      <h1>Home</h1>

      <NewToDo />

      {toDoListQuery?.data?.map((item, index) => (
        <div key={index}> {JSON.stringify(item)} </div>
      ))}
    </div>
  );
};

export default Home;

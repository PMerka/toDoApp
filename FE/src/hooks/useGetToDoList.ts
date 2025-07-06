import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { axiosClient } from "../utils/api";
import { PATHS } from "./paths";

const getToDoList = async () => {
  const resp = await axiosClient.get(PATHS.toDo.getList);
  const data: ToDoItem[] = await resp.data;
  return data;
};

export const useGetToDoList = () => {
  const mutation = useQuery({
    queryFn: getToDoList,
    queryKey: [queryKeys.toDoList],
  });

  return mutation;
};

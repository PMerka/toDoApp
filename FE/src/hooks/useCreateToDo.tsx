import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../utils/api";
import { PATHS } from "./paths";
import { queryKeys } from "./queryKeys";

export interface NewToDoArgs {
  text: string;
}

const createToDo = async (newToDo: NewToDoArgs) => {
  const resp = await axiosClient.post(PATHS.toDo.create, newToDo);
  const data = await resp?.data;

  console.log(data);
  return data;
};

export const useCreateToDo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newToDo: NewToDoArgs) => createToDo(newToDo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.toDoList] });
    },
  });

  return mutation;
};

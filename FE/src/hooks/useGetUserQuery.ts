import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { axiosClient } from "../utils/api";
import { PATHS } from "./paths";

const getUser = async () => {
  const resp = await axiosClient.get(PATHS.auth.getUser);
  const data = await resp.data;
  return data;
};

export const useGetUserQuery = () => {
  const mutation = useQuery({
    queryFn: getUser,
    queryKey: [queryKeys.user],
  });

  return mutation;
};

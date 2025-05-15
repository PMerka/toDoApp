import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../utils/api";
import { PATHS } from "./paths";
import { jwtManager } from "../utils/jwtManager";

export interface LoginArgs {
  email?: string;
  password?: string;
}

const login = async (args: LoginArgs) => {
  const resp = await axiosClient.post(PATHS.auth.login, args);
  const data = await resp?.data;
  jwtManager.setJwt(data?.token);

  console.log(data);
  return data;
};

export const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: (args: LoginArgs) => login(args),
  });

  return mutation;
};

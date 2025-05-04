import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../utils/api";
import { PATHS } from "./paths";
import { setCookie } from "../utils/cookies";

export interface LoginArgs {
  email?: string;
  password?: string;
}

const login = async (args: LoginArgs) => {
  const resp = await axiosClient.post(PATHS.auth.login, args);
  const data = await resp?.data;
  setCookie("jwt", data.token);

  console.log(data);
  return data;
};

export const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: (args: LoginArgs) => login(args),
  });

  return mutation;
};

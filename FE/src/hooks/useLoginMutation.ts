import { useMutation } from "@tanstack/react-query";
import { axiosClient, setAxiosToken } from "../utils/api";
import { PATHS } from "./paths";
import { useNavigate } from "react-router";
import { routes } from "src/pages/routes";

export interface LoginArgs {
  email?: string;
  password?: string;
}

const login = async (args: LoginArgs) => {
  const resp = await axiosClient.post(PATHS.auth.login, args);
  const data = await resp?.data;
  setAxiosToken(data?.token);

  console.log(data);
  return data;
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (args: LoginArgs) => login(args),
    onSuccess: () => {
      navigate(routes.home);
    },
  });

  return mutation;
};

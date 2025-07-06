import { useMutation } from "@tanstack/react-query";
import { axiosClient, setAxiosToken } from "../utils/api";
import { PATHS } from "./paths";
import { useNavigate } from "react-router";
import { routes } from "src/pages/routes";

export interface SignUpArgs {
  email?: string;
  password?: string;
}

const signUp = async (args: SignUpArgs) => {
  const signUpResp = await axiosClient.post(PATHS.auth.signUp, args);

  if (signUpResp.status !== 200) {
    const data = await signUpResp?.data;
    throw new Error(data?.response?.message || "Sign up failed");
  }

  const resp = await axiosClient.post(PATHS.auth.login, args);
  const data = await resp?.data;
  setAxiosToken(data?.token);
  return data;
};

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (args: SignUpArgs) => signUp(args),
    onSuccess: () => {
      navigate(routes.home);
    },
    onError: (error: Error) => {
      console.error("Sign up error:", error?.message);
    },
  });

  return mutation;
};

import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { deleteAxiosToken } from "src/utils/api";
import { routes } from "src/pages/routes";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logout = () => {
    deleteAxiosToken();
    queryClient.removeQueries();
    navigate(routes.login);
  };
  return logout;
};

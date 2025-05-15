import { jwtManager } from "../utils/jwtManager";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = () => {
    jwtManager.deleteJwt();
    queryClient.invalidateQueries();
  };
  return logout;
};

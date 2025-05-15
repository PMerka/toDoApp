import { useLogout } from "src/hooks/useLogout";

const Logout = () => {
  const handleLogout = useLogout();

  return <button onClick={() => handleLogout()}>Logout</button>;
};

export default Logout;

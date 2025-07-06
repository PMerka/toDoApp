import { useLogout } from "src/hooks/useLogout";
import BlueButton from "src/widgets/BlueButton";

const Logout = () => {
  const handleLogout = useLogout();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <BlueButton onClick={() => handleLogout()}>Logout</BlueButton>
      </div>
    </div>
  );
};

export default Logout;

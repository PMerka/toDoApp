import { Outlet } from "react-router";
import Navbar from "src/sharedComponents/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

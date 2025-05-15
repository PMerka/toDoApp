import { Link, Outlet } from "react-router";
import { routes } from "../../pages/routes";
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

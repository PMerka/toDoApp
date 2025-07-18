import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { routes } from "./pages/routes";
import Logout from "./pages/Logout/Logout";
import AuthRequired from "./layouts/AuthRequired/AuthRequired";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <AuthRequired>
                  <Home />
                </AuthRequired>
              }
            />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.logout} element={<Logout />} />
            <Route path={routes.signUp} element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

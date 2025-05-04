import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import { useGetUserQuery } from "./hooks/useGetUserQuery";

function App() {
  const userQuery = useGetUserQuery();
  const userData = userQuery?.data;
  return (
    <>
      <BrowserRouter>
        <div>Welcome: {userData?.email}</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

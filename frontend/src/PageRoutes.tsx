import { BrowserRouter, Routes, Route } from "react-router-dom";

// import all page screens
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

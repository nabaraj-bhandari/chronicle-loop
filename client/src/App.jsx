import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Articles from "./pages/Articles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default function App() {
  return (
    <>
      <div className="w-full bg-slate-200 flex justify-center">
        <div className="w-[1080px]">
          <NavBar />

          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </>
  );
}

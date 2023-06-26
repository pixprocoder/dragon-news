import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../components/Home/Home/Home";
import Carrier from "../../components/Carrier/Carrier";
import About from "../../components/About/About";
import Category from "../../components/Home/Categories/Category/Category";
import Login from "../../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/all-news"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/carrier",
        element: <Carrier />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params}`),
      },
    ],
  },
]);

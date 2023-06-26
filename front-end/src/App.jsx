import { RouterProvider } from "react-router-dom";
import { router } from "../src/Routes/Routes/Routes";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

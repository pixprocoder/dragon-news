import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/header/Header";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;

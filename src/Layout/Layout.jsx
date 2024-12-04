import ButtonAppBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;

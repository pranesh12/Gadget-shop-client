import NavbarComponent from "../Navbar/Navbar";

import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

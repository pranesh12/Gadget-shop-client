import NavbarComponent from "../Navbar/Navbar";
import FooterComponet from "../Footer/FooterComponent";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <FooterComponet />
    </div>
  );
};

export default Layout;

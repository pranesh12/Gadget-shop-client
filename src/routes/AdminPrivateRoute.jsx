import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.loginReducer.currentUser);
  if (user.isAdmin == true) {
    return children;
  }
  return <Navigate to="/auth/login" replace={true}></Navigate>;
};

export default AdminPrivateRoute;

import {
  Box,
  Toolbar,
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/authAction";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import DeleteIcon from "@mui/icons-material/Delete";

const drawerWidth = 240;
const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getAllUsersReducer.alluser);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSubmit = () => {
    confirmAlert({
      title: "Delete User Account",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Container sx={{ marginTop: 2 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: 3 }}
          >
            User List
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Delete User</TableCell>
                </TableRow>
              </TableHead>
              {users?.map((user) => {
                return (
                  <TableBody key={user._id}>
                    <TableRow>
                      <TableCell>
                        <Typography sx={{ textTransform: "capitalize" }}>
                          {user.firstName} {user.lastName}
                        </Typography>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <DeleteIcon
                          sx={{ color: "red", cursor: "pointer" }}
                          onClick={handleSubmit}
                        ></DeleteIcon>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default AdminUsers;

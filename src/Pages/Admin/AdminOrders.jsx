import {
  Toolbar,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  Avatar,
  Box,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../redux/actions/orderAction";
import { green, red } from "@mui/material/colors";

const drawerWidth = 240;
const AdminOrders = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector(
    (state) => state.getAllOrderReducer.adminOrders
  );
  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);

  console.log(userOrders);
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
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Orders List
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Price</TableCell>
                  <TableCell>Count</TableCell>
                  <TableCell>Total Cost</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Shipping Address</TableCell>
                  <TableCell>delivered</TableCell>
                </TableRow>
              </TableHead>
              {userOrders &&
                userOrders.map((userOrder) => {
                  return (
                    <TableBody key={userOrder._id}>
                      {userOrder.orders &&
                        userOrder.orders.map((order) => {
                          return (
                            <TableRow key={order._id}>
                              <TableCell>
                                <Avatar
                                  alt={order.name}
                                  variant="square"
                                  src={order.img}
                                />
                              </TableCell>
                              <TableCell>{order.name}</TableCell>
                              <TableCell>${order.price}</TableCell>
                              <TableCell>{order.count}</TableCell>
                              <TableCell>${order.total}</TableCell>
                              <TableCell>{userOrder.email}</TableCell>
                              <TableCell>
                                {userOrder.shippingAddress.streetAddress},
                                {userOrder.shippingAddress.city}
                              </TableCell>
                              <TableCell sx={{ color: red }}>
                                {userOrder.isDelivered ? (
                                  <Typography sx={{ color: green[600] }}>
                                    Delivered
                                  </Typography>
                                ) : (
                                  <Typography sx={{ color: red[600] }}>
                                    Pending
                                  </Typography>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  );
                })}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default AdminOrders;

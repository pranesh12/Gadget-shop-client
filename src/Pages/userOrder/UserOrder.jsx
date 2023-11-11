import {
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { green, red } from "@mui/material/colors";

import { useEffect } from "react";
import { getUserOrder } from "../../redux/actions/orderAction";

const UserOrder = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector(
    (state) => state.getUserOrderReducer.userOrders
  );

  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);

  return (
    <Container sx={{ marginTop: 2 }}>
      <Typography sx={{ marginBottom: 2, marginTop: 2 }} variant="h5">
        User Order Review
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Delivered</TableCell>
            </TableRow>
          </TableHead>

          {userOrders &&
            userOrders.map((userOrder) => {
              return (
                <TableBody key={userOrder._id}>
                  {console.log(userOrder.orders)}
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
                          <TableCell>{order.count}</TableCell>
                          <TableCell>{order.total}</TableCell>
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
    </Container>
  );
};

export default UserOrder;

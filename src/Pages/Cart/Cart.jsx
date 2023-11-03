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
  Box,
  Avatar,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { green, red } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { addTocart, removeFromCart } from "../../redux/actions/cartAction";

const Cart = () => {
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <Container sx={{ marginTop: 2 }}>
      <Typography sx={{ marginBottom: 2 }} variant="h5">
        Shopping Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Remove Item</TableCell>
            </TableRow>
          </TableHead>
          {cartItems.map((item) => {
            return (
              <TableBody key={item._id}>
                <TableRow>
                  <TableCell>
                    <Avatar alt={item.name} variant="square" src={item.img} />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <RemoveIcon
                        sx={{ color: red[600], cursor: "pointer" }}
                        onClick={() => console.log(item)}
                      />
                      <RemoveIcon
                        sx={{ color: red[600], cursor: "pointer" }}
                        onClick={() =>
                          dispatch(addTocart(item, item.count - 1))
                        }
                      />
                      <Box p={2}>{item.count}</Box>

                      <AddIcon
                        sx={{ color: green[500], cursor: "pointer" }}
                        onClick={() =>
                          dispatch(addTocart(item, item.count + 1))
                        }
                      />
                    </Box>
                  </TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>${Math.floor(item.total)}</TableCell>
                  <TableCell>
                    <DeleteOutlineIcon
                      style={{ color: red[600], cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart(item._id))}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Cart;

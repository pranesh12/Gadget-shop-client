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
import {
  deleteProduct,
  fetchProducts,
} from "../../redux/actions/productActions";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const drawerWidth = 240;
const AdminProducts = () => {
  const products = useSelector((state) => state.fetchProductsReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
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

        <Box sx={{ marginTop: 2 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            Products
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {products?.map((product) => {
                return (
                  <TableBody key={product._id}>
                    <TableRow>
                      <TableCell>
                        <Avatar
                          sx={{ width: 80, height: 50, objectFit: "contain" }}
                          alt={product.name}
                          variant="square"
                          src={product.thumbnail}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography>{product.title}</Typography>
                      </TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.rating}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <DeleteIcon
                          onClick={() => handleDelete(product._id)}
                          sx={{ color: "#ff3d00", cursor: "pointer" }}
                        />
                      </TableCell>
                      <TableCell>
                        <ModeEditIcon
                          sx={{ color: "#651fff", cursor: "pointer" }}
                        />
                      </TableCell>
                    </TableRow>
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

export default AdminProducts;

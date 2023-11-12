import {
  Box,
  Toolbar,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

const drawerWidth = 240;
const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    brand: "",
    category: "",
    thumbnail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
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
        <Typography>Add Products</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs="12">
              <Typography sx={{ textAlign: "center" }} variant="h5">
                Register Account
              </Typography>
            </Grid>

            <Grid item xs="12">
              <TextField
                name="title"
                label="Title"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs="12">
              <TextField
                name="brand"
                label="Brand"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs="12">
              <TextField
                name="price"
                label="Price"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs="12">
              <TextField
                name="rating"
                label="Rating"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                name="category"
                label="Category"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                name="thumbnail"
                label="Thumbnail"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs="12">
              <TextField
                name="description"
                label="Description"
                size="small"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Grid item sx={{ marginTop: 3 }}>
            <Button
              sx={{ backgroundColor: green[500] }}
              variant="contained"
              type="submit"
            >
              Add Product
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default AddProduct;

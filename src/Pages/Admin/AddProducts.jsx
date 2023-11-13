import {
  Box,
  Toolbar,
  TextField,
  Grid,
  Typography,
  Button,
  Container,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/productActions";

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

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(createProduct(product));
    setProduct({
      title: "",
      description: "",
      price: "",
      rating: "",
      brand: "",
      category: "",
      thumbnail: "",
    });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  console.log(product.rating);
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
        <Container>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs="6">
                <Typography variant="h4"></Typography>
              </Grid>

              <Grid item xs="6" sx={{ marginBottom: 4 }}>
                {/* { added} */}
                <Alert variant="filled" severity="success">
                  Product Successfully Added
                </Alert>

                <Alert variant="filled" severity="error">
                  Something Went wrong
                </Alert>
              </Grid>
              <Grid item xs="12">
                <TextField
                  name="title"
                  label="Title"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                  variant="standard"
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
                  variant="standard"
                  required
                />
              </Grid>

              <Grid item xs="12">
                <TextField
                  type="number"
                  name="price"
                  label="Price"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                  variant="standard"
                  required
                />
              </Grid>

              <Grid item xs="12">
                <InputLabel
                  sx={{ marginBottom: 1 }}
                  id="demo-simple-select-label"
                >
                  Rating
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product.rating}
                  name="rating"
                  label="Rating"
                  variant="standard"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </Grid>

              <Grid item xs="12">
                <InputLabel
                  sx={{ marginBottom: 1 }}
                  id="demo-simple-select-label"
                >
                  Category
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product.category}
                  name="category"
                  label="Category"
                  variant="standard"
                  onChange={handleChange}
                >
                  <MenuItem value="smartphones">Smartphones</MenuItem>
                  <MenuItem value="laptops">Laptops</MenuItem>
                  <MenuItem value="fragrances">Fragrances</MenuItem>
                  <MenuItem value="skincare">Skincare</MenuItem>
                  <MenuItem value="groceries">Groceries</MenuItem>
                  <MenuItem value="home-decoration">Home-decoration</MenuItem>
                  <MenuItem value="furniture">Furniture</MenuItem>
                  <MenuItem value="tops">Tops</MenuItem>
                  <MenuItem value="womens-dresses">Womens-dresses</MenuItem>
                  <MenuItem value="womens-shoes">womens-shoes</MenuItem>
                  <MenuItem value="mens-shirts">Mens-shirts</MenuItem>
                  <MenuItem value="mens-watches">Mens-watches</MenuItem>
                  <MenuItem value="womens-watches">Womens-watches</MenuItem>
                  <MenuItem value="womens-bags">Womens-bags</MenuItem>
                </Select>
              </Grid>

              <Grid item xs="12">
                <TextField
                  name="thumbnail"
                  label="Thumbnail url"
                  size="small"
                  fullWidth
                  onChange={handleChange}
                  variant="standard"
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
                  variant="standard"
                  required
                  multiline
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
        </Container>
      </Box>
    </>
  );
};

export default AddProduct;

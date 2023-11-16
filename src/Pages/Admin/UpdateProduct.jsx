import {
  Box,
  Toolbar,
  TextField,
  Grid,
  Typography,
  Button,
  Container,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useParams } from "react-router";
import {
  fetchSingleProduct,
  updateProduct,
} from "../../redux/actions/productActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;
const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state) => state.fetchSingleProductReducer.product
  );

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    brand: "",
    category: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (singleProduct) {
      if (id === singleProduct._id) {
        setProduct({
          title: singleProduct?.title,
          description: singleProduct?.description,
          price: singleProduct?.price,
          rating: singleProduct?.rating,
          brand: singleProduct?.brand,
          category: singleProduct?.category,
          thumbnail: singleProduct?.thumbnail,
        });
      } else {
        dispatch(fetchSingleProduct(id));
      }
    } else {
      dispatch(fetchSingleProduct(id));
    }
  }, [id, dispatch, singleProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, product));
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

        <Container>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs="6">
                <Typography variant="h4"></Typography>
              </Grid>

              <Grid item xs="6" sx={{ marginBottom: 3 }}>
                {/* { added} */}
              </Grid>
              <Grid item xs="12">
                <TextField
                  name="title"
                  value={product.title}
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
                  value={product.brand}
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
                  value={product.price}
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
                  <MenuItem value={product.rating}>{product.rating}</MenuItem>
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
                  <MenuItem value={product.category}>
                    {product.category}
                  </MenuItem>
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
                  value={product.thumbnail}
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
                  value={product.description}
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
                Update Product
              </Button>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default UpdateProduct;

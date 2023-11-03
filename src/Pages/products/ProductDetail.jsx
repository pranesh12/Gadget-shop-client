import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../../redux/actions/productActions";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./product.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { addTocart } from "../../redux/actions/cartAction";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const singleProduct = useSelector(
    (state) => state.fetchSingleProductReducer.product
  );

  const loading = useSelector(
    (state) => state.fetchSingleProductReducer.loading
  );
  const { thumbnail, description, brand, price, title, images } = singleProduct;

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [productId, dispatch]);

  const handleCart = () => {
    dispatch(addTocart(singleProduct, count));
  };

  return (
    <>
      <Container sx={{ marginTop: 20 }}>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Grid container spacing={2}>
            <Grid item md={6}>
              <img src={thumbnail} alt="" />
            </Grid>
            <Grid item md={6}>
              <Box>
                <Typography variant="h4">{title}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">Key features</Typography>
                <Typography variant="subtitle1">{description}</Typography>
                <Typography variant="subtitle1">Brand :{brand}</Typography>
                <Typography variant="subtitle1">Price : ${price}</Typography>
              </Box>

              <Box sx={{ marginTop: 2 }}>
                <Typography sx={{ marginBottom: 1 }}>Add to cart</Typography>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      if (count > 0) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button>
                    <Typography>{count}</Typography>
                  </Button>
                  <Button
                    onClick={() => {
                      if (count <= 9) {
                        setCount(count + 1);
                      }
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Box>

              {count > 0 ? (
                <Box sx={{ marginTop: 3 }}>
                  <Link to="/cart">
                    <Button onClick={handleCart} variant="contained">
                      View cart
                    </Button>
                  </Link>
                </Box>
              ) : (
                <Box></Box>
              )}
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default ProductDetail;

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleProduct } from "../../redux/actions/productActions";
import "./product.css";
import { Container, Grid } from "@mui/material";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
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

  return (
    <>
      <Container sx={{ marginTop: 20 }}>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Grid container spacing={2}>
            <Grid item md={6}>
              <div>
                <h1>{title}</h1>
              </div>
              <div>
                <h5>Key features</h5>
                <p>{description}</p>
                <p>Brand :{brand}</p>
                <p>Price : ${price}</p>
              </div>
            </Grid>
            <Grid item md={6}>
              <img src={thumbnail} alt="" />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default ProductDetail;

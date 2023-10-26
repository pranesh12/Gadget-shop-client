import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import CardComponent from "../../Components/Card/CardComponent";
import { fetchProducts } from "../../redux/actions/productActions";
import { Box, Grid } from "@mui/material";
Container;

function Home() {
  const products = useSelector((state) => state.fetchProductsReducer.products);
  const loading = useSelector((state) => state.fetchProductsReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Row>
            <h1>Loadign</h1>
          </Row>
        ) : (
          <Grid sx={{ marginTop: "20px" }} container spacing={4}>
            {products?.map((product) => {
              return (
                <Grid item xs={0} md={6} lg={3} key={product.id}>
                  <CardComponent product={product} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default Home;

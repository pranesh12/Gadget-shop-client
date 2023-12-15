import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardComponent from "../../Components/Card/CardComponent";
import { fetchProducts } from "../../redux/actions/productActions";
import { Container, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

function Home() {
  const products = useSelector((state) => state.fetchProductsReducer.products);
  const loading = useSelector((state) => state.fetchProductsReducer.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const dummy = new Array(50).fill({});

  return (
    <>
      <Container>
        {loading ? (
          <Grid sx={{ marginTop: "20px" }} container spacing={4}>
            {dummy.map((product) => {
              return (
                <Grid item xs={0} md={6} lg={3} key={product.id}>
                  <Skeleton variant="rectangular" width={250} height={300} />
                </Grid>
              );
            })}
          </Grid>
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

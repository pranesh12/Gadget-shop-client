import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "./Components/Card/CardComponent";
import data from "./assets/data.json";
import Layout from "./Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import { useEffect } from "react";

function App() {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Container className="mt-5" fluid="md">
          <Row>
            {data.products.map((product) => {
              return (
                <Col key={product.id}>
                  <CardComponent product={product} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default App;

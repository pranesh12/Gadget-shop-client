import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "./Components/Card/CardComponent";
import NavbarComponent from "./Components/Navbar/Navbar";
import data from "./assets/data.json";
import Layout from "./Components/Layout/Layout";

function App() {
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

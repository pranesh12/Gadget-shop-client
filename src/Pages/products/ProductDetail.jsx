import { useParams } from "react-router";
import Layout from "../../Components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  const { productId } = useParams();
  return (
    <>
      <Layout>
        <Container className="mt-6" fluid="md">
          <Row>
            <Col md="5">
              <h1>Hello</h1>
            </Col>
            <Col md="7"> {productId}</Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default ProductDetail;

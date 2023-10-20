import { Card } from "react-bootstrap";

const CardComponent = ({ product }) => {
  const { price, thumbnail, rating, id, images, title, description } = product;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={thumbnail}></Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;

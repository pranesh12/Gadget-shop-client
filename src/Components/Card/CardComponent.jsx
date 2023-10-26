import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardComponent = ({ product }) => {
  const { _id, price, thumbnail, rating, id, images, title, description } =
    product;

  return (
    <>
      <Card sx={{ height: "300px", maxWidth: "380px" }}>
        <CardContent>
          <CardMedia
            sx={{ width: "100%", height: "194px", objectFit: "cover" }}
            key={_id}
            component="img"
            image={thumbnail}
          ></CardMedia>
          <Typography variant="h6">{title}</Typography>

          <Link to={`/${_id}`}>
            <Typography>{title}</Typography>
          </Link>

          <Typography>${price}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;

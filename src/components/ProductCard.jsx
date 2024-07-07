import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  Chip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";
const ProductCard = ({
  id,
  rating,
  imageUrl,
  name,
  distance,
  numReviews,
  price,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      className="mt-6 cursor-pointer"
      onClick={() => navigate("/restaurant/" + id)}
    >
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={imageUrl} alt="card-image" className="object-cover " />
      </CardHeader>
      <CardBody className="mx-auto">
        <Typography variant="h5" className="text-center">
          {name}
        </Typography>
        <Typography color="blue-gray" className=" text-center">
          {distance} từ vị trí của bạn
        </Typography>
        <div className="w-full pt-0 flex items-center justify-around gap-5 mt-1">
          <Rating value={rating} color="yellow" readonly />
          {numReviews} reviews
        </div>
      </CardBody>
      <CardFooter className="!pt-0">
        <Typography color="black" variant="h4" className="text-center">
          {price.toLocaleString("en-US")} đ
        </Typography>
      </CardFooter>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default ProductCard;

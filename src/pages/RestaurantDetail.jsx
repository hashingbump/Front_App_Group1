import React from "react";
import { Banner } from "../assets/Banner";
import { NavbarWithSublist } from "../assets/NavbarWithSublist";
import { Footer } from "../assets/Footer";
import ShopList from "../components/ShopList";
import PriceFilter from "../components/PriceFilter";
import {
  parsePath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const restaurants = [
  {
    id: 1,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
  {
    id: 2,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
  {
    id: 3,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
  {
    id: 4,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
  {
    id: 5,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
  {
    id: 6,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
  {
    id: 6,
    name: "Hương Sen",
    address: "123 Nguyễn Văn Linh",
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    numReviews: 100,
    price: 100000,
  },
];
const menuItem = [
  {
    name: "Bò hầm",
    price: 100000,
  },
  {
    name: "Hủ tiếu",
    price: 50000,
  },
  {
    name: "Phở",
    price: 70000,
  },
  {
    name: "Bún bò",
    price: 80000,
  },
  {
    name: "Bún riêu",
    price: 60000,
  },
  {
    name: "Bún mắm",
    price: 90000,
  },
  {
    name: "Bún chả",
    price: 100000,
  },
  {
    name: "Bún đậu",
    price: 120000,
  },
  {
    name: "Bún thịt nướng",
    price: 110000,
  },
  {
    name: "Bún ốc",
    price: 130000,
  },
];
const tableCount = 20;
const RestaurantDetail = () => {
  const { id } = useParams();
  const [table, setTable] = React.useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-5"></div>
      <div className="grid grid-cols-3 gap-8 m-4">
        <img
          src={restaurants[id].imageUrl}
          className="w-full h-80 object-cover rounded-lg col-span-2"
          alt="restaurant"
        />
        <div className="grid grid-cols-2 gap-8">
          <img
            src={restaurants[id].imageUrl}
            className="h-36 object-cover rounded-lg "
            alt="restaurant"
          />
          <img
            src={restaurants[id].imageUrl}
            className="h-36 object-cover rounded-lg"
            alt="restaurant"
          />
          <img
            src={restaurants[id].imageUrl}
            className="h-36 object-cover rounded-lg "
            alt="restaurant"
          />
          <img
            src={restaurants[id].imageUrl}
            className="h-36 object-cover rounded-lg"
            alt="restaurant"
          />
        </div>
        <div className="col-span-2">
          <Card>
            <CardBody>
              <Typography variant="h3" color="black">
                {restaurants[id].name}
              </Typography>
              <div className="grid grid-cols-4">
                <Typography variant="h5">Địa chỉ:</Typography>
                {restaurants[id].address}
              </div>
              <div className="grid grid-cols-4">
                <Typography variant="h5">Giá:</Typography>
                {restaurants[id].price.toLocaleString("en-US")} VNĐ
              </div>
            </CardBody>
          </Card>
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h3" color="black">
                Chi tiết về {restaurants[id].name}
              </Typography>
              <Typography variant="h5" color="black" className="my-5">
                PHÙ HỢP:
              </Typography>
              <Typography variant="medium" color="black" className="my-5">
                Đặt tiệc, liên hoan, tụ họp bạn bè, gia đình, sinh nhật
              </Typography>
              <Typography variant="h5" color="black" className="my-5">
                MÓN ĐẶC SẮC:
              </Typography>
              <Typography variant="medium" color="black" className="my-5">
                GHẸ, BỀ BỀ, TÔM CÀNG SEN, ỐC HƯƠNG, CÁ HỒI, DIMSUM,…
              </Typography>
              <Typography variant="h5" color="black" className="my-5">
                KHÔNG GIAN:
              </Typography>
              <Typography variant="medium" color="black" className="my-5">
                - Phong cách Hồng Kông <br />- Sức chứa: 500 khách
              </Typography>
              <Typography variant="h5" color="black" className="my-5">
                CHỖ ĐỂ XE:
              </Typography>
              <Typography variant="medium" color="black" className="my-5">
                - Xe ôtô: Tầng hầm của toà nhà (Phí phụ thuộc đơn vị trông giữ
                xe)
                <br />- Xe máy: Tầng hầm của toà nhà (Phí phụ thuộc đơn vị trông
                giữ xe)
              </Typography>
              <Typography variant="h5" color="black" className="my-5">
                ĐIỂM ĐẶC TRƯNG:
              </Typography>
              <Typography variant="medium" color="black" className="my-5">
                Buffet hải sản hơn 200 món, quầy line rộng rãi, phục vụ liên
                tục.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h3" color="black">
                Thực đơn
              </Typography>
              <div className="grid grid-cols-3 my-3">
                <Typography variant="h6" className="my-auto">
                  Tên món
                </Typography>
                <Typography variant="h6" className="my-auto">
                  Giá tiền/Khẩu phần
                </Typography>
              </div>
              {menuItem.map((item) => (
                <div key={item} className="grid grid-cols-3 my-3">
                  <Typography variant="medium" className="my-auto">
                    {item.name}
                  </Typography>
                  <Typography variant="medium" className="my-auto">
                    {item.price.toLocaleString("en-US")} VNĐ
                  </Typography>
                  <Button variant="outlined" color="blue">
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
        <div className="">
          <Card>
            <CardBody>
              <Typography variant="h5" color="black" className="text-center">
                Đặt chỗ
              </Typography>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <Typography variant="h6" className="my-auto">
                  Số bàn
                </Typography>
                <Select
                  value={table}
                  placeholder="Số bàn"
                  className="border border-gray-300 rounded-lg"
                  labelProps={{
                    className: "hidden",
                  }}
                  onChange={(e) => setTable(e)}
                >
                  {[...Array(tableCount + 1)].map((_, index) => (
                    <Option key={index} value={index}>
                      {index}
                    </Option>
                  ))}
                </Select>
                <Typography variant="h6">Ngày nhận bàn</Typography>
                <Input
                  type="date"
                  className="border-t-gray-400 focus:border-t-black rounded-lg"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <Typography variant="h6">Thời gian đến</Typography>
                <Input
                  type="time"
                  className="border-t-gray-400 focus:border-t-black rounded-lg"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Typography variant="h6" className="my-auto mt-5">
                Thực đơn
              </Typography>
              <div className="flex items-center justify-between gap-4 mt-5">
                <Typography variant="medium" className="my-auto w-[125px] ">
                  Bò kho xào nấm kim châm
                </Typography>
                <Typography variant="medium" className="my-auto">
                  1x
                </Typography>
                <Typography variant="medium" className="my-auto">
                  {Number(100000).toLocaleString("en-US")} VNĐ
                </Typography>
                <IconButton color="red">
                  <DeleteIcon />
                </IconButton>
              </div>
              <div className="flex items-center justify-between gap-4 mt-5">
                <Typography variant="h6" className="my-auto">
                  Tổng cộng
                </Typography>
                <Typography variant="h6" className="my-auto">
                  {Number(1000000).toLocaleString("en-US")} VNĐ
                </Typography>
              </div>
              <Button
                variant="outlined"
                color="blue"
                className="mt-5 w-full"
                onClick={() => navigate("/checkout")}
              >
                Đặt chỗ
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;

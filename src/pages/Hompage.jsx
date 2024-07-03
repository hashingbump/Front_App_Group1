import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Radio,
  Rating,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { NavbarWithSublist } from "../assets/NavbarWithSublist";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/swiper.css";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Container } from "@mui/material";
import { Footer } from "../assets/Footer";
import { Banner } from "../assets/Banner";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const Hompage = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const navigate = useNavigate();
  // Handler to change the selected color
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const restaurants = [
    {
      id: 0,
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      name: "Mindx chi nhánh Phú Nhuận",
      distance: 5,
    },
    {
      id: 1,
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      name: "Mindx chi nhánh Phú Nhuận",
      distance: 5,
    },
    {
      id: 2,
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      name: "Mindx chi nhánh Phú Nhuận",
      distance: 5,
    },
    {
      id: 3,
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      name: "Mindx chi nhánh Phú Nhuận",
      distance: 5,
    },
    {
      id: 4,
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      name: "Mindx chi nhánh Phú Nhuận",
      distance: 5,
    },
  ];
  return (
    <>
      <Banner />
      <NavbarWithSublist />
      <div className="w-full h-[500px] mb-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2024/Sale_6.6_-_Ngay_Doi_Sale_Boi_-_anh_ngang.jpg" /> */}
            Slide 1
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/May2024/SOMI_PREMIUM_XAM.png" /> */}
            Slide 2
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2024/mceclip2_67.jpg" /> */}
            Slide 3
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2024/mceclip1_85.jpg" /> */}
            Slide 4
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Container>
          <Typography variant="h2" className="text-left">
            Nhà hàng gần bạn
          </Typography>
        </Container>
        {/* <div className="grid grid-cols-4"> */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper mt-10"
        >
          {restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <ProductCard {...restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}

        {/* <div className="grid grid-cols-4 w-full gap-4 px-4 py-5">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-5">
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#aaaaaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#ffffaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#012345" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#777777" }}
                ></Button>
              </div>
              <Typography>Abisko Trail Stretch Trousers M</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center mb-2"
              >
                $155.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-5">
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#aaaaaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#ffffaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#012345" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#777777" }}
                ></Button>
              </div>
              <Typography>Abisko Trail Stretch Trousers M</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center mb-2"
              >
                $155.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-5">
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#aaaaaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#ffffaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#012345" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#777777" }}
                ></Button>
              </div>
              <Typography>Abisko Trail Stretch Trousers M</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center mb-2"
              >
                $155.00
              </Typography>
            </CardFooter>
          </Card>
        </div> */}
        <div className="text-center mb-10"></div>
      </div>
      <div>
        <Container>
          <Typography variant="h2" className="text-left">
            Món ăn nổi bật
          </Typography>
        </Container>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <Card
              className="mt-6 cursor-pointer"
              onClick={() => navigate("/restaurant/0")}
            >
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <Typography variant="h5">Bò hầm</Typography>
                <Typography color="blue-gray" className=" text-center">
                  Mindx chi nhánh Phú Nhuận
                </Typography>
              </CardBody>
              <CardFooter className="w-full pt-0 flex items-center justify-around gap-5">
                {/* <Button variant="gradient" color="green">
                  Chi tiết
                </Button> */}
                <Button className="w-1/2" variant="gradient" color="blue">
                  Đặt bàn
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <Typography variant="h5">Mindx chi nhánh Phú Nhuận</Typography>
                <Typography color="blue-gray" className=" text-center">
                  5km từ vị trí của bạn
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 grid grid-cols-2 gap-5">
                <Button variant="gradient" color="green">
                  Chi tiết
                </Button>
                <Button variant="gradient" color="blue">
                  Đặt bàn
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <Typography variant="h5">Mindx chi nhánh Phú Nhuận</Typography>
                <Typography color="blue-gray" className=" text-center">
                  5km từ vị trí của bạn
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 grid grid-cols-2 gap-5">
                <Button variant="gradient" color="green">
                  Chi tiết
                </Button>
                <Button variant="gradient" color="blue">
                  Đặt bàn
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <Typography variant="h5">Mindx chi nhánh Phú Nhuận</Typography>
                <Typography color="blue-gray" className=" text-center">
                  5km từ vị trí của bạn
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 grid grid-cols-2 gap-5">
                <Button variant="gradient" color="green">
                  Chi tiết
                </Button>
                <Button variant="gradient" color="blue">
                  Đặt bàn
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <Typography variant="h5">Mindx chi nhánh Phú Nhuận</Typography>
                <Typography color="blue-gray" className=" text-center">
                  5km từ vị trí của bạn
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 grid grid-cols-2 gap-5">
                <Button variant="gradient" color="green">
                  Chi tiết
                </Button>
                <Button variant="gradient" color="blue">
                  Đặt bàn
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper>
        {/* <div className="grid grid-cols-4"> */}
        {/* <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <Typography variant="h5">Mindx chi nhánh Phú Nhuận</Typography>
                <Typography color="blue-gray" className=" text-center">
                  5km từ vị trí của bạn
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 grid grid-cols-2 gap-5">
                <Button variant="gradient" color="green">
                  Chi tiết
                </Button>
                <Button variant="gradient" color="blue">
                  Đặt bàn
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Trail Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Trail Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="mt-6">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody className="mx-auto">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#aaaaaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#ffffaa" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#012345" }}
                  ></Button>
                  <Button
                    size="sm"
                    className="rounded-full"
                    style={{ backgroundColor: "#777777" }}
                  ></Button>
                </div>
                <Typography>Abisko Stretch Trousers M</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" text-center mb-2"
                >
                  $155.00
                </Typography>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper> */}
        {/* </div> */}

        {/* <div className="grid grid-cols-4 w-full gap-4 px-4 py-5">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-5">
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#aaaaaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#ffffaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#012345" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#777777" }}
                ></Button>
              </div>
              <Typography>Abisko Trail Stretch Trousers M</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center mb-2"
              >
                $155.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-5">
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#aaaaaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#ffffaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#012345" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#777777" }}
                ></Button>
              </div>
              <Typography>Abisko Trail Stretch Trousers M</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center mb-2"
              >
                $155.00
              </Typography>
            </CardFooter>
          </Card>
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-5">
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#aaaaaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#ffffaa" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#012345" }}
                ></Button>
                <Button
                  size="sm"
                  className="rounded-full"
                  style={{ backgroundColor: "#777777" }}
                ></Button>
              </div>
              <Typography>Abisko Trail Stretch Trousers M</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography
                variant="h5"
                color="blue-gray"
                className=" text-center mb-2"
              >
                $155.00
              </Typography>
            </CardFooter>
          </Card>
        </div> */}
        <div className="text-center mb-10"></div>
      </div>
      <Footer />
    </>
  );
};

export default Hompage;

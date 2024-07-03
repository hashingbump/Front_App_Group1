import React from "react";
import { Banner } from "../assets/Banner";
import { NavbarWithSublist } from "../assets/NavbarWithSublist";
import { Footer } from "../assets/Footer";
import ShopList from "../components/ShopList";
import PriceFilter from "../components/PriceFilter";
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
const RestaurantList = () => {
  return (
    <>
      <Banner />
      <NavbarWithSublist />
      <div className="mb-5"></div>
      <div className="grid grid-cols-4 gap-8 mt-4">
        <div className="ms-10">
          <PriceFilter />
        </div>
        <ShopList restaurants={restaurants} />
      </div>
      <Footer />
    </>
  );
};

export default RestaurantList;

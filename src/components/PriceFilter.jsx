import { Radio, Typography } from "@material-tailwind/react";
import React from "react";

const PriceFilter = () => {
  const prices = [
    { label: "Dưới 100.000đ", upper: 100000, lower: 0 },
    { label: "100.000đ - 200.000đ", upper: 200000, lower: 100000 },
    { label: "200.000đ - 500.000đ", upper: 500000, lower: 200000 },
    { label: "500.000đ - 1.000.000đ", upper: 1000000, lower: 500000 },
    { label: "Trên 1.000.000đ", upper: 1000000000, lower: 1000000 },
  ];
  return (
    <>
      <Typography variant="h6">Giá trung bình</Typography>
      <div className="flex flex-col">
        {prices.map((price) => (
          <Radio
            key={price.label}
            name="price"
            value={price}
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  {price.label}
                </Typography>
              </div>
            }
          />
        ))}
      </div>
    </>
  );
};

export default PriceFilter;

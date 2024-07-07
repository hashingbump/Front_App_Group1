import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Kpi from "../Kpi";
const Analytic = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "2022",
        data: [10, 20, 30, 40, 50, 60],
        fill: false,
        backgroundColor: "rgb(50, 100, 100)",
        borderColor: "rgba(50, 100, 100, 1)",
      },
      {
        label: "2023",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <Kpi />
      <section className="ms-8 me-8">
        <Card>
          <CardBody className="!p-2">
            <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4 ">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    2022
                  </Typography>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    2023
                  </Typography>
                </div>
              </div>
            </div>
            <Line data={data} options={options} />
          </CardBody>
          <CardFooter className="flex gap-6 flex-wrap items-center justify-between">
            <div>
              <Typography variant="h6" color="blue-gray">
                Annual Sales Performance
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-1"
              >
                Year-to-Date sales comparison
              </Typography>
            </div>
            <Button variant="outlined">View report</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Analytic;

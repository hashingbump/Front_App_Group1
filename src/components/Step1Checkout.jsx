import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  List,
  ListItem,
  Radio,
  Step,
  Stepper,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Step1Checkout = ({ handleNext }) => {
  const [check, setCheck] = React.useState(
    localStorage.getItem("token") ? true : false
  );

  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 mb-1">
      <Card className="mt-6">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            1. Thông tin người đặt
          </Typography>
          <Divider />
          <List>
            {localStorage.getItem("token") ? (
              <ListItem onClick={() => setCheck(true)}>
                <div className="flex items-center">
                  <Radio
                    checked={check}
                    name="type"
                    label={
                      <div className="ms-3">
                        <div className="flex justify-around items-center">
                          <Typography variant="body" color="blue-gray">
                            Rạng thái
                          </Typography>
                          <Divider variant="body" />
                          <Typography variant="body" color="blue-gray">
                            0912345678
                          </Typography>
                        </div>
                        <div className="mt-5">
                          <Typography variant="body" color="blue-gray">
                            thai@gmail.com
                          </Typography>
                        </div>
                      </div>
                    }
                  />
                </div>
              </ListItem>
            ) : (
              <ListItem onClick={() => navigate("/login")}>
                <div className="flex items-center">
                  <Radio
                    name="address"
                    label={
                      <Typography>
                        Đăng nhập để chọn thông tin đã lưu
                      </Typography>
                    }
                  />
                </div>
              </ListItem>
            )}
            <ListItem onClick={() => setCheck(false)}>
              <div className="flex items-center">
                <Radio
                  checked={!check}
                  name="address"
                  label={<Typography>Địa chỉ mới</Typography>}
                />
              </div>
            </ListItem>
          </List>
          {!check && (
            <form className="mb-2 w-full mx-auto">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Họ và tên người đặt bàn
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Số điện thoại
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email
                </Typography>
                <Input
                  className="min-h-full border-1 focus:!border-gray-900"
                  containerProps={{
                    className: "grid h-full",
                  }}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </form>
          )}
        </CardBody>
      </Card>
      <Card className="mt-6">
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              2. Thông tin đặt bàn
            </Typography>
            <Typography as="a" href="/cart" color="cyan">
              Sửa
            </Typography>
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
            <Typography variant="h6" color="black">
              Nhà hàng
            </Typography>
            <Typography variant="medium" color="black">
              Mindx Chi nhánh Phú Nhuận
            </Typography>
            <Typography variant="h6" color="black">
              Ngày đặt bàn
            </Typography>
            <Typography variant="medium" color="black">
              12/12/2024
            </Typography>
            <Typography variant="h6" color="black">
              Giờ đặt bàn
            </Typography>
            <Typography variant="medium" color="black">
              12:12
            </Typography>
            <Typography variant="h6" color="black">
              Số lượng bàn
            </Typography>
            <Typography variant="medium" color="black">
              500
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray" className="mt-2 mb-2">
            3. Phương thức thanh toán
          </Typography>
          <Divider />
          <Typography>
            <List>
              <ListItem onClick={() => setCheck2(1)}>
                <div className="flex items-center">
                  <Radio
                    checked={check2 === 1}
                    name="method"
                    label={<Typography>Thanh toán tiền mặt</Typography>}
                  />
                </div>
              </ListItem>
              <ListItem onClick={() => setCheck2(2)}>
                <div className="flex items-center">
                  <Radio
                    checked={check2 === 2}
                    name="method"
                    label={
                      <>
                        <Typography>Thanh toán qua thẻ ngân hàng</Typography>
                      </>
                    }
                  />
                </div>
              </ListItem>
              <ListItem onClick={() => setCheck2(3)}>
                <div className="flex items-center">
                  <Radio
                    checked={check2 === 3}
                    name="method"
                    label={<Typography>Thanh toán qua thẻ ghi nợ</Typography>}
                  />
                </div>
              </ListItem>
            </List>
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6">
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              4. Thực đơn
            </Typography>
            <Typography as="a" href="/cart" color="cyan">
              Sửa
            </Typography>
          </div>
          <Divider />
          <div className="flex items-center justify-between mt-4">
            <Typography className="" variant="body" color="blue-gray">
              1 x{" "}
              <span className="text-cyan-300 w-[100px] text-wrap">Bò kho</span>
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              <Typography variant="body" color="blue-gray">
                58000đ
              </Typography>
              <Typography className="line-through text-gray-400" variant="body">
                58000đ
              </Typography>
            </div>
          </div>
          <Typography variant="body" color="blue-gray" className="mt-5 mb-3">
            Mã giảm giá
          </Typography>
          <div className="flex items-center">
            <Input
              type="text"
              size="sm"
              placeholder="Mã giảm giá"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
            <Button
              size="md"
              className="w-1/2"
              variant="outlined"
              color="lightBlue"
            >
              Dùng mã
            </Button>
          </div>
          <Typography variant="body" color="green">
            MX2000
          </Typography>
          <div className="flex justify-between items-center mt-5">
            <Typography variant="body" color="blue-gray">
              Tạm tính
            </Typography>
            <Typography variant="body" color="blue-gray">
              2,000,000 đ
            </Typography>
          </div>
          <div className="flex justify-between items-center mt-2">
            <Typography variant="body" color="blue-gray">
              Giảm giá
            </Typography>
            <Typography variant="body" color="blue-gray">
              0 đ
            </Typography>
          </div>
          <div className="mt-5 mb-5">
            <Divider />
          </div>
          <div className="flex justify-between items-center mt-2">
            <Typography variant="body" color="blue-gray">
              Tổng cộng
            </Typography>
            <Typography variant="h6" color="blue-gray">
              2,000,000 đ
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="red" fullWidth onClick={handleNext}>
            Thanh toán
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Step1Checkout;

import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { employee } from "../../constants/table_head";
import {
  Button,
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Divider } from "@mui/material";
// const employee = [
//     { label: "ID", col: 1 },
//     { label: "Tên", col: 1 },
//     { label: "Giới tính", col: 1 },
//     { label: "Tên đăng nhập", col: 1 },
//     { label: "Mật khẩu", col: 1 },
//   ];
const TABLE_ROWS = [
  {
    id: "001",
    name: "Nguyễn Văn A",
    gender: "Nam",
    username: "nguyenvana",
    password: "123456",
  },
  {
    id: "002",
    name: "Nguyễn Văn B",
    gender: "Nam",
    username: "nguyenvanb",
    password: "123456",
  },
];
const Employee = () => {
  const [active, setActive] = useState(1);
  const [subactive, setSubactive] = useState(1);
  return (
    <AdminLayout
      name="Danh sách nhân viên"
      TABLE_HEAD={employee}
      TABLE_ROWS={TABLE_ROWS}
      active={active}
      setActive={setActive}
      updateContent="Chỉnh sửa"
      deleteContent="Xóa"
      size="md"
      headerDetail={"Nhân viên #" + TABLE_ROWS[0].id}
      bodyDetail={
        <>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                src="https://www.raiven.com/hs-fs/hubfs/shutterstock_1153673752-no-image-found.jpg?width=500&height=500&name=shutterstock_1153673752-no-image-found.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  Họ và tên:
                </Typography>
                <Typography color="blue-gray" className="text-left">
                  {TABLE_ROWS[0].name}
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  Giới tính:
                </Typography>
                <Typography color="blue-gray" className="text-left">
                  {TABLE_ROWS[0].gender}
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  Tên đăng nhập:
                </Typography>
                <Typography color="blue-gray" className="text-left">
                  {TABLE_ROWS[0].username}
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  Mật khẩu:
                </Typography>
                <Typography color="blue-gray" className="text-left">
                  {TABLE_ROWS[0].password}
                </Typography>
              </div>
            </div>
          </div>
        </>
      }
      //   headerDetail="Chi tiết đơn hàng #001"
      //   bodyDetail={
      //     <Card className="h-[80vh] overflow-auto">
      //       <CardBody>
      //         <div className="grid grid-cols-3 mb-5">
      //           <Typography variant="h5" color="blue-gray" className="font-bold">
      //             Thông tin liên hệ
      //           </Typography>
      //           <div className="col-span-2 grid grid-cols-3">
      //             <Typography variant="h6" color="blue-gray">
      //               Tên người nhận:
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               Nguyễn Văn A
      //             </Typography>
      //             <Typography variant="h6" color="blue-gray">
      //               Địa chỉ nhận hàng:
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               123, Đường ABC, Quận XYZ, TP. HCM
      //             </Typography>
      //             <Typography variant="h6" color="blue-gray">
      //               Số điện thoại người nhận:
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               0123456789
      //             </Typography>
      //           </div>
      //         </div>
      //         <Divider />
      //         <div className="grid grid-cols-3 mt-5 mb-5">
      //           <Typography variant="h5" color="blue-gray" className="font-bold">
      //             Phương thức thanh toán
      //           </Typography>
      //           <div className="col-span-2 grid grid-cols-3">
      //             <Typography variant="h6" color="blue-gray">
      //               Hình thức thanh toán
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               Thanh toán khi nhận hàng
      //             </Typography>
      //             <Typography variant="h6" color="blue-gray">
      //               Trạng thái
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               Đã thanh toán
      //             </Typography>
      //           </div>
      //         </div>
      //         <Divider />
      //         <div className="grid grid-cols-3 mt-5 mb-5">
      //           <Typography variant="h5" color="blue-gray" className="font-bold">
      //             Phương thức vận chuyển
      //           </Typography>
      //           <div className="col-span-2 grid grid-cols-3">
      //             <Typography variant="h6" color="blue-gray">
      //               Hình thức vận chuyển
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               Giao hàng tiêu chuẩn
      //             </Typography>
      //             <Typography variant="h6" color="blue-gray">
      //               Trạng thái
      //             </Typography>
      //             <Typography
      //               variant="body"
      //               className="col-span-2"
      //               color="blue-gray"
      //             >
      //               Đang vận chuyển
      //             </Typography>
      //           </div>
      //         </div>
      //         <Divider />
      //         <Typography
      //           variant="h5"
      //           color="blue-gray"
      //           className="font-bold mt-5"
      //         >
      //           Danh sách sản phẩm
      //         </Typography>
      //         <table className="w-full min-w-max table-auto text-left mt-5">
      //           <thead>
      //             <tr>
      //               {TABLE_HEAD.map((head) => (
      //                 <th
      //                   key={head}
      //                   className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
      //                 >
      //                   <Typography
      //                     variant="small"
      //                     color="blue-gray"
      //                     className="font-normal leading-none opacity-70"
      //                   >
      //                     {head}
      //                   </Typography>
      //                 </th>
      //               ))}
      //             </tr>
      //           </thead>
      //           <tbody>
      //             {TABLE_ROWS.slice((subactive - 1) * 5, subactive * 5).map(
      //               ({ name, job, date }, index) => {
      //                 const isLast = index === TABLE_ROWS.length - 1;
      //                 const classes = isLast
      //                   ? "p-4"
      //                   : "p-4 border-b border-blue-gray-50";

      //                 return (
      //                   <tr key={name}>
      //                     <td className={classes}>
      //                       <Typography
      //                         variant="small"
      //                         color="blue-gray"
      //                         className="font-normal"
      //                       >
      //                         {name}
      //                       </Typography>
      //                     </td>
      //                     <td className={classes}>
      //                       <Typography
      //                         variant="small"
      //                         color="blue-gray"
      //                         className="font-normal"
      //                       >
      //                         {job}
      //                       </Typography>
      //                     </td>
      //                     <td className={classes}>
      //                       <Typography
      //                         variant="small"
      //                         color="blue-gray"
      //                         className="font-normal"
      //                       >
      //                         {date}
      //                       </Typography>
      //                     </td>
      //                   </tr>
      //                 );
      //               }
      //             )}
      //             <tr className="bg-blue-gray-50/50">
      //               <td className="p-4">Tổng cộng</td>
      //               <td></td>
      //               <td></td>
      //               <td></td>
      //               <td className="p-4">1000000</td>
      //             </tr>
      //           </tbody>
      //         </table>
      //         <Pagination
      //           page={Math.ceil(TABLE_ROWS.length / 5)}
      //           active={subactive}
      //           setActive={setSubactive}
      //         />
      //       </CardBody>
      //     </Card>
      //   }
      updateSize="lg"
      headerUpdate="Chỉnh sửa nhân viên #001"
      bodyUpdate={
        <>
          <div className="grid grid-cols-3 mb-5 gap-4">
            <div>
              <img
                src="https://www.raiven.com/hs-fs/hubfs/shutterstock_1153673752-no-image-found.jpg?width=500&height=500&name=shutterstock_1153673752-no-image-found.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center my-auto"
                >
                  Họ và tên:
                </Typography>
                <Input
                  type="text"
                  value={TABLE_ROWS[0].name}
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center my-auto"
                >
                  Giới tính:
                </Typography>
                <Select>
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                </Select>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  Tên đăng nhập:
                </Typography>
                <Typography color="blue-gray" className="text-left">
                  {TABLE_ROWS[0].username}
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  Mật khẩu:
                </Typography>
                <Typography color="blue-gray" className="text-left">
                  {TABLE_ROWS[0].password}
                </Typography>
              </div>
            </div>
          </div>
        </>
      }
    >
      <div className="flex items-center justify-between gap-4">
        <Input
          size="sm"
          label="Tìm kiếm"
          iconFamily="material-icons"
          iconName="search"
          placeholder="Tìm kiếm sản phẩm"
        />
        <Button variant="outlined" className="w-full" size="regular">
          Thêm mới
        </Button>
      </div>
    </AdminLayout>
  );
};

export default Employee;

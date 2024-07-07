import React from "react";
import { not_found } from "../constants/notification";
import Notificationpage from "./Notificationpage";

const NotFoundpage = () => {
  return <Notificationpage noti={not_found} />;
};

export default NotFoundpage;

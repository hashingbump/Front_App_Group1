import React from "react";
import { forbidden } from "../constants/notification";
import Notificationpage from "./Notificationpage";

const Forbiddenpage = () => {
  return <Notificationpage noti={forbidden} />;
};

export default Forbiddenpage;

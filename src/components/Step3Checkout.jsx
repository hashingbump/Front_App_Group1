import React, { useState } from "react";

import { fail_checkout, success_checkout } from "../constants/notification";
import Notificationpage from "../pages/Notificationpage";
const Step3Checkout = () => {
  const [check, setCheck] = useState(true);
  return <Notificationpage noti={check ? success_checkout : fail_checkout} />;
};

export default Step3Checkout;

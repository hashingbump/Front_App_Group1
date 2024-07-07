import React from "react";
import { SIDEBAR_SEARCH } from "../constants/sidebar_search";
import SidebarWithSearch from "../components/SidebarWithSearch";
import AdminNavbar from "../components/AdminNavbar";

const Adminpage = () => {
  const [tab, setTab] = React.useState("Thống kê");
  return (
    <div>
      <AdminNavbar />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <SidebarWithSearch tab={tab} setTab={setTab} />
        </div>
        <div className="col-span-9">
          {SIDEBAR_SEARCH.map((item) =>
            item.sublist.map(
              (subitem) => subitem.label === tab && subitem.elements
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Adminpage;

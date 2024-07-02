import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import "../../index.css";
import ChatArea from "../Chat-Area/ChatArea";

const MainContainer = () => {
  return (
    <div className="flex justify-between h-[90vh] w-[90vw] bg-teal-100 rounded-3xl gap-5 p-5">
      <div className="w-[30%] overflow-y-auto scrollbar">
        <Sidebar></Sidebar>
      </div>
      <div className=" w-[70%]">
        <ChatArea></ChatArea>
      </div>

      {/* <div>
        <Outlet></Outlet>
      </div> */}
    </div>
  );
};

export default MainContainer;

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import WorkArea from "../WorkArea/WorkArea";
import "../../index.css";

const MainContainer = () => {
  return (
    <div className="flex justify-between h-[90vh] w-[90vw] bg-slate-100 rounded-3xl gap-5">
      <div  className="w-[30%] bg-red-800">
      <Sidebar ></Sidebar>
      </div>
      <div className="bg-blue-500 w-[70%]">
      <WorkArea></WorkArea>
      </div>
      {/* <div>
        <Outlet></Outlet>
      </div> */}
    </div>
  );
};

export default MainContainer;

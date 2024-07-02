import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { IconButton, Input } from "@mui/material";
import { InputRounded } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center bg-slate-50 w-full px-4 py-2 rounded-2xl">
        <IconButton>
          <AccountCircleOutlinedIcon />
        </IconButton>
        <div>
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <GroupAddOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="mt-5">
        <input
          type="text"
          className="px-4 py-2 rounded-full outline-teal-100"
          placeholder="Seach Name"
        />
        
      </div>
      <div className="bg-slate-50 px-4 py-2 rounded-xl space-y-8  mt-10 ">
        <div className="flex items-center gap-5">
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          <div>
            <h4 className="text-xl font-bold text-teal-500">User Name</h4>
            <p className="text-base text-gray-500">Last messege</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          <div>
            <h4 className="text-xl font-bold text-teal-500">User Name</h4>
            <p className="text-base text-gray-500">Last messege</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          <div>
            <h4 className="text-xl font-bold text-teal-500">User Name</h4>
            <p className="text-base text-gray-500">Last messege</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

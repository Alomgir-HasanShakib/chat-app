import { IconButton } from "@mui/material";
import OthersMessage from "../OthersMassage/OthersMessage";
import SelfMessage from "../selfMessage/SelfMessage";
import SendIcon from "@mui/icons-material/Send";

const ChatArea = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-5 items-center bg-slate-50 w-full px-4 py-2 rounded-2xl">
        <img
          className="w-10 rounded-full"
          src="https://i.postimg.cc/RFxdFQt5/p-hero-profile.jpg"
          alt=""
        />
        <div>
          <h2 className="text-xl font-semibold text-teal-800">
            Alomgir Hasan Shakib
          </h2>
          <p className="text-green-500">Online</p>
        </div>
      </div>
      <div className="flex-1 bg-slate-50 rounded-lg mt-8 mb-8 overflow-auto scrollbar">
        <OthersMessage></OthersMessage>
        <SelfMessage></SelfMessage>
        <OthersMessage></OthersMessage>
        <SelfMessage></SelfMessage>
        <OthersMessage></OthersMessage>
        <SelfMessage></SelfMessage>
        <OthersMessage></OthersMessage>
        <SelfMessage></SelfMessage>
        <OthersMessage></OthersMessage>
        <SelfMessage></SelfMessage>
      </div>
      <div className="bg-slate-50 px-4 py-2 rounded-full flex justify-between items-center">
        <input
          className="w-[80%] px-4 py-2 bg-transparent outline-teal-100 rounded-full"
          type="text"
          placeholder="Write Your Text Here!"
        />
        <IconButton>
          <SendIcon></SendIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;

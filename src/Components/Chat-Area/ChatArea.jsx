const ChatArea = () => {
  return (
    <div>
      <div className="flex gap-5 items-center bg-slate-50 w-full px-4 py-2 rounded-2xl">
        <img
          className="w-10 rounded-full"
          src="https://i.postimg.cc/RFxdFQt5/p-hero-profile.jpg"
          alt=""
        />
        <div>
          <h2 className="text-xl font-semibold text-teal-800">Alomgir Hasan Shakib</h2>
          <p className="text-green-500">Online</p>
        </div>
      </div>
      <div>Message Container</div>
      <div>Input field</div>
    </div>
  );
};

export default ChatArea;

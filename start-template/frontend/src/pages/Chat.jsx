import React from "react";

export default function Chat() {
  return (
    <div className="text-center flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl"> Welcome To chat Chat</h1>

      <img
        src="https://i.pinimg.com/originals/de/ec/6e/deec6e477122a4af18d909a97e785997.jpg"
        alt="profile"
        className="w-20 h-20 rounded-full"
      />
      <span className=" text-red-500 ms-4 text-2xl font-bold">
        Work with Me
      </span>
    </div>
  );
}

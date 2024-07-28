import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Chat() {
  const { user, token, logOut } = useAuth();
  return (
    <div className="text-center flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl"> Welcome To chat Chat</h1>
      {token && (
        <div className="flex flex-col items-center">
          <img
            src={user.profilePicture}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover my-5"
          />
          <span className=" text-red-500 ms-4 text-2xl font-bold">
            {user.firstname} {user.lastname}
          </span>
          <button
            className="mt-5 bg-white border font-bold text-red-500 border-red-500 rounded-lg px-4 py-2 shadow-sm hover:bg-red-500 hover:text-white"
            onClick={logOut}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

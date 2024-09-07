import React from "react";
import { useAuthContext } from "../context/authContext";
import avatar from "../assets/avatar.png";

function Profile() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="flex w-1/3 border-2 rounded-xl shadow-sm p-4 m-4 items-center justify-center">
        <div>
          <h1 className="text-3xl ">Personal Details</h1>
          <h2>Name: {authUser.name}</h2>
          <h2>Date of Birth: {authUser.dob}</h2>
          <h2>Gender: {authUser.gender}</h2>
          <h2>State: {authUser.state}</h2>
          <h2>City: {authUser.city}</h2>
          <h2>Pincode: {authUser.pincode}</h2>
          <h2>Contact: {authUser.contact}</h2>
        </div>
        <div className="w-40 h-40">
          <img className="w-40 h-40  rounded-full" src={avatar} />
        </div>
      </div>
    </>
  );
}

export default Profile;

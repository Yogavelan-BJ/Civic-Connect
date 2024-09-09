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

          <h2>Civic ID: {authUser._id.slice(-10)}</h2>
          <h2>Civic Credits: {authUser.civicCredits}</h2>
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
      <div className="w-1/3 mx-4 h-80 border-2 my-4 rounded-lg border-red-700 flex items-center justify-center"><h1>Work History of the User will be listed here</h1></div>
      <div className="w-1/3 mx-4 h-80 border-2 my-4 rounded-lg border-red-700 flex items-center justify-center"><h1>Posts made by the User will be listed here</h1></div>
    </>
  );
}

export default Profile;

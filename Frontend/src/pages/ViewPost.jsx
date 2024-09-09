import React from "react";
import { usePostContext } from "../context/postContext";
import ImageCarousel from "../components/ImageCarousel";
import { useNavigate } from "react-router-dom";
function ViewPost() {
  const { selectedPost } = usePostContext();
  const nav = useNavigate();
  return (
    <div className="w-full flex-col m-4 p-4 justify-center items-center">
      <ImageCarousel images={selectedPost?.images} />
      <div className="flex-col w-full mt-4 justify-center items-center">
        <h1 className="text-4xl text-center">{selectedPost?.title}</h1>
        <p className="text-2xl text-center">{selectedPost?.description}</p>
        <div className="text-center">
          <span className=" text-2xl text-red-700">{selectedPost?.city},</span>
          <span className=" text-2xl mx-1 text-red-700">
            {selectedPost?.state},
          </span>
          <span className=" text-2xl text-red-700">
            {selectedPost?.pincode}
          </span>
        </div>
        <div>
          <div className="flex w-1/3 border-2 rounded-xl shadow-sm p-4 m-4 items-center justify-center">
            <div>
              <h1 className="text-3xl ">Posted By</h1>
              <h2>Name: {selectedPost?.postedBy.name}</h2>
              <h2>Date of Birth: {selectedPost?.postedBy.dob}</h2>
              <h2>Gender: {selectedPost?.postedBy.gender}</h2>
              <h2>State: {selectedPost?.postedBy.state}</h2>
              <h2>City: {selectedPost?.postedBy.city}</h2>
              <h2>Pincode:{selectedPost?.postedBy.pincode}</h2>
              <h2>Contact: {selectedPost?.postedBy.contact}</h2>
            </div>
            <div className="w-40 h-40"></div>
          </div>
        </div>
        <button
          onClick={() => {
            nav("/home/submit-work");
          }}
        >
          submittt
        </button>
      </div>
    </div>
  );
}

export default ViewPost;

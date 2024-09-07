import React, { useState } from "react";
import ImageUploader from "./ImageUploader"; // Import the child image upload component
import usePost from "../hooks/usePost";
import SelectLocation from "./SelectLocation";

const PostForm = () => {
  const { loading, post } = usePost();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    state: "",
    city: "",
    pincode: "",
    contact: "",
    images: [], // This will hold the image data from ImageUpload component
  });

  // Handle the images passed from the ImageUpload component
  const handleImagesChange = (uploadedImages) => {
    setInputs((prevState) => ({
      ...prevState,
      images: uploadedImages, // Set images from child component
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the data to your backend using fetch or axios
    console.log("Form Data:", inputs);
    post(inputs);
  };

  return (
    <div className="w-full flex items-center justify-center p-12">
      <form onSubmit={handleSubmit} className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          placeholder="Title"
          type="text"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />

        <div>
          <textarea
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            placeholder="Describe the problem and the help needed."
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          />
        </div>

        <SelectLocation inputs={inputs} setInputs={setInputs} />

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Contact"
          value={inputs.contact}
          onChange={(e) => setInputs({ ...inputs, contact: e.target.value })}
        />

        <ImageUploader onImagesChange={handleImagesChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;

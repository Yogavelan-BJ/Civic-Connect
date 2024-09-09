import React, { useState } from "react";
import useWork from "../hooks/useWork";
import ImageUploader from "../components/ImageUploader";
import { useNavigate } from "react-router-dom";

function SubmitWork() {

  const nav =useNavigate()
  const { loading, submitWork } = useWork();
  const [inputs, setInputs] = useState({
    description: "",
    images: [],
  });

  const handleImagesChange = (uploadedImages) => {
    setInputs((prevState) => ({
      ...prevState,
      images: uploadedImages,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitWork(inputs);
    nav("/home")
  };

  return (
    <div className="w-full flex items-center justify-center p-12">
      <form onSubmit={handleSubmit} className="md:w-1/3 max-w-sm">
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

        <ImageUploader onImagesChange={handleImagesChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmitWork;

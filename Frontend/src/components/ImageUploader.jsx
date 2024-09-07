import React, { useState } from "react";

const ImageUploader = ({ onImagesChange }) => {
  const [images, setImages] = useState([]);

  // Function to handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setImages(files); // Set the image files to state

    // Convert each image to base64
    const promises = files.map((file) => convertToBase64(file));

    // Resolve promises and pass the base64 images back to the parent
    Promise.all(promises).then((base64List) => {
      if (onImagesChange) {
        onImagesChange(base64List); // Pass the base64 images to the parent component
      }
    });
  };

  // Function to convert image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <h3 className="text-1xl">Upload Images</h3>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;

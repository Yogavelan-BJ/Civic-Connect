import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "@mui/material";
import "./Highlights.css";

function ImageCarousel({ images }) {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container
      id="highlights"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="highlightss">
        <div className="carousel_container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {images?.map((image) => (
              <Carousel.Item>
                <img
                  key={image._id}
                  className="poster_image"
                  src={image.base64}
                  alt="Image"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
}

export default ImageCarousel;

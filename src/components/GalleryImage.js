import React from "react";
import { DeleteBtn, ImageText, hoverDiv, container } from "./styles";
import "./styles.css";

function GalleryImage({ item, index, handleDelete }) {
  return (
    <div key={index} style={container} className="container">
      <img
        src={`${item.url}?w=162&auto=format`}
        srcSet={`${item.url}?w=162&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
        style={{
          borderRadius: 8,
          display: "block",
          width: "100%",
        }}
        className="image"
      />
      <div style={hoverDiv} className="hoverDiv">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DeleteBtn onClick={handleDelete}>delete</DeleteBtn>
        </div>
        <ImageText variant="text">{item.name}</ImageText>
      </div>
    </div>
  );
}

export default GalleryImage;

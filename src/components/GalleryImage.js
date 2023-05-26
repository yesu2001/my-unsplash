import React from "react";
import { deleteImage } from "../api";
import { DeleteBtn, ImageText, hoverDiv, container } from "./styles";
import "./styles.css";

function GalleryImage({ item, index, handleDelete, message, setMessage }) {
  return (
    <div key={index} style={container} className="container">
      <img
        src={`${item.imageUrl}?w=162&auto=format`}
        srcSet={`${item.imageUrl}?w=162&auto=format&dpr=2 2x`}
        alt={item.label}
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
          <DeleteBtn onClick={() => handleDelete(item._id)}>delete</DeleteBtn>
        </div>
        <ImageText variant="text">{item.label}</ImageText>
      </div>
    </div>
  );
}

export default GalleryImage;

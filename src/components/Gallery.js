import { Grid } from "@mui/material";
import React from "react";
import Masonry from "@mui/lab/Masonry";
import "./styles.css";
import GalleryImage from "./GalleryImage";
import Loader from "./Loader";

function Gallery({ images, handleDelete, message, setMessage, loading }) {
  return (
    <Grid container>
      {loading && <Loader />}
      <Masonry columns={3} spacing={2}>
        {images?.map((item, index) => (
          <GalleryImage
            key={index}
            item={item}
            index={index}
            handleDelete={handleDelete}
            message={message}
            setMessage={setMessage}
          />
        ))}
      </Masonry>
    </Grid>
  );
}

export default Gallery;

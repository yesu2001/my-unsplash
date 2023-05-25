import { Grid, Typography } from "@mui/material";
import React from "react";
import Masonry from "@mui/lab/Masonry";
import "./styles.css";
import GalleryImage from "./GalleryImage";

const images = [
  {
    id: "234r",
    name: "image1",
    url: "https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "274r",
    name: "image1",
    url: "https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2h64df",
    name: "image1",
    url: "https://plus.unsplash.com/premium_photo-1684164601795-690f2b348144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "23g76",
    name: "image1",
    url: "https://plus.unsplash.com/premium_photo-1683309558738-aa188bd24140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "76rt68f",
    name: "image1",
    url: "https://plus.unsplash.com/premium_photo-1684164601795-690f2b348144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

function Gallery() {
  const handleDelete = () => {};
  return (
    <Grid container>
      <Masonry columns={3} spacing={2}>
        {images.map((item, index) => (
          <GalleryImage
            key={index}
            item={item}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </Masonry>
    </Grid>
  );
}

export default Gallery;

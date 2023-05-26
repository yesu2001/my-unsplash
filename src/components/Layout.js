import { Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";

function Layout({ images, handleDelete, message, setMessage }) {
  return (
    <Stack>
      <Header message={message} setMessage={setMessage} />
      <Gallery images={images} handleDelete={handleDelete} message={message} />
    </Stack>
  );
}

export default Layout;

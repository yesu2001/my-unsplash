import { Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";

function Layout({
  images,
  handleDelete,
  message,
  setMessage,
  loading,
  labels,
}) {
  return (
    <Stack>
      <Header message={message} setMessage={setMessage} labels={labels} />
      <Gallery
        images={images}
        handleDelete={handleDelete}
        message={message}
        loading={loading}
      />
    </Stack>
  );
}

export default Layout;

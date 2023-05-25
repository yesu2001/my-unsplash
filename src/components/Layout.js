import { Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";

function Layout() {
  return (
    <Stack>
      <Header />
      <Gallery />
    </Stack>
  );
}

export default Layout;

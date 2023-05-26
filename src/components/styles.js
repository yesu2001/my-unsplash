import { Box, Button, Typography, styled } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

export const Search = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  fontSize: "20px",
  padding: "10px",
  border: "1px solid",
  borderColor: grey[700],
  borderRadius: 10,
  outline: "none",
}));

export const SearchInput = styled("input")(() => ({
  border: "none",
  outline: "none",
}));

export const popupstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 3,
};

export const AddPhotoBtn = styled(Button)(() => ({
  background: "#3DB46D",
  color: "white",
  transition: "background 200ms linear",
  padding: "10px 10px",
  borderRadius: 10,
  ":hover": {
    background: green[400],
  },
}));

export const InputForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
}));

export const inputField = {
  border: "1px solid",
  borderColor: grey[500],
  outline: "none",
  borderRadius: 10,
  height: 40,
  fontSize: 14,
  padding: "0 20px",
};

export const labelField = {
  fontSize: 12,
  marginBottom: "10px",
};

export const ButtonForm = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "20px",
}));

export const CancelBtn = {
  cursor: "pointer",
  margin: "0 15px",
  border: "none",
  outline: "none",
  background: "transparent",
  color: grey[700],
  fontWeight: "bold",
};

export const SubmitBtn = {
  padding: "10px 15px",
  border: "none",
  borderRadius: 5,
  outline: "none",
  background: green[700],
  color: "white",
  fontWeight: "bold",
  ":disabled": {
    background: "grey",
  },
};

export const container = {
  position: "relative",
};

// export const hoverDiv = {
//   position: "relative",
//   // visibility: "hidden",
//   display: "flex",
//   flexDirection: "column",
//   // alignItems: "center",
//   justifyContent: "space-between",
// };

export const DeleteBtn = styled("button")(() => ({
  margin: "10px",
  border: "1px solid red",
  background: "transparent",
  outline: "none",
  padding: "5px",
  borderRadius: 10,
  color: red[700],
  fontWeight: "bold",
  cursor: "pointer",
}));

export const ImageText = styled("p")(() => ({
  position: "relative",
  float: "left",
  color: "black",
  fontWeight: "bold",
  padding: "10px 10px",
  color: "white",
}));

export const hoverDiv = {
  transition: "0.5s ease",
  height: "100%",
  // opacity: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

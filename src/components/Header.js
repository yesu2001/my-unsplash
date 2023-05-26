import {
  Box,
  Button,
  FormLabel,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./my_unsplash_logo.svg";
import {
  CancelBtn,
  InputForm,
  labelField,
  inputField,
  ButtonForm,
  popupstyle,
  AddPhotoBtn,
  Search,
  SearchInput,
} from "./styles";
import { postImage, getImages } from "../api";

function Header({ message, setMessage }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [uploadData, setUploadData] = React.useState({
    label: "",
    imageUrl: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = async (e) => {
    if (e.target.type === "file") {
      setLoading(true);
      const imageFile = e.target.files[0];
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "unsplash_image_db");
      await fetch("https://api.cloudinary.com/v1_1/dsssldou9/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setUploadData((previousData) => ({
              ...previousData,
              [e.target.name]: data.secure_url,
            }));
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setUploadData((previousData) => ({
        ...previousData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploadData.label === "" || !uploadData.imageUrl === "") {
      alert("please fill all the fields");
    } else {
      const response = await postImage(uploadData);
      handleClose();
      uploadData.label = "";
      uploadData.imageUrl = "";
      console.log(response.message);
      setMessage(response.message);
      setInterval(setMessage(""), 3000);
    }
  };

  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      pt={4}
      pb={10}
    >
      <Stack direction={"row"} alignItems="center" spacing={4}>
        <img src={logo} alt="logo" />
        <Search>
          <SearchIcon sx={{ color: "grey", mr: 1 }} />
          <SearchInput type="text" placeholder="search by name" />
        </Search>
      </Stack>
      <AddPhotoBtn onClick={handleOpen}>Add photo</AddPhotoBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={popupstyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new photo
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputForm>
              <FormLabel style={labelField}>Label</FormLabel>
              <input
                type="text"
                name="label"
                required
                value={uploadData.label}
                onChange={handleChange}
                style={inputField}
              />
            </InputForm>
            <InputForm>
              <FormLabel style={labelField}>Upload Image</FormLabel>
              <input
                type="file"
                required
                name="imageUrl"
                onChange={handleChange}
              />
            </InputForm>
            <ButtonForm>
              <Button style={CancelBtn} onClick={handleClose}>
                cancel
              </Button>
              <LoadingButton
                onClick={handleSubmit}
                loading={loading}
                sx={{
                  background: !loading && "#00e676",
                  color: "white",
                  fontWeight: "bold",
                  ":hover": {
                    background: !loading && "#00c853",
                  },
                }}
              >
                <span>Save</span>
              </LoadingButton>
            </ButtonForm>
          </form>
        </Box>
      </Modal>
    </Stack>
  );
}

export default Header;

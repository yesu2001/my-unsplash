import {
  Box,
  Button,
  FormLabel,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./my_unsplash_logo.svg";
import {
  CancelBtn,
  SubmitBtn,
  formStyle,
  InputForm,
  labelField,
  inputField,
  ButtonForm,
  popupstyle,
  AddPhotoBtn,
  Search,
  SearchInput,
} from "./styles";

//  ----------- Styles ----------- //

function Header() {
  const [open, setOpen] = React.useState(false);
  const uniqueId = Math.random().toString(16).slice(-4);
  const [uploadData, setUploadData] = React.useState({
    label: "",
    imageUrl: "",
  });
  const [file, setFile] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = async (e) => {
    if (e.target.type === "file") {
      const imageFile = e.target.files[0];
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "unsplash_image_db");
      console.log(process.env.CLOUD_URL);
      await fetch("https://api.cloudinary.com/v1_1/dsssldou9/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUploadData((previousData) => ({
            ...previousData,
            [e.target.name]: data.secure_url,
          }));
        });
    } else {
      setUploadData((previousData) => ({
        ...previousData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(uploadData);
    handleClose();
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
                value={uploadData.label}
                onChange={handleChange}
                style={inputField}
              />
            </InputForm>
            <InputForm>
              <FormLabel style={labelField}>Upload Image</FormLabel>
              <input type="file" name="imageUrl" onChange={handleChange} />
            </InputForm>
            <ButtonForm>
              <Button style={CancelBtn} onClick={handleClose}>
                cancel
              </Button>
              <Button value="Submit" style={SubmitBtn} onClick={handleSubmit}>
                Submit
              </Button>
            </ButtonForm>
          </form>
        </Box>
      </Modal>
    </Stack>
  );
}

export default Header;

import { Container } from "@mui/material";
import Layout from "./components/Layout";
import React from "react";
import { getImages, deleteImage } from "./api";
import MessageBox from "./components/MessageBox";

function App() {
  const [images, setImages] = React.useState([]);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const db_data = await getImages();
      if (db_data) {
        setImages(db_data);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setImages(images.filter((item) => item._id !== id));
    const result = await deleteImage(id);
    console.log(result);
    setMessage(result.message);
    setInterval(clearMessage, 3000);
    // console.log(result.message);
  };

  function clearMessage() {
    setMessage("");
  }

  return (
    <Container>
      {message && <MessageBox message={message} />}
      <Layout
        images={images}
        handleDelete={handleDelete}
        message={message}
        setMessage={setMessage}
      />
    </Container>
  );
}

export default App;

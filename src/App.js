import { Container } from "@mui/material";
import Layout from "./components/Layout";
import React from "react";
import { getImages, deleteImage } from "./api";
import MessageBox from "./components/MessageBox";

function App() {
  const [images, setImages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [labels, setLabels] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const db_data = await getImages();
    if (db_data) {
      setInterval(setImages(db_data), 3000);
      setLoading(false);
      setLabels(db_data.map((item) => item.label));
    }
  }

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
        loading={loading}
        labels={labels}
      />
    </Container>
  );
}

export default App;

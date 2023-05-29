export const postImage = async (uploaddata) => {
  try {
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uploaddata),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

export const getImages = async () => {
  try {
    const response = await fetch("http://localhost:8000/");
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

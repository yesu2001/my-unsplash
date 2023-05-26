export const postImage = async (uploaddata) => {
  const response = await fetch("http://localhost:8000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(uploaddata),
  });
  const data = await response.json();
  return data;
};

export const getImages = async () => {
  const response = await fetch("http://localhost:8000/");
  const data = await response.json();
  return data;
};

export const deleteImage = async (id) => {
  console.log(id);
  const response = await fetch(`http://localhost:8000/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

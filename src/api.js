const url = "https://my-unsplash-api-chi.vercel.app/unsplash";
export const postImage = async (uploaddata) => {
  try {
    const response = await fetch(url, {
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
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

export const deleteImage = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

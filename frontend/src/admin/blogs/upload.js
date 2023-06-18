export const uploadOnCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "tlcxb6ma");
      formData.append("cloud_name", "do1yoqqak");
  
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/do1yoqqak/image/upload",
        {
          method: 'POST',
          body: formData,
        }
      );
  
      const data = await response.json();
      const public_id = data?.public_id;
      const urlOfPhoto = data?.url;
    //   console.log(urlOfPhoto);
      return urlOfPhoto;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  
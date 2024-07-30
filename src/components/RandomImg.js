import { useEffect, useState } from "react";

const RandomImg = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.nekosapi.com/v3/images/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        setImages(data.items);
      });
  }, []);

  return (
    <div className="flex flex-wrap bg-white h-screen w-screen p-2">
      {images.map((val, key) => {
        return (
          <div key={key} className="bg-gray-900 w-[400px] m-2 p-3 rounded-lg">
            <img
              className="object-scale-down h-48 w-full"
              src={val.image_url}
              alt="Anime"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RandomImg;

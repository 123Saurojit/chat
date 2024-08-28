import React, { useState, useEffect } from "react";
import { UserContext } from "../ContextApi/Context.jsx";

export default function ImageComp() {
  const [imageSrc, setImageSrc] = useState("");

  const { userState, setUserState } = UserContext();

  console.log(userState);

  useEffect(() => {
    const fetchImage = async () => {
      if (userState?.img) {
        setImageSrc(userState?.img);

        return;
      }

      try {
        const response = await fetch("https://random.imagecdn.app/500/150");

        setImageSrc(response?.url);

        setUserState({ img: response?.url });
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Random Nature"
          className="w-10 h-10 rounded-full mr-4"
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}

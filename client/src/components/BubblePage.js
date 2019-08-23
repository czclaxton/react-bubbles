import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getColors = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        // console.log(res.data);
        setColorList(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getColors();
  }, [colorList.length]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

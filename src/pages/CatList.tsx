import { JSX, useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  CircularProgress,
  Box,
} from "@mui/material";



const CatList = (): JSX.Element => {
  

  return (
    <ImageList
      sx={{ width: "100%", height: "100%", padding: 2, margin: 0 }}
      cols={5}
      gap={10}
    >
      {cats.map((cat) => (
        <ImageListItem key={cat.id}>
          <img
            src={cat.url}
            alt="Gato"
            loading="lazy"
            style={{
              borderRadius: "12px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <ImageListItemBar
            title={cat.breeds?.[0]?.name || "Gatito"}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CatList;

  
  
  
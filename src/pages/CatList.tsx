import { JSX, } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  
} from "@mui/material";


const CatList = (): JSX.Element => {
  

  return (
    <ImageList
      
      {cats.map((cat) => (
        <ImageListItem key={cat.id}>
          
          <ImageListItemBar
            
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CatList;

  
  
  
import { JSX, useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  CircularProgress,
  Box,
} from "@mui/material";

interface Breed {
  name: string;
}

interface CatImage {
  id: string;
  url: string;
  breeds?: Breed[];
}

const CatList = (): JSX.Element => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=30&size=thumb",
          {
            headers: {
              "x-api-key": "live_Fc2tAnRrbF64ymDOoWc5ukQn6TKnupsT2oMvqe4rAaIt4afacAN3Ci4goCokjLcS", 
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener las imágenes");
        }

        const data: CatImage[] = await response.json();
        setCats(data);
      } catch (error) {
        console.error("Error al obtener imágenes de gatos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

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

  
  
  
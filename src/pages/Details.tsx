import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Card from "../components/Card";
import type { ImageType } from "../components/Card";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";

function Details() {
  const { state } = useLocation();
  const name = state?.name || "User";

  const { setSaved } = useContext(AppContext);
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(() => setImages([]));
  }, [page]);

  const handleSave = (img: ImageType) => {
    setSaved((prev) =>
      prev.find((i) => i.id === img.id)
        ? prev
        : [...prev, img]
    );
  };

  return (
    <Container>
      <h2>Welcome {name}</h2>

      <Grid>
        {images.map((img) => (
          <Card
            key={img.id}
            img={img}
            onSave={handleSave}
            showCheckbox
          />
        ))}
      </Grid>

      <Pagination
        page={page}
        setPage={setPage}
        hasNext={images.length > 0}
      />
    </Container>
  );
}

export default Details;

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  gap: 15px;

  
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
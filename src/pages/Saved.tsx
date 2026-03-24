import { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../context/AppContext";
import Card from "../components/Card";

function Saved() {
  const { saved } = useContext(AppContext);

  return (
    <Container>
      <Title>You saved {saved.length} images</Title>

      {saved.length === 0 ? (
        <Text>No images selected</Text>
      ) : (
        <Grid>
          {saved.map((img) => (
            <Card key={img.id} img={img} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Saved;





/* STYLES  */

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const Grid = styled.div`
  display: grid;
  gap: 15px;

  
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/details", { state: { name } });
  };

  return (
    <Container>
      <Title>Enter your name</Title>

      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleNavigate}>
        Next
      </Button>
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

export default Home;
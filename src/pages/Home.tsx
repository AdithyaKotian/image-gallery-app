import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Enter your name</h2>

      <input
        style={styles.input}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        style={styles.button}
        onClick={() => navigate("/details", { state: { name } })}
      >
        Next
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: 20
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10
  },
  button: {
    padding: 10,
    background: "blue",
    color: "white",
    border: "none"
  }
};

export default Home;
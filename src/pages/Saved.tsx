import { useContext } from "react";
import { AppContext } from "../context/AppContext";

type ImageType = {
  id: string;
  author: string;
  download_url: string;
};

function Saved() {
  const { saved } = useContext(AppContext)!;

  return (
    <div style={styles.container}>
      <h2>You saved {saved.length} images</h2>

      {saved.length === 0 ? (
        <p>No images selected</p>
      ) : (
        <div style={styles.grid}>
          {saved.map((img: ImageType) => (
            <div key={img.id} style={styles.card}>
              <img src={img.download_url} width="100%" height={100} />
              <p>{img.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "390px",
    margin: "0 auto",
    padding: 15
  },
  grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: 15
},
  card: {
    border: "1px solid black",
    padding: 10,
    width: "100%"
  }
};

export default Saved;
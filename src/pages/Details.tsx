import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type ImageType = {
  id: string;
  author: string;
  download_url: string;
};

function Details() {
  const location = useLocation();
  const name = location.state?.name || "User";

  const { setSaved } = useContext(AppContext)!;

  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then((res) => res.json())
      .then((data: ImageType[]) => setImages(data));
  }, [page]);

  const handleSave = (img: ImageType) => {
    setSaved((prev) => {
      if (prev.find((i) => i.id === img.id)) return prev;
      return [...prev, img];
    });
  };

  return (
    <div style={styles.container}>
      <h2>Welcome {name}</h2>

      <div style={styles.grid}>
        {images.map((img) => (
          <div key={img.id} style={styles.card}>
            <img src={img.download_url} width="100%" height={100} />
            <p>{img.author}</p>
            <input type="checkbox" onChange={() => handleSave(img)} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === 5}>
          Next
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: 20
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 15
  },

  card: {
    border: "1px solid black",
    padding: 10
  }
};

export default Details;
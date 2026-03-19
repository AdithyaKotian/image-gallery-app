type ImageType = {
  id: string;
  author: string;
  download_url: string;
};

type Props = {
  img: ImageType;
  onSave?: (img: ImageType) => void;
  showCheckbox?: boolean;
};

function Card({ img, onSave, showCheckbox }: Props) {
  return (
    <div style={styles.card}>
      <img src={img.download_url} width="100%" height={100} />
      <p>{img.author}</p>

      {showCheckbox && (
        <input
          type="checkbox"
          onChange={() => onSave?.(img)}
        />
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid black",
    padding: 10,
    width: "100%",
    borderRadius: 8
  }
};

export default Card;
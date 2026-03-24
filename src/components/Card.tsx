import styled from "styled-components";

export type ImageType = {
  id: string;
  author: string;
  download_url: string;
};

interface Props {
  img: ImageType;
  onSave?: (img: ImageType) => void;
  showCheckbox?: boolean;
}

function Card({ img, onSave, showCheckbox }: Props) {
  return (
    <CardBox>
      <img src={img.download_url} alt={img.author} />
      <p>{img.author || "Unknown"}</p>

      {showCheckbox && (
        <input
          type="checkbox"
          onChange={() => onSave?.(img)}
        />
      )}
    </CardBox>
  );
}

export default Card;

const CardBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;
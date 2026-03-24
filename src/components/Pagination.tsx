import styled from "styled-components";

interface Props {
  page: number;
  setPage: (p: number) => void;
  hasNext: boolean;
}

function Pagination({ page, setPage, hasNext }: Props) {
  return (
    <Container>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </Button>

      <span>Page {page}</span>

      <Button disabled={!hasNext} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
type Props = {
  page: number;
  setPage: (p: number) => void;
};

function Pagination({ page, setPage }: Props) {
  return (
    <div>
      <button
        style={styles.button}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span> Page {page} </span>

      <button
        style={styles.button}
        disabled={page === 5}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

const styles = {
  button: {
    background: "blue",
    color: "white",
    margin: 10,
    padding: 8
  }
};

export default Pagination;
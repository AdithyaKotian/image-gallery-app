import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div style={styles.topbar}>
        {isMobile ? (
          <>
            <button onClick={() => setOpen(!open)}>☰</button>
            
          </>
        ) : (
          <div style={styles.desktopMenu}>
            <button style={styles.btn} onClick={() => goTo("/")}>Home</button>
            <button style={styles.btn} onClick={() => goTo("/details")}>Details</button>
            <button style={styles.btn} onClick={() => goTo("/saved")}>Saved</button>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && open && (
        <>
          <div style={styles.overlay} onClick={() => setOpen(false)} />

          <div style={styles.sidebar}>
            <p onClick={() => goTo("/")}>Home</p>
            <p onClick={() => goTo("/details")}>Details</p>
            <p onClick={() => goTo("/saved")}>Saved</p>
          </div>
        </>
      )}
    </>
  );
}

const styles = {
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    borderBottom: "1px solid black",
    background: "white",
    color: "black"
  },

  desktopMenu: {
    display: "flex",
    gap: 10
  },

  
  btn: {
    background: "blue",
    color: "white",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer"
  },

  sidebar: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: 200,
    height: "100vh",
    background: "white",
    padding: 20,
    zIndex: 2
  },

  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.3)",
    zIndex: 1
  }
};

export default Navbar;
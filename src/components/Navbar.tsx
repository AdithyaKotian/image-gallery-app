import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <Topbar>
        {isMobile ? (
          <MenuButton onClick={() => setOpen(!open)}>☰</MenuButton>
        ) : (
          <DesktopMenu>
            <Button onClick={() => goTo("/")}>Home</Button>
            <Button onClick={() => goTo("/details")}>Details</Button>
            <Button onClick={() => goTo("/saved")}>Saved</Button>
          </DesktopMenu>
        )}
      </Topbar>

      {isMobile && open && (
        <>
          <Overlay onClick={() => setOpen(false)} />

          <Sidebar>
            <SidebarItem onClick={() => goTo("/")}>Home</SidebarItem>
            <SidebarItem onClick={() => goTo("/details")}>Details</SidebarItem>
            <SidebarItem onClick={() => goTo("/saved")}>Saved</SidebarItem>
          </Sidebar>
        </>
      )}
    </>
  );
}

export default Navbar;


/*Styled Components*/

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid black;
  background: white;
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: blue;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const MenuButton = styled.button`
  background: blue;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: white;
  padding: 20px;
  z-index: 2;
`;

const SidebarItem = styled.p`
  cursor: pointer;
  margin-bottom: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 1;
`;
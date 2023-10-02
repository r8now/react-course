import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show modal
      </button>
    </main>
  );
};

export default Home;

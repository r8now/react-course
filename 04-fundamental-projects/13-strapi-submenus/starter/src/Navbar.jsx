import { FaBars } from "react-icons/fa"
import useGlobalContext from "./Context"

const Navbar = () => {
   const {OpenSidebar}= useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={OpenSidebar}>
          <FaBars /> 
        </button>
      </div>
    </nav>
  );
}

export default Navbar
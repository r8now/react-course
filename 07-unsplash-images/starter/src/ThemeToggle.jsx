import { useGlobalContext } from "./context"
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
  return (
    <section className="toggle-content">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle
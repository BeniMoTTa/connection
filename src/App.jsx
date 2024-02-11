import { createContext, useEffect, useState } from "react";

import "./App.css";
import Header from "./Componets/Header";
import Home from "./Pages/Home";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#0d0d21]" : "bg-[#f2f5f7]"
        }`}
      >
        <Header />
        <Home theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

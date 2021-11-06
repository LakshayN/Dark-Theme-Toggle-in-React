import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <div className={theme ? "darkTheme" : ""}>
      <button
        className="clickButton"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Click Me To Toggle Theme
      </button>
    </div>
  );
}

export default App;

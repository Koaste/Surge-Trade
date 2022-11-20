import React from "react";
// import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  // const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 bg-gray-900 border-gray-800`}
    >
      {children}
    </div>
  );
};

export default Card;
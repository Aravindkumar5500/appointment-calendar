// import { useState, useEffect } from "react";
// import { ThemeContext } from "./ThemeContext";

// export function ThemeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => setDarkMode((prev) => !prev);

//   useEffect(() => {
//     // Remove all theme-related classes first
//     document.body.classList.remove("dark", "bg-gray-900", "text-white", "bg-gray-100", "text-black");
//     if (darkMode) {
//       document.body.classList.add("dark", "bg-gray-900", "text-white");
//     } else {
//       document.body.classList.add("bg-gray-100", "text-black");
//     }
//   }, [darkMode]);

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//         <header className="p-4 bg-gray-800 text-white">
//       <div className="min-h-screen">
//         {children}
//       </div>
//       </header>
//     </ThemeContext.Provider>
//   );
// }
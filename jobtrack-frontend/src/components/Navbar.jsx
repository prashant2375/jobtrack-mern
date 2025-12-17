import { enableDarkMode, disableDarkMode } from "../utils/theme";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
  const isDark = document.documentElement.classList.contains("dark");
  setDark(isDark);
}, []);

  const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    disableDarkMode();
    setDark(false);
  } else {
    enableDarkMode();
    setDark(true);
  }
};

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Job Tracker
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded-lg transition"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}

        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
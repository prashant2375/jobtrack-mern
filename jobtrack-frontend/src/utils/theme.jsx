export const enableDarkMode = () => {
  console.log("Dark ON"); 
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export const disableDarkMode = () => {
  console.log("Dark OFF"); 
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

export const loadTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark") enableDarkMode();
};

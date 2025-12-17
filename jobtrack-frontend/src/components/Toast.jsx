import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  // Auto-hide after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div className={`fixed top-5 right-5 text-white px-4 py-2 rounded-lg shadow-lg ${colors[type]} animate-fade-in`}>
      {message}
    </div>
  );
}

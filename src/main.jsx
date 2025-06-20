import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ Import the FavouritesProvider
import { FavouritesProvider } from "./context/FavouritesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ✅ Wrap App inside FavouritesProvider */}
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </StrictMode>
);

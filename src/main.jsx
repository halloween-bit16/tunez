import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import { FavouritesProvider } from "./frontend/context/FavouritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </StrictMode>
);

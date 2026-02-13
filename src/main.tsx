import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "https://github.com/hoppp666/pf/blob/main/src/index.css";
import { App } from "https://github.com/hoppp666/pf/blob/main/src/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

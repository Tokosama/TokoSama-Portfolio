import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "lenis/dist/lenis.css";
import App from "./App.jsx";
import "./i18n.js";
import Spinner from "./components/spinner.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </StrictMode>,
);

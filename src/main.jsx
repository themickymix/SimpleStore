import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserContex from "./Context.jsx"; 
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContex>
    
      <Router />
    </UserContex>
  </StrictMode>
);

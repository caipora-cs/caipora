import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    frameAncestors: ["'self'", "'caipora-5hkt.vercel.app'"],
}
}));

app.use(helmet.frameguard({action: 'allow-from', domain: 'caipora-5hkt.vercel.app'}));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

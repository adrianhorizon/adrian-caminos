import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./utils/i18n";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);

serviceWorker.register();

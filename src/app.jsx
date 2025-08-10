import * as React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h2>Hello from React!</h2>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

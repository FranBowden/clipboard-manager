import * as React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
      <h1 className="font-bold text-2xl underline text-red-700">Hello world</h1>

      <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
        Click
      </button>
    </div>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

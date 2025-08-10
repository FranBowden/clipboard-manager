import * as React from "react";
import { createRoot } from "react-dom/client";
import SearchBar from "./components/searchbar";
import Header from "./components/header";
import ItemText from "./components/itemText";
import Button from "./components/button";

const App = () => (
  <div className="bg-gray-200 text-center">
    <Header />
    <div className="min-h-screen flex flex-col items-center  ">
      <SearchBar />
      <ItemText
        text={"THIS IS AN EXAMPLE of something that might have been copied"}
      />

      <ItemText
        text={"THIS IS AN EXAMPLE of something that might have been copied"}
      />

      <ItemText
        text={"THIS IS AN EXAMPLE of something that might have been copied"}
      />

      <Button onClick={() => alert("Cleared")}>Clear all</Button>
    </div>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

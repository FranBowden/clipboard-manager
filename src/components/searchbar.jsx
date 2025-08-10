import React from "react";
import Button from "./button";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 text-lg p-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Button onClick={() => alert("Searching!")}>Search</Button>
    </div>
  );
};

export default SearchBar;

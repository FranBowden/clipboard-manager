import React from "react";
import Button from "./button";

const ItemText = ({ text }) => {
  const [createdAt] = React.useState(new Date());
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm my-2">
      <h3 className="text-gray-600 text-xl mb-2">
        {createdAt.toLocaleDateString()}
      </h3>
      <span className="text-gray-400 text-sm ml-2 align-middle">
        {createdAt.toLocaleTimeString()}
      </span>
      <p className="m-0">{text}</p>
      <Button onClick={() => alert("Pinned")}>📌</Button>
      <Button onClick={() => alert("Saved")}>Saved</Button>
    </div>
  );
};

export default ItemText;

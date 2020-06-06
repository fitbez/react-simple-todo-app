import React from "react";

export default function Header() {
  const HeaderStyle = {
    backgroundColor: "#678c89",
    color: "#fff",
    padding: "10px 15px",
  };
  return (
    <header style={HeaderStyle}>
      <h1 style={{ fontSize: "25px", lineHeight: "1.447em", margin: "0px" }}>
        Simple Todo App
      </h1>
    </header>
  );
}

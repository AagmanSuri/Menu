import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <main>
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      {items.map((menu) => {
        return <Menu {...menu} />;
      })}
    </main>
  );
}

export default App;

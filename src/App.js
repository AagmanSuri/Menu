import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filteredList = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newList = items.filter((item) => {
      return category === item.category;
    });
    setMenuItems(newList);
  };

  return (
    <main>
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      <Categories filteredList={filteredList} />
      {menuItems.map((menu) => {
        return <Menu key={menu.id} {...menu} />;
      })}
    </main>
  );
}

export default App;

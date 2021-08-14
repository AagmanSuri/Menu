import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryList, setCategoryList] = useState([]);
  const filteredList = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newList = items.filter((item) => {
      return category === item.category;
    });
    setMenuItems(newList);
  };
  const catList = [
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  useEffect(() => {
    setCategoryList(catList);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h2 className="title">Our Menu</h2>
      <div className="underline"></div>
      <Categories categoryList={categoryList} filteredList={filteredList} />
      {menuItems.map((menu) => {
        return <Menu key={menu.id} {...menu} />;
      })}
    </main>
  );
}

export default App;

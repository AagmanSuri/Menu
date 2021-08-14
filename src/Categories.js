import React from "react";

const Categories = ({ filteredList }) => {
  return (
    <main>
      <button onClick={() => filteredList("all")}>All</button>
      <button onClick={() => filteredList("breakfast")}>breakfast</button>
      <button onClick={() => filteredList("lunch")}>lunch</button>
    </main>
  );
};

export default Categories;

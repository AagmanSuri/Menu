import React from "react";

const Categories = ({ filteredList, categoryList }) => {
  return (
    <main className="btn-container">
      <button className="filter-btn" onClick={() => filteredList("all")}>
        All
      </button>
      {categoryList.map((category, index) => {
        return (
          <div key={index}>
            <button
              className="filter-btn"
              onClick={() => filteredList(`${category}`)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </main>
  );
};

export default Categories;

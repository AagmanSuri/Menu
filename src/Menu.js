import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <main className="menu section-center ">
      <div className="menu-item ">
        <h3 className="title">{title}</h3>
        <h3 className="price">{price}</h3>

        <img src={img} className="photo" alt={title}></img>
        <p className="item-info">{desc}</p>
      </div>
    </main>
  );
};

export default Menu;

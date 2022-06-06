import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map(({ title, img, price, desc, id }) => (
        <article class="menu-item" key={id}>
          <img src={img} alt="buttermilk pancakes" class="photo" />
          <div class="item-info">
            <header>
              <h4>{title}</h4>
              <h4 class="price">${price}</h4>
            </header>
            <p class="item-text">{desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;

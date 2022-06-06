import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";
const categories = ["all", ...new Set(menu.map((item) => item.category))];
function App() {
  const [items, setItems] = useState(menu);
  function filterMenu(category) {
    if (category === "all") {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div class="title">
          <h2>our menu</h2>
          <div class="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;

import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categoryes = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые ",
  ];

  
  return (
    <div className="categories">
      <ul>
        {categoryes.map((category, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {category}
          </li>
        ))}
       </ul>
    </div>
  );
}
export default Categories;

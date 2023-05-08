import React from "react";

function Categories({value, onChangeCategory}) {
  
 

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
        {categoryes.map((categoryName, index) => (
          <li
            key={index}
            className={value === index ? "active" : ""}
            onClick={() => onChangeCategory(index)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

import React from "react";
import styles from "./search.module.scss";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="./img/search.svg" alt="" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы.."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          src="./img/closebtn.svg"
          alt=""
        />
      )}
    </div>
  );
}

export default Search;
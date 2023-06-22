import React from "react";
import styles from "./search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";
function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();
  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  const [value, setValue] = React.useState("");

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="./img/search.svg" alt="" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы.."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src="./img/closebtn.svg"
          alt=""
        />
      )}
    </div>
  );
}

export default Search;

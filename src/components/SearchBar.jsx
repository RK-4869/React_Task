// File: src/components/SearchBar.jsx
import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="🔍 イベント名やキーワードで検索..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

// File: src/components/CategoryFilter.jsx
import styles from "./CategoryFilter.module.css";

const CATEGORIES = ["すべて", "お祭り", "ワークショップ", "スポーツ", "その他"];

function CategoryFilter({ selected, onChange }) {
  return (
    <div className={styles.wrapper}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`${styles.button} ${selected === cat ? styles.active : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

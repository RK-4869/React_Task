// File: src/components/Header.jsx
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          🏘️ まちイベ
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            イベント一覧
          </Link>
          <Link to="/create" className={styles.createButton}>
            + イベントを作成
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

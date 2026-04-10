// File: src/pages/EventListPage.jsx
import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import EventCard from "../components/EventCard";
import styles from "./EventListPage.module.css";

function EventListPage({ events }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const filteredEvents = events.filter((event) => {
    const matchesKeyword =
      event.title.includes(searchKeyword) ||
      event.description.includes(searchKeyword);

    const matchesCategory =
      selectedCategory === "すべて" || event.category === selectedCategory;

    return matchesKeyword && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.heading}>🎉 地域のイベントを探す</h2>

        <div className={styles.controls}>
          <SearchBar value={searchKeyword} onChange={setSearchKeyword} />
          <CategoryFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {filteredEvents.length > 0 ? (
          <div className={styles.grid}>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            該当するイベントが見つかりませんでした。
            <br />
            キーワードやカテゴリを変更してみてください。
          </p>
        )}
      </main>
    </>
  );
}

export default EventListPage;

// File: src/pages/EventDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import styles from "./EventDetailPage.module.css";

const CATEGORY_COLORS = {
  お祭り: "#e53e3e",
  ワークショップ: "#dd6b20",
  スポーツ: "#38a169",
  その他: "#718096",
};

function EventDetailPage({ events }) {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const [participantCount, setParticipantCount] = useState(
    event ? event.participants : 0,
  );
  const [hasJoined, setHasJoined] = useState(false);

  if (!event) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <p className={styles.notFound}>イベントが見つかりませんでした。</p>
          <Link to="/" className={styles.backLink}>
            ← 一覧に戻る
          </Link>
        </main>
      </>
    );
  }

  const handleJoin = () => {
    if (!hasJoined) {
      setParticipantCount((prev) => prev + 1);
      setHasJoined(true);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Link to="/" className={styles.backLink}>
          ← イベント一覧に戻る
        </Link>

        <div className={styles.card}>
          <div className={styles.top}>
            <span
              className={styles.badge}
              style={{
                backgroundColor: CATEGORY_COLORS[event.category] || "#718096",
              }}
            >
              {event.category}
            </span>
          </div>

          <h1 className={styles.title}>{event.title}</h1>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📅 日付</span>
              <span className={styles.infoValue}>{event.date}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>🕐 時間</span>
              <span className={styles.infoValue}>{event.time}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📍 場所</span>
              <span className={styles.infoValue}>{event.location}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>🏠 主催者</span>
              <span className={styles.infoValue}>{event.organizer}</span>
            </div>
          </div>

          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle}>イベント詳細</h2>
            <p className={styles.description}>{event.description}</p>
          </div>

          <div className={styles.joinSection}>
            <div className={styles.participantInfo}>
              👥 現在の参加者数：
              <strong>{participantCount}人</strong>
            </div>
            <button
              className={`${styles.joinButton} ${hasJoined ? styles.joined : ""}`}
              onClick={handleJoin}
              disabled={hasJoined}
            >
              {hasJoined ? "✅ 参加済み" : "🙋 参加する"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default EventDetailPage;

// File: src/components/EventCard.jsx
import { useNavigate } from "react-router-dom";
import styles from "./EventCard.module.css";

const CATEGORY_COLORS = {
  お祭り: "#e53e3e",
  ワークショップ: "#dd6b20",
  スポーツ: "#38a169",
  その他: "#718096",
};

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/event/${event.id}`)}>
      <div className={styles.top}>
        <span
          className={styles.badge}
          style={{
            backgroundColor: CATEGORY_COLORS[event.category] || "#718096",
          }}
        >
          {event.category}
        </span>
        <span className={styles.participants}>
          👥 {event.participants}人参加
        </span>
      </div>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.info}>
        📅 {event.date}　{event.time}
      </p>
      <p className={styles.info}>📍 {event.location}</p>
      <p className={styles.description}>{event.description}</p>
    </div>
  );
}

export default EventCard;

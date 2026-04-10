// File: src/pages/EventCreatePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./EventCreatePage.module.css";

const CATEGORIES = ["お祭り", "ワークショップ", "スポーツ", "その他"];

function EventCreatePage({ onAdd }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "",
    organizer: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim())
      newErrors.title = "イベント名を入力してください";
    if (!formData.date) newErrors.date = "日付を選択してください";
    if (!formData.time.trim()) newErrors.time = "時間を入力してください";
    if (!formData.location.trim())
      newErrors.location = "場所を入力してください";
    if (!formData.category) newErrors.category = "カテゴリを選択してください";
    if (!formData.organizer.trim())
      newErrors.organizer = "主催者を入力してください";
    if (!formData.description.trim())
      newErrors.description = "説明を入力してください";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd(formData);
    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.successCard}>
            <p className={styles.successIcon}>🎉</p>
            <h2 className={styles.successTitle}>イベントを作成しました！</h2>
            <p className={styles.successText}>
              まもなくイベント一覧に戻ります...
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.heading}>📝 新しいイベントを作成</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="title">
              イベント名 <span className={styles.required}>*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={`${styles.input} ${errors.title ? styles.inputError : ""}`}
              placeholder="例：春の花見まつり"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <p className={styles.error}>{errors.title}</p>}
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="date">
                日付 <span className={styles.required}>*</span>
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className={`${styles.input} ${errors.date ? styles.inputError : ""}`}
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <p className={styles.error}>{errors.date}</p>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="time">
                時間 <span className={styles.required}>*</span>
              </label>
              <input
                id="time"
                name="time"
                type="text"
                className={`${styles.input} ${errors.time ? styles.inputError : ""}`}
                placeholder="例：10:00〜15:00"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <p className={styles.error}>{errors.time}</p>}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="location">
              場所 <span className={styles.required}>*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className={`${styles.input} ${errors.location ? styles.inputError : ""}`}
              placeholder="例：中央公園"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && (
              <p className={styles.error}>{errors.location}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="category">
              カテゴリ <span className={styles.required}>*</span>
            </label>
            <select
              id="category"
              name="category"
              className={`${styles.input} ${errors.category ? styles.inputError : ""}`}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">カテゴリを選択してください</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className={styles.error}>{errors.category}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="organizer">
              主催者 <span className={styles.required}>*</span>
            </label>
            <input
              id="organizer"
              name="organizer"
              type="text"
              className={`${styles.input} ${errors.organizer ? styles.inputError : ""}`}
              placeholder="例：中央町内会"
              value={formData.organizer}
              onChange={handleChange}
            />
            {errors.organizer && (
              <p className={styles.error}>{errors.organizer}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="description">
              イベントの説明 <span className={styles.required}>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className={`${styles.textarea} ${errors.description ? styles.inputError : ""}`}
              placeholder="イベントの内容、参加条件、持ち物などを記入してください"
              rows={5}
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className={styles.error}>{errors.description}</p>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            🎉 イベントを作成する
          </button>
        </form>
      </main>
    </>
  );
}

export default EventCreatePage;

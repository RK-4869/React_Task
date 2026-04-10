// File: src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import initialEvents from "./data/events.json";
import EventListPage from "./pages/EventListPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventCreatePage from "./pages/EventCreatePage";

function App() {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (newEvent) => {
    setEvents((prev) => [
      ...prev,
      { ...newEvent, id: prev.length + 1, participants: 0 },
    ]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventListPage events={events} />} />
        <Route
          path="/event/:id"
          element={<EventDetailPage events={events} />}
        />
        <Route path="/create" element={<EventCreatePage onAdd={addEvent} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

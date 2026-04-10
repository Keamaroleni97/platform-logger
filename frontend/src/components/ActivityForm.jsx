import { useState } from "react";

export default function ActivityForm({ addActivity }) {
  const [type, setType] = useState("");
  const [co2, setCo2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const activity = {
      type,
      co2: Number(co2),
      category: "transport"
    };

    const existing = JSON.parse(localStorage.getItem("activities")) || [];
    const updated = [...existing, activity];

    localStorage.setItem("activities", JSON.stringify(updated));
    addActivity(activity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Activity"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        placeholder="CO2 value"
        onChange={(e) => setCo2(e.target.value)}
      />
      <button>Add Activity</button>
    </form>
  );
}

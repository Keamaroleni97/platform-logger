import { useEffect, useState } from "react";

export default function Dashboard() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(data);
  }, []);

  const total = activities.reduce((sum, a) => sum + a.co2, 0);

  const highest =
    activities.length > 0
      ? activities.reduce((max, a) => (a.co2 > max.co2 ? a : max))
      : null;

  return (
    <div>
      <h2>Total CO2: {total}</h2>

      {highest && (
        <>
          <h3>Highest Emission: {highest.type}</h3>
          <p>Tip: Reduce {highest.category} usage</p>
        </>
      )}

      {activities.map((a, i) => (
        <p key={i}>
          {a.type} - {a.co2}
        </p>
      ))}
    </div>
  );
}

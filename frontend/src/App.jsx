import { useState } from "react";
import ActivityForm from "./components/ActivityForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div>
      <h1>Footprint Logger</h1>
      <ActivityForm addActivity={addActivity} />
      <Dashboard activities={activities} />
    </div>
  );
}

export default App;

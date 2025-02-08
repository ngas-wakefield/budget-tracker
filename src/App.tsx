import { useState } from "react";
import { Container, Typography } from "@mui/material";
import GoalForm from "./components/GoalForm";
import Tracker from "./components/Tracker";
import Chart from "./components/Chart";

export default function App() {
  const [targetAmount, setTargetAmount] = useState(1000);
  const [weeklySavings, setWeeklySavings] = useState(100);
  const [weeks, setWeeks] = useState(Math.ceil(targetAmount / weeklySavings));

  const handleGoalSubmit = (amount: number, savings: number) => {
    setTargetAmount(amount);
    setWeeklySavings(savings);
    setWeeks(Math.ceil(amount / savings));
  };

  const handleSavingsChange = (newSavings: number) => {
    setWeeklySavings(newSavings);
    setWeeks(Math.ceil(targetAmount / newSavings));
  };

  const data = Array.from({ length: weeks }, (_, i) => ({
    week: i + 1,
    savings: weeklySavings * (i + 1),
  }));

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">Savings Goal Tracker</Typography>
      <GoalForm onSubmit={handleGoalSubmit} />
      <Tracker weeks={weeks} setWeeks={setWeeks} weeklySavings={weeklySavings} setWeeklySavings={handleSavingsChange} />
      <Chart data={data} />
    </Container>
  );
}

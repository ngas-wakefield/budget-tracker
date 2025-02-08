import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

interface GoalFormProps {
  onSubmit: (targetAmount: number, weeks: number) => void;
}

export default function GoalForm({ onSubmit }: GoalFormProps) {
  const [targetAmount, setTargetAmount] = useState(1000);
  const [weeks, setWeeks] = useState(10);

  const handleSubmit = () => {
    onSubmit(targetAmount, weeks);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Typography variant="h5">Set Your Savings Goal</Typography>
      <TextField
        label="Target Amount ($)"
        type="number"
        value={targetAmount}
        onChange={(e) => setTargetAmount(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Weeks"
        type="number"
        value={weeks}
        onChange={(e) => setWeeks(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
        Set Goal
      </Button>
    </Box>
  );
}

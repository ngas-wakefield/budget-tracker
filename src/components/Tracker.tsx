import { Slider, Typography, Box } from "@mui/material";

interface TrackerProps {
  weeks: number;
  setWeeks: (value: number) => void;
  weeklySavings: number;
  setWeeklySavings: (value: number) => void;
}

export default function Tracker({ weeks, weeklySavings, setWeeklySavings }: TrackerProps) {
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Typography gutterBottom>Adjust Weekly Savings: ${weeklySavings}</Typography>
      <Slider
        value={weeklySavings}
        min={10}
        max={500}
        step={10}
        onChange={(_, newValue) => setWeeklySavings(newValue as number)}
      />
      <Typography variant="h6">Estimated Weeks: {weeks}</Typography>
    </Box>
  );
}

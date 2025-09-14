import { Box, Typography } from "@mui/material";

export default function SavedJobs() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Saved Jobs
      </Typography>
      <Typography variant="body1">
        This is the saved jobs page. Your saved job listings will be displayed here.
      </Typography>
    </Box>
  );
}

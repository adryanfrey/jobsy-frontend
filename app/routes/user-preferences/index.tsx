import { Box, Typography } from "@mui/material";

export default function UserPreferences() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Preferences
      </Typography>
      <Typography variant="body1">
        This is the user preferences page. Your account settings and preferences
        will be managed here.
      </Typography>
    </Box>
  );
}

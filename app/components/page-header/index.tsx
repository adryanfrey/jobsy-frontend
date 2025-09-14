import { Box, Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 3,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}

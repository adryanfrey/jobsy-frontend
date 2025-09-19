import { Box, Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  description: string;
  actionButton?: React.ReactNode;
}

export default function PageHeader({
  title,
  description,
  actionButton,
}: PageHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 3,
        borderBottom: "1px solid",
        borderColor: "divider",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>

      {actionButton && actionButton}
    </Box>
  );
}

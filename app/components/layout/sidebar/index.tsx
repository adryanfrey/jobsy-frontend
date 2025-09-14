import { Box, Drawer, List, Typography } from "@mui/material";
import { navigationConfig } from "./config";
import SidebarListItem from "./sidebar-list-item";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
      }}
    >
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            color="primary"
          >
            Jobsy
          </Typography>
        </Box>

        <Box sx={{ flex: 1, py: 1 }}>
          <List>
            {navigationConfig.map((item) => (
              <SidebarListItem key={item.path} item={item} />
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}

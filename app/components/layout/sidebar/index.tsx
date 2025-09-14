import { Box, List } from "@mui/material";
import { navigationConfig } from "./config";
import SidebarListItem from "./sidebar-list-item";

export default function Sidebar() {
  return (
    <Box
      sx={{
        paddingTop: 0.7,
        height: "100%",
        maxWidth: 240,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <List>
        {navigationConfig.map((item) => (
          <SidebarListItem key={item.path} item={item} />
        ))}
      </List>
    </Box>
  );
}

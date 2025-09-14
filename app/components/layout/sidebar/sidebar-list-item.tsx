import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Search, Bookmark, Settings } from "@mui/icons-material";
import { Link, useLocation } from "react-router";
import { type NavigationItem, type IconName } from "./config";

const iconMap: Record<IconName, React.ComponentType> = {
  Home,
  Search,
  Bookmark,
  Settings,
};

interface SidebarListItemProps {
  item: NavigationItem;
}

export default function SidebarListItem({ item }: SidebarListItemProps) {
  const location = useLocation();

  const getIcon = (iconName: IconName) => {
    const IconComponent = iconMap[iconName];
    return <IconComponent />;
  };

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={item.path}
        selected={isActivePath(item.path)}
        sx={{
          borderRadius: 1,
          mx: 1,
          "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            "& .MuiListItemIcon-root": {
              color: "primary.contrastText",
            },
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 40 }}>{getIcon(item.icon)}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  );
}

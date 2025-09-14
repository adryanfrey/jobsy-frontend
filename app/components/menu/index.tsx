import {
  Menu,
  MenuItem as MuiMenuItem,
  ListItemIcon,
  ListItemText,
  type PopoverOrigin,
} from "@mui/material";

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType;
  action: () => void;
}

interface UserMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
}

export default function MenuComponent({
  anchorEl,
  open,
  onClose,
  menuItems,
  anchorOrigin,
  transformOrigin,
}: UserMenuProps) {
  const handleItemClick = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      slotProps={{
        paper: {
          sx: {
            minWidth: 160,
            mt: 1,
          },
        },
      }}
    >
      {menuItems.map((item) => (
        <MuiMenuItem
          key={item.id}
          onClick={() => handleItemClick(item.action)}
          sx={{
            py: 1.5,
            px: 2,
          }}
        >
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>

          <ListItemText>{item.label}</ListItemText>
        </MuiMenuItem>
      ))}
    </Menu>
  );
}

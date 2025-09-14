import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AccountCircle, LogoutOutlined } from "@mui/icons-material";
import MenuComponent, { type MenuItem } from "../../menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      id: "logout",
      label: "Logout",
      icon: LogoutOutlined,
      action: () => navigate("/logout"),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        color: "text.primary",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          color="primary"
          marginRight="auto"
        >
          Jobsy
        </Typography>

        <IconButton
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={{
            color: "text.primary",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          aria-label="User menu"
        >
          <AccountCircle fontSize="large" />
        </IconButton>

        <MenuComponent
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          menuItems={menuItems}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        />
      </Toolbar>
    </Box>
  );
}

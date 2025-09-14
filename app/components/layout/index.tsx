import { Box } from "@mui/material";
import { type ReactNode } from "react";
import Sidebar from "./sidebar";
import { ProgressBar } from "./progress-bar";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <ProgressBar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
}

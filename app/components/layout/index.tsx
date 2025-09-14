import { Box } from "@mui/material";
import { type ReactNode } from "react";
import Sidebar from "./sidebar";
import { ProgressBar } from "./progress-bar";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <ProgressBar />
      <Header />

      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

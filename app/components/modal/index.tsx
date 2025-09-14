import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export interface ModalItem {
  title: string;
  description: string;
}

export interface ModalProps {
  title: string;
  data: ModalItem[] | null;
  onClose: () => void;
}

export default function Modal({ title, data, onClose }: ModalProps) {
  const isOpen = data !== null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            maxHeight: "80vh",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <IconButton aria-label="close" onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {data && data.length > 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {data.map((item, index) => (
              <Box key={index}>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: "primary.main",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

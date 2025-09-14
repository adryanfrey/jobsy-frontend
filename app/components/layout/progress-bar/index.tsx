import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router";

export function ProgressBar() {
  const navigation = useNavigation();
  const [progressWidth, setProgressWidth] = useState("0%");
  const [shouldAnimateWidth, setShouldAnimateWidth] = useState(false);

  useEffect(() => {
    let shouldAnimateTimeout: ReturnType<typeof setTimeout>;
    let progressWidthTimeout: ReturnType<typeof setTimeout>;

    switch (navigation.state) {
      case "submitting":
        setProgressWidth("40%");
        setShouldAnimateWidth(true);
        break;
      case "loading":
        setProgressWidth("60%");
        setShouldAnimateWidth(true);
        break;
      case "idle":
        // Finish the animation
        setProgressWidth("100%");
        // Hide the progress bar (opacity 0) and disable width animation before resetting it
        shouldAnimateTimeout = setTimeout(() => {
          setShouldAnimateWidth(false);
        }, 300);
        // Reset the progress bar width
        progressWidthTimeout = setTimeout(() => {
          setProgressWidth("0%");
        }, 500);
        break;
      default:
        setShouldAnimateWidth(false);
        setProgressWidth("0%");
    }

    return () => {
      clearTimeout(shouldAnimateTimeout);
      clearTimeout(progressWidthTimeout);
    };
  }, [navigation.state]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
      role="progressbar"
      aria-hidden={progressWidth === "0%"}
      aria-valuenow={parseInt(progressWidth)}
    >
      <Box
        sx={{
          height: "4px",
          backgroundColor: "#3359FF66",
          width: progressWidth,
          transition: shouldAnimateWidth
            ? "width 0.3s ease-out"
            : "opacity 0.2s",
          opacity: shouldAnimateWidth ? 1 : 0,
          background:
            "linear-gradient(to right, #3359FFaa 0vw, #3359FF44 50vw, #3359FFaa 100vw)",
          backgroundSize: "100vw 4px",
          "@keyframes shimmer": {
            "0%": {
              backgroundPosition: "0vw 0",
            },
            "100%": {
              backgroundPosition: "100vw 0",
            },
          },
          animation: "1s linear 0.5s infinite shimmer",
        }}
      />
    </Box>
  );
}

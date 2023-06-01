import { ThemeProvider } from "@emotion/react";
import { Box, CircularProgress, Fade, createTheme } from "@mui/material";

const Loader = ({ loading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "25px",
      }}
    >
      <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "800ms" : "0ms",
          }}
          unmountOnExit
        >
          <CircularProgress color="inherit" />
        </Fade>
      </Box>
    </Box>
  );
};

export default Loader;

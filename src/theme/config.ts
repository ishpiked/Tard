import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffffff" },
    secondary: { main: "#888888" },
    background: { default: "#000000", paper: "#0a0a0a" },
    text: { primary: "#f5f5f5", secondary: "#888888" },
    divider: "rgba(255,255,255,0.06)",
  },
  typography: {
    fontFamily: '"Bricolage Grotesque Variable", sans-serif',
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 800, letterSpacing: -0.5 },
    h3: { fontWeight: 700, letterSpacing: -0.3 },
    h4: { fontWeight: 700, letterSpacing: -0.3 },
    h5: { fontWeight: 600, letterSpacing: -0.2 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
    body2: { color: "#888888" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { fontWeight: 700, padding: "10px 28px", borderRadius: 8 },
        contained: {
          backgroundColor: "#ffffff",
          color: "#000000",
          "&:hover": { backgroundColor: "#cccccc" },
        },
        outlined: { borderColor: "rgba(255,255,255,0.12)" },
      },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          borderColor: "rgba(255,255,255,0.06)",
          background: "#0a0a0a",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Bricolage Grotesque Variable", sans-serif',
          backgroundColor: "#000000",
        },
      },
    },
  },
});

export default theme;

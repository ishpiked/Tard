import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6366f1" },
    secondary: { main: "#a78bfa" },
    background: { default: "#06080a", paper: "#0d0f12" },
    text: { primary: "#f1f5f9", secondary: "#94a3b8" },
    divider: "rgba(255,255,255,0.06)",
  },
  typography: {
    fontFamily: '"Bricolage Grotesque Variable", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
    body2: { color: "#94a3b8" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { fontWeight: 700, padding: "10px 28px", borderRadius: 10 },
        contained: { boxShadow: "none" },
        outlined: { borderColor: "rgba(255,255,255,0.12)" },
      },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: {
        root: {
          borderColor: "rgba(255,255,255,0.06)",
          background: "#0d0f12",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Bricolage Grotesque Variable", sans-serif',
          backgroundColor: "#06080a",
        },
      },
    },
  },
});

export default theme;

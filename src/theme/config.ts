import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1e293b" },
    secondary: { main: "#6366f1" },
    background: { default: "#f8fafc", paper: "#ffffff" },
    text: { primary: "#1e293b", secondary: "#64748b" },
  },
  typography: {
    fontFamily: '"Bricolage Grotesque Variable", sans-serif',
    h1: { fontWeight: 800 },
    button: { fontWeight: 600, textTransform: "none" },
    body2: { color: "#64748b" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { fontWeight: 700, padding: "12px 32px" },
        contained: { boxShadow: "none" },
      },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily: '"Bricolage Grotesque Variable", sans-serif' },
      },
    },
  },
});

export default theme;

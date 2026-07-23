import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function Header() {
  return (
    <Box component="header" sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
            tard
          </Typography>
          <Button variant="contained" endIcon={<KeyboardArrowRight />}>
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

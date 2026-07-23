import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          You ask a question. It goes and finds the answer.
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 3, maxWidth: 480 }}>
          Tard searches the web, reads through pages, and comes back with
          something useful. That&apos;s it.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Try It</Button>
          <Button variant="outlined">How It Works</Button>
        </Stack>
      </Container>
    </Box>
  );
}

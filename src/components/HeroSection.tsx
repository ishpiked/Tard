import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DemoCard from "./DemoCard";

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flex: 1, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, lineHeight: 1.1, mb: 3 }}>
              One query.
              <br />
              One answer.
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 4, fontSize: "1.125rem", maxWidth: 500 }}>
              Ask anything. Tard searches the web, scrapes full content from
              articles and Reddit, then turns it all into one clear answer.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" size="large" endIcon={<KeyboardArrowRight />}>
                Try It Now
              </Button>
              <Button variant="outlined" size="large">
                Learn More
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <DemoCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import WebIcon from "@mui/icons-material/Web";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const features = [
  { icon: <SearchIcon />, title: "Web Search", desc: "Searches the web for relevant sources on any topic." },
  { icon: <WebIcon />, title: "Deep Scraping", desc: "Pulls full article and Reddit content, not just snippets." },
  { icon: <AutoAwesomeIcon />, title: "AI Synthesis", desc: "Synthesises everything into one concise, readable answer." },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 700, mb: 8 }}>
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {features.map((f) => (
            <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "secondary.main", fontSize: 28, mb: 1.5 }}>
                    {f.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2">
                    {f.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

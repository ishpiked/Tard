import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SummarizeIcon from "@mui/icons-material/Summarize";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const features = [
  { icon: <SearchIcon />, title: "Web Search", desc: "Searches the web for relevant pages on any topic." },
  { icon: <AutoStoriesIcon />, title: "Full Content", desc: "Reads entire articles and discussions, not just snippets." },
  { icon: <SummarizeIcon />, title: "One Answer", desc: "Puts everything together into a single coherent answer." },
];

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              tard
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Button color="inherit" sx={{ fontWeight: 600 }}>Docs</Button>
              <Button variant="contained" disableElevation>Get Started</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.06 }}
            priority
          />
        </Box>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 14 } }}>
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.1, fontSize: { xs: "2rem", md: "3.5rem" } }}>
                Ask something.
                <br />
                It finds the answer.
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 4, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480 }}>
                Give it any question. Tard searches the web, reads through
                articles and discussions, and puts together a proper answer
                with sources.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" disableElevation endIcon={<KeyboardArrowRight />}>Try It</Button>
                <Button variant="outlined" size="large">How It Works</Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", boxShadow: 8 }}>
                <Image
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
                  alt=""
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3, background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
                  <Typography sx={{ color: "white", fontFamily: "monospace", fontSize: "0.8rem", opacity: 0.5, mb: 0.5 }}>
                    $ curl https://tard.dev/search?q=current+state+of+fusion+energy
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "0.9rem", fontWeight: 600 }}>
                    &ldquo;Fusion energy research is progressing on multiple fronts&hellip;&rdquo;
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center", mb: 6 }}>
            How it works
          </Typography>
          <Grid container spacing={4}>
            {features.map((f) => (
              <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: "100%", transition: "box-shadow 0.2s", "&:hover": { boxShadow: 4 } }}>
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ color: "secondary.main", mb: 2, fontSize: 32 }}>{f.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{f.title}</Typography>
                    <Typography variant="body2">{f.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 5, textAlign: "center" }}>
            What people use it for
          </Typography>
          <Grid container spacing={2}>
            {[
              "Compare Notion vs Obsidian features",
              "Debug a Next.js build error",
              "Current state of AI video generation",
              "Transformer architecture explained",
              "What happened with SVB collapse",
              "Go vs Rust for backend",
              "Best budget mechanical keyboards",
            ].map((q) => (
              <Grid key={q} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ p: 2.5, border: 1, borderColor: "divider", borderRadius: 2, height: "100%", bgcolor: "background.paper" }}>
                  <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary" }}>
                    &ldquo;{q}&rdquo;
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                API
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 3 }}>
                One endpoint. Returns the answer with source citations.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "monospace", fontWeight: 600, mb: 0.5 }}>
                GET /search?q=&lt;query&gt;
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                Include your question as the query parameter. Response includes
                the answer, per-source summaries, and metadata.
              </Typography>
              <Button variant="contained" disableElevation endIcon={<KeyboardArrowRight />}>
                Read Docs
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ bgcolor: "grey.900", color: "grey.100", borderRadius: 2, p: 3, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 2, overflowX: "auto", boxShadow: 4 }}>
                <Box sx={{ color: "grey.500" }}>$ curl https://tard.dev/search?q=what+is+fusion+energy</Box>
                <Box sx={{ mt: 1 }}>
                  <Box sx={{ color: "grey.500" }}># response:</Box>
                  <Box>{`{`}</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "info.light" }}>&quot;query&quot;</Box>: <Box component="span" sx={{ color: "success.light" }}>&quot;what is fusion energy&quot;</Box>,</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "info.light" }}>&quot;sources_discovered&quot;</Box>: 3,</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "info.light" }}>&quot;per_source_summaries&quot;</Box>: [&hellip;],</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "info.light" }}>&quot;answer&quot;</Box>: <Box component="span" sx={{ color: "success.light" }}>&quot;Fusion energy research is progressing on multiple fronts&hellip;&quot;</Box></Box>
                  <Box>{`}`}</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Try it out.
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 4 }}>
            Got a question? See what comes back.
          </Typography>
          <Button variant="contained" size="large" disableElevation endIcon={<KeyboardArrowRight />}>
            Start Searching
          </Button>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>tard</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>&copy; {new Date().getFullYear()}</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

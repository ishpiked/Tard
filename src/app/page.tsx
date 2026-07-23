import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              tard
            </Typography>
            <Button variant="contained">Get Started</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.15, maxWidth: 700 }}>
            Ask something. It goes through the web and comes back with one answer.
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 550, fontSize: "1rem", lineHeight: 1.7 }}>
            Give it any question. It searches, reads through articles and discussions,
            and puts together a proper answer with sources.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">Try It</Button>
            <Button variant="outlined" size="large">How It Works</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            What people use it for
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 2.2 }}>
            — &quot;what are the latest features in Notion vs Obsidian&quot; — comparison instead of 10 tabs<br />
            — &quot;why is my Next.js build failing with this error&quot; — scrapes SO, GitHub, blogs into one answer<br />
            — &quot;what&apos;s the state of AI video generation&quot; — news, blogs, discussions<br />
            — &quot;explain the transformer architecture with current research&quot; — arXiv, blogs, tutorials<br />
            — &quot;what actually happened with the SVB collapse&quot; — reporting across outlets<br />
            — &quot;what do people think about Go vs Rust for backend&quot; — blogs, discussions<br />
            — &quot;best budget mechanical keyboards&quot; — reviews across multiple sites
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            API
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            One endpoint: <Box component="code" sx={{ bgcolor: "grey.100", px: 0.5, py: 0.2, borderRadius: 0.5, fontFamily: "monospace", fontSize: "0.85rem" }}>GET /search?q=your+query</Box>.
            Returns the answer, per-source summaries, and counts.
          </Typography>
          <Box sx={{ bgcolor: "grey.900", color: "grey.100", borderRadius: 2, p: 2.5, fontFamily: "monospace", fontSize: "0.85rem", lineHeight: 2, overflowX: "auto" }}>
            <Box>curl &quot;https://tard.dev/search?q=what+is+fusion+energy&quot;</Box>
            <Box sx={{ mt: 1 }}>
              <Box sx={{ color: "grey.500" }}># response:</Box>
              <Box>{`{`}</Box>
              <Box>&nbsp;&nbsp;&quot;query&quot;: &quot;what is fusion energy&quot;,</Box>
              <Box>&nbsp;&nbsp;&quot;sources_discovered&quot;: 3,</Box>
              <Box>&nbsp;&nbsp;&quot;sources_scraped&quot;: 3,</Box>
              <Box>&nbsp;&nbsp;&quot;sources_summarized&quot;: 3,</Box>
              <Box>&nbsp;&nbsp;&quot;per_source_summaries&quot;: [{`{`}&quot;title&quot;: &quot;...&quot;, &quot;url&quot;: &quot;...&quot;, &quot;summary&quot;: &quot;...&quot;{`}`}],</Box>
              <Box>&nbsp;&nbsp;&quot;answer&quot;: &quot;Fusion energy research is progressing on multiple fronts...&quot;</Box>
              <Box>{`}`}</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
              tard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              &copy; {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

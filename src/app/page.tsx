"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10, bgcolor: "rgba(0,0,0,0.8)" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              tard
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Button component={Link} href="/docs" color="inherit" sx={{ fontWeight: 600, px: 2 }}>Docs</Button>
              <Button component={Link} href="/search" variant="contained" sx={{ fontWeight: 600 }}>Get Started</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.25rem" }, lineHeight: 1.1, mb: 2, letterSpacing: -1 }}>
              Ask a question.
              <br />
              Get a real answer.
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5, fontSize: "1rem", lineHeight: 1.7, maxWidth: 460 }}>
              Tard searches the web, reads through articles and discussions,
              and returns one coherent answer with sources. No link spam, no fluff.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button component={Link} href="/search" variant="contained" size="large">Try It</Button>
              <Button variant="outlined" size="large">How It Works</Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ bgcolor: "#0a0a0a", border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, p: 3, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 2 }}>
              <Box sx={{ color: "#555555", mb: 0.5, fontSize: "0.75rem" }}>$ curl https://tard.dev/search?q=current+state+of+fusion+energy</Box>
              <Box sx={{ mt: 1.5 }}>
                <Box sx={{ color: "#555555", fontSize: "0.75rem", mb: 0.5 }}># response:</Box>
                <Box><Box component="span" sx={{ color: "#888888" }}>{`{`}</Box></Box>
                <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;query&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;current state of fusion energy&quot;</Box>,</Box>
                <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;sources_discovered&quot;</Box>: <Box component="span" sx={{ color: "#ffffff" }}>3</Box>,</Box>
                <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;sources_scraped&quot;</Box>: <Box component="span" sx={{ color: "#ffffff" }}>3</Box>,</Box>
                <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;answer&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;Fusion energy research is progressing on multiple fronts...&quot;</Box></Box>
                <Box><Box component="span" sx={{ color: "#888888" }}>{`}`}</Box></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ borderTop: 1, borderColor: "divider", py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: "#666666", fontWeight: 600, mb: 1, textAlign: "center", display: "block", letterSpacing: 1 }}>
            How it works
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center", mb: 8, maxWidth: 500, mx: "auto" }}>
            Three steps from question to answer.
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, height: "100%", bgcolor: "#0a0a0a", transition: "all 0.15s ease", "&:hover": { borderColor: "rgba(255,255,255,0.15)" } }}>
                <Box sx={{ color: "#888888", fontSize: "0.75rem", fontWeight: 600, mb: 1.5, letterSpacing: 1 }}>STEP 1</Box>
                <Typography variant="h6" sx={{ mb: 1 }}>Search the web</Typography>
                <Typography variant="body2">Expands your question and searches across multiple sources. Deduplicates by domain so you get variety, not spam.</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, height: "100%", bgcolor: "#0a0a0a", transition: "all 0.15s ease", "&:hover": { borderColor: "rgba(255,255,255,0.15)" } }}>
                <Box sx={{ color: "#888888", fontSize: "0.75rem", fontWeight: 600, mb: 1.5, letterSpacing: 1 }}>STEP 2</Box>
                <Typography variant="h6" sx={{ mb: 1 }}>Read everything</Typography>
                <Typography variant="body2">Fetches every result and strips out the noise. No cookie banners, no nav bars, no &quot;subscribe now&quot; paragraphs.</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, height: "100%", bgcolor: "#0a0a0a", transition: "all 0.15s ease", "&:hover": { borderColor: "rgba(255,255,255,0.15)" } }}>
                <Box sx={{ color: "#888888", fontSize: "0.75rem", fontWeight: 600, mb: 1.5, letterSpacing: 1 }}>STEP 3</Box>
                <Typography variant="h6" sx={{ mb: 1 }}>Get one answer</Typography>
                <Typography variant="body2">Every source is summarized, then combined into a single answer with facts, citations, and any conflicting info noted.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: "#666666", fontWeight: 600, mb: 1, display: "block", letterSpacing: 1 }}>
                API
              </Typography>
              <Typography variant="h3" sx={{ mb: 2, letterSpacing: -0.5 }}>
                One endpoint.
                <br />
                One response.
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}>
                Send your question as a query parameter. Get back a synthesized
                answer with per-source summaries and metadata.
              </Typography>
              <Button component={Link} href="/docs" variant="contained">Read the Docs</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ bgcolor: "#0a0a0a", border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, p: 3, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 2 }}>
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", border: 1, borderColor: "rgba(255,255,255,0.15)" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", border: 1, borderColor: "rgba(255,255,255,0.15)" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", border: 1, borderColor: "rgba(255,255,255,0.15)" }} />
                </Box>
                <Box sx={{ color: "#555555", fontSize: "0.75rem" }}>$ curl https://tard.dev/search\</Box>
                <Box sx={{ color: "#555555", fontSize: "0.75rem" }}>&nbsp;&nbsp;-q what+is+the+current+state+of+fusion+energy</Box>
                <Box sx={{ mt: 2 }}>
                  <Box><Box component="span" sx={{ color: "#888888" }}>{`{`}</Box></Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;query&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;what is the current state of fusion energy&quot;</Box>,</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;sources_discovered&quot;</Box>: <Box component="span" sx={{ color: "#ffffff" }}>3</Box>,</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;sources_scraped&quot;</Box>: <Box component="span" sx={{ color: "#ffffff" }}>3</Box>,</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;sources_summarized&quot;</Box>: <Box component="span" sx={{ color: "#ffffff" }}>3</Box>,</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;per_source_summaries&quot;</Box>: [</Box>
                  <Box>&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: "#888888" }}>{`{`}</Box></Box>
                  <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;title&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;Fusion Energy Report 2025&quot;</Box>,</Box>
                  <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;url&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;https://example.com/fusion&quot;</Box>,</Box>
                  <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;summary&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;TITLE: Fusion Energy Report 2025...&quot;</Box></Box>
                  <Box>&nbsp;&nbsp;&nbsp;&nbsp;<Box component="span" sx={{ color: "#888888" }}>{`}`}</Box>,</Box>
                  <Box>&nbsp;&nbsp;],</Box>
                  <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;answer&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;Fusion energy research is progressing on multiple fronts. The ITER project in France aims to demonstrate net energy gain by 2035, while private companies are pursuing compact tokamak and stellarator designs. Recent breakthroughs in high-temperature superconductors have accelerated development timelines.&quot;</Box></Box>
                  <Box><Box component="span" sx={{ color: "#888888" }}>{`}`}</Box></Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ mb: 2, letterSpacing: -0.5 }}>
            Try it out.
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 5 }}>
            Got a question? See what comes back.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Button component={Link} href="/search" variant="contained" size="large">Start Searching</Button>
            <Button component={Link} href="/docs" variant="outlined" size="large">Documentation</Button>
          </Stack>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 5, borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 800, letterSpacing: -0.5 }}>tard</Typography>
            <Typography variant="body2" sx={{ color: "#555555" }}>&copy; {new Date().getFullYear()}</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

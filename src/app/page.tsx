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
            and puts together a proper answer with sources. No link spam, just what
            you asked for.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">Try It</Button>
            <Button variant="outlined" size="large">How It Works</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            How it works
          </Typography>
          <Stack spacing={4}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Searches properly
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Expands your question into different angles and searches Bing with a Startpage fallback.
                Deduplicates by domain so you get actual variety.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Reads everything it finds
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Fetches each result and strips out the noise — nav bars, cookie banners, ads.
                Articles get 15+ CSS selectors, JSON-LD, meta extraction. Reddit goes through
                a 4-layer fallback chain to get the content even when blocked. Share links
                get resolved automatically.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Summarizes each source
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Every source gets processed by Groq&apos;s LLaMA 3.3 70B. If it hits rate limits
                it falls through to Cerebras, then OpenRouter. Never just fails.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Combines it all into one answer
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                Takes all the per-source summaries and produces a final answer with facts, data,
                source citations, and flags any contradictions or uncertainty.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            What people use it for
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 2 }}>
            — &quot;what are the latest features in Notion vs Obsidian&quot; — comparison with citations instead of 10 tabs<br />
            — &quot;why is my Next.js build failing with this error&quot; — scrapes SO, GitHub, blogs, Reddit into one answer<br />
            — &quot;what&apos;s the state of AI video generation in 2026&quot; — tech blogs, news, Reddit, product launches<br />
            — &quot;explain the transformer architecture with current research&quot; — arXiv, blogs, tutorials<br />
            — &quot;what actually happened with SVB collapse&quot; — aggregates reporting across outlets<br />
            — &quot;what do people think about Go vs Rust for backend&quot; — blogs, Reddit, HN, comparisons<br />
            — &quot;best budget mechanical keyboards 2026&quot; — reviews and discussions across sites
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Technical details
          </Typography>
          <Box component="ul" sx={{ color: "text.secondary", lineHeight: 2.4, pl: 2 }}>
            <li>LLM fallback chain: Groq &rarr; Cerebras &rarr; OpenRouter — survives rate limits</li>
            <li>Reddit share links (/s/) get resolved to the actual post</li>
            <li>Filters out noise: no cookie banners, nav bars, &quot;subscribe now&quot; sections</li>
            <li>One result per domain per query max</li>
            <li>No YouTube results (text only)</li>
            <li>Returns title, author, date, source domain for each source</li>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            API
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            One endpoint: <Box component="code" sx={{ bgcolor: "grey.100", px: 0.5, py: 0.2, borderRadius: 0.5, fontFamily: "monospace", fontSize: "0.85rem" }}>GET /search?q=your+query</Box>.
            Returns the answer, per-source summaries (title/url/summary), and counts.
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

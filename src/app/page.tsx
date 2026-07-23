import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const useCases = [
  { use: "Competitive research", how: "Ask \"what are the latest features in Notion vs Obsidian\" — get a synthesized comparison with source citations, not 10 tabs to read" },
  { use: "Technical debugging", how: "Ask \"why is my Next.js build failing with this error\" — it scrapes Stack Overflow threads, GitHub issues, blog posts, and Reddit discussions into one answer" },
  { use: "Market/industry analysis", how: "Ask \"what's the state of AI video generation in 2026\" — it pulls from tech blogs, news articles, Reddit discussions, and product launch posts" },
  { use: "Academic literature review", how: "Ask \"explain the transformer architecture to me with current research\" — scrapes arXiv, blog explainers, and tutorial pages" },
  { use: "News deep dives", how: "Ask \"what actually happened with the Silicon Valley Bank collapse\" — aggregates reporting, analysis, and discussion from multiple outlets" },
  { use: "Opinion synthesis", how: "Ask \"what do people think about Go vs Rust for backend\" — summarizes technical blogs, Reddit threads, HN comments, and comparison articles" },
  { use: "Product research", how: "Ask \"best budget mechanical keyboards 2026\" — extracts and compares review content across multiple review sites and discussion threads" },
];

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              TARD SEARCH
            </Typography>
            <Button variant="contained">Get Started</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ color: "secondary.main", fontWeight: 600, mb: 1, letterSpacing: 1 }}>
            TARD SEARCH
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.15 }}>
            One query. The whole web.
            <br />
            A synthesized answer.
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 5, maxWidth: 600, fontSize: "1rem", lineHeight: 1.7 }}>
            TardSearch is a deep research API that doesn&apos;t just return links — it reads the content
            behind every link, summarizes each source individually, and synthesizes everything
            into a single coherent answer. You ask a question, it does the digging.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">Try It</Button>
            <Button variant="outlined" size="large">How It Works</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 5 }}>
            How it works
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
                  01. Deep search
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  Your query is expanded into multiple angles and searched across the web (Bing + Startpage fallback).
                  Results are deduplicated by domain so you get breadth, not spam.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
                  02. Full content extraction
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  Every result is fetched and scraped. Articles go through 15+ CSS selectors, JSON-LD parsing, meta
                  extraction, and noise filtering. Reddit posts fall through a 4-layer fetch chain (PullPush API &rarr;
                  Redlib mirrors &rarr; Old Reddit &rarr; AllOrigins proxy) to bypass blocks. Share links (/s/) are
                  resolved automatically.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
                  03. Individual source summaries
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  Each source is processed independently by Groq&apos;s LLaMA 3.3 70B (with automatic fallback through
                  Cerebras and OpenRouter models).
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
                  04. Synthesis
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  All per-source summaries are combined and the LLM produces a final answer with specific facts, data,
                  and source citations, noting any uncertainty or conflicting information.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 5 }}>
            What you can use it for
          </Typography>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, width: "30%" }}>Use Case</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>How It Helps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {useCases.map((uc) => (
                  <TableRow key={uc.use}>
                    <TableCell sx={{ fontWeight: 600, verticalAlign: "top" }}>{uc.use}</TableCell>
                    <TableCell sx={{ color: "text.secondary", verticalAlign: "top" }}>{uc.how}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Key technical features
          </Typography>
          <Box component="ul" sx={{ color: "text.secondary", lineHeight: 2.2, pl: 2 }}>
            <li>Multi-model LLM fallback: Groq &rarr; Cerebras &rarr; OpenRouter (never fails on rate limits)</li>
            <li>Automatic share link resolution (reddit.com/r/sub/s/token &rarr; canonical post)</li>
            <li>Aggressive content extraction with noise filtering (no &quot;subscribe now&quot; paragraphs, no cookie banners, no nav)</li>
            <li>Source deduplication by domain — one result per domain per query</li>
            <li>YouTube results automatically excluded (text research only)</li>
            <li>Per-source metadata: title, author, date, description, source domain</li>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            API
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            Single endpoint &mdash; <Box component="code" sx={{ bgcolor: "grey.100", px: 0.5, py: 0.2, borderRadius: 0.5, fontFamily: "monospace", fontSize: "0.85rem" }}>GET /search?q=your+query</Box>.
            Response includes <Box component="code" sx={{ bgcolor: "grey.100", px: 0.5, py: 0.2, borderRadius: 0.5, fontFamily: "monospace" }}>answer</Box> (synthesized text),
            <Box component="code" sx={{ bgcolor: "grey.100", px: 0.5, py: 0.2, borderRadius: 0.5, fontFamily: "monospace" }}>per_source_summaries</Box> (array of title/url/summary),
            and counts for sources discovered, scraped, and summarized.
          </Typography>
          <Box sx={{ bgcolor: "grey.900", color: "grey.100", borderRadius: 2, p: 2.5, fontFamily: "monospace", fontSize: "0.85rem", lineHeight: 2, overflowX: "auto" }}>
            <Box>curl &quot;https://tard.dev/search?q=what+is+the+current+state+of+fusion+energy&quot;</Box>
            <Box sx={{ mt: 1 }}>
              <Box sx={{ color: "grey.500" }}># returns:</Box>
              <Box>{`{`}</Box>
              <Box>&nbsp;&nbsp;&quot;query&quot;: &quot;what is the current state of fusion energy&quot;,</Box>
              <Box>&nbsp;&nbsp;&quot;sources_discovered&quot;: 3,</Box>
              <Box>&nbsp;&nbsp;&quot;sources_scraped&quot;: 3,</Box>
              <Box>&nbsp;&nbsp;&quot;sources_summarized&quot;: 3,</Box>
              <Box>&nbsp;&nbsp;&quot;per_source_summaries&quot;: [</Box>
              <Box>&nbsp;&nbsp;&nbsp;&nbsp;{`{`}</Box>
              <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;title&quot;: &quot;Fusion Energy Report 2025&quot;,</Box>
              <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;: &quot;https://example.com/fusion&quot;,</Box>
              <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;summary&quot;: &quot;TITLE: Fusion Energy Report 2025\nSOURCE: example.com\n\nThe ITER project...&quot;</Box>
              <Box>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</Box>
              <Box>&nbsp;&nbsp;],</Box>
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
              TARD SEARCH
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

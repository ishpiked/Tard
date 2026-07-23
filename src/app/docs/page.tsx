"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `TardSearch is a deep research API. You send a question, it searches the web, reads the content behind every link, and returns one synthesized answer with sources.`,
  },
  {
    id: "endpoint",
    title: "Endpoint",
    content: null,
    code: `GET /search?q=<query>`,
  },
  {
    id: "parameters",
    title: "Parameters",
    content: null,
    table: [
      { param: "q", type: "string", required: "Yes", description: "Your question or search query. URL-encoded." },
    ],
  },
  {
    id: "example",
    title: "Example",
    content: null,
    codeBlock: `$ curl "https://tard.dev/search?q=what+is+the+current+state+of+fusion+energy"

{
  "query": "what is the current state of fusion energy",
  "sources_discovered": 3,
  "sources_scraped": 3,
  "sources_summarized": 3,
  "per_source_summaries": [
    {
      "title": "Fusion Energy Report 2025",
      "url": "https://example.com/fusion",
      "summary": "TITLE: Fusion Energy Report 2025..."
    }
  ],
  "answer": "Fusion energy research is progressing on multiple fronts. The ITER project in France aims to demonstrate net energy gain by 2035, while private companies are pursuing compact tokamak and stellarator designs. Recent breakthroughs in high-temperature superconductors have accelerated development timelines."
}`,
  },
  {
    id: "response",
    title: "Response Fields",
    content: null,
    table: [
      { param: "query", type: "string", required: null, description: "The original query sent." },
      { param: "sources_discovered", type: "number", required: null, description: "How many sources were found during search." },
      { param: "sources_scraped", type: "number", required: null, description: "How many sources were successfully scraped." },
      { param: "sources_summarized", type: "number", required: null, description: "How many sources were summarized." },
      { param: "per_source_summaries", type: "array", required: null, description: "Array of objects with title, url, and summary for each source." },
      { param: "answer", type: "string", required: null, description: "The synthesized answer with facts, citations, and source references." },
    ],
  },
  {
    id: "errors",
    title: "Errors",
    content: null,
    table: [
      { param: "400", type: null, required: null, description: "Bad request — missing or invalid query parameter." },
      { param: "429", type: null, required: null, description: "Rate limit exceeded. Slow down and retry." },
      { param: "500", type: null, required: null, description: "Internal error. Something went wrong on our end." },
    ],
  },
  {
    id: "limits",
    title: "Rate Limits",
    content: `Rate limits apply per API key. If you hit a 429 response, wait before sending another request. Contact us if you need higher limits.`,
  },
];

function Table({ data }: { data: { param: string; type: string | null; required: string | null; description: string }[] }) {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
        <Box component="thead">
          <Box component="tr" sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.06)" }}>
            {["Parameter", "Type", "Required", "Description"].map((h) => (
              <Box key={h} component="th" sx={{ textAlign: "left", py: 1.5, px: 1.5, color: "text.secondary", fontWeight: 600, fontSize: "0.8rem", letterSpacing: 0.5 }}>
                {h}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {data.map((row) => (
            <Box key={row.param} component="tr" sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.04)" }}>
              <Box component="td" sx={{ py: 1.5, px: 1.5, fontFamily: "monospace", fontSize: "0.8rem", color: "primary.main" }}>{row.param}</Box>
              <Box component="td" sx={{ py: 1.5, px: 1.5, color: "text.secondary", fontSize: "0.8rem" }}>{row.type || "-"}</Box>
              <Box component="td" sx={{ py: 1.5, px: 1.5, color: "text.secondary", fontSize: "0.8rem" }}>{row.required || "-"}</Box>
              <Box component="td" sx={{ py: 1.5, px: 1.5, color: "text.secondary", fontSize: "0.8rem" }}>{row.description}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function Docs() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Typography component={Link} href="/" sx={{ fontWeight: 800, letterSpacing: -0.5, textDecoration: "none", color: "inherit" }}>
                tard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>/ docs</Typography>
            </Stack>
            <Button component={Link} href="/" variant="outlined" size="small" sx={{ fontWeight: 600 }}>
              Back to Home
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Stack direction="row" spacing={6}>
          <Box component="nav" sx={{ width: 220, flexShrink: 0, display: { xs: "none", md: "block" }, position: "sticky", top: 24, alignSelf: "flex-start" }}>
            <Stack spacing={1}>
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      py: 0.5,
                      color: "text.secondary",
                      "&:hover": { color: "primary.main" },
                      transition: "color 0.15s",
                    }}
                  >
                    {s.title}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: 1, maxWidth: 720 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, letterSpacing: -0.5 }}>
              Documentation
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 6 }}>
              Everything you need to use the Tard Search API.
            </Typography>

            {sections.map((s) => (
              <Box key={s.id} id={s.id} sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {s.title}
                </Typography>

                {s.content && (
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2 }}>
                    {s.content}
                  </Typography>
                )}

                {s.code && (
                  <Box sx={{ bgcolor: "#0d0f12", border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, p: 2.5, fontFamily: "monospace", fontSize: "0.85rem", overflowX: "auto" }}>
                    {s.code}
                  </Box>
                )}

                {s.codeBlock && (
                  <Box sx={{ bgcolor: "#0d0f12", border: 1, borderColor: "rgba(255,255,255,0.06)", borderRadius: 2, p: 2.5, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.8, overflowX: "auto", whiteSpace: "pre" }}>
                    {s.codeBlock}
                  </Box>
                )}

                {s.table && <Table data={s.table} />}
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>

      <Box component="footer" sx={{ py: 5, borderTop: 1, borderColor: "divider", mt: "auto" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 800, letterSpacing: -0.5 }}>tard</Typography>
            <Typography variant="body2">&copy; {new Date().getFullYear()}</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

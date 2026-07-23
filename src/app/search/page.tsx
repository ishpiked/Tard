"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import OpenInNew from "@mui/icons-material/OpenInNew";
import SearchIcon from "@mui/icons-material/Search";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://tard.dev";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResults(null);
    try {
      const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        if (res.status === 429) throw new Error("Rate limited. Wait a moment and try again.");
        throw new Error(`API error (${res.status})`);
      }
      const data = await res.json();
      setResults(data);
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="header" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Typography component={Link} href="/" sx={{ fontWeight: 800, letterSpacing: -0.5, textDecoration: "none", color: "inherit" }}>
                tard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>/ search</Typography>
            </Stack>
            <Button component={Link} href="/docs" color="inherit" sx={{ fontWeight: 600, px: 2 }}>
              Docs
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: "center", letterSpacing: -0.5 }}>
            Ask anything.
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Box
              component="input"
              placeholder="e.g. what is the current state of fusion energy"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                flex: 1,
                bgcolor: "#0d0f12",
                border: 1,
                borderColor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                px: 2.5,
                py: 1.8,
                fontSize: "0.95rem",
                color: "inherit",
                outline: "none",
                fontFamily: "inherit",
                "&:focus": { borderColor: "primary.main" },
                "&::placeholder": { color: "#64748b" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              sx={{ px: 3, minWidth: 100, fontWeight: 600 }}
            >
              {loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Search"}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ flex: 1, py: 6 }}>
        <Container maxWidth="md">
          {error && (
            <Box sx={{ p: 3, border: 1, borderColor: "error.main", borderRadius: 2, bgcolor: "rgba(239,68,68,0.05)" }}>
              <Typography sx={{ color: "error.main", fontWeight: 600 }}>{error}</Typography>
            </Box>
          )}

          {loading && (
            <Stack spacing={3}>
              <Box sx={{ height: 20, width: "60%", bgcolor: "rgba(255,255,255,0.04)", borderRadius: 1, animation: "pulse 2s infinite" }} />
              <Box sx={{ height: 80, width: "100%", bgcolor: "rgba(255,255,255,0.04)", borderRadius: 1, animation: "pulse 2s infinite" }} />
              <Box sx={{ height: 14, width: "40%", bgcolor: "rgba(255,255,255,0.04)", borderRadius: 1, animation: "pulse 2s infinite" }} />
              <Box sx={{ height: 12, width: "90%", bgcolor: "rgba(255,255,255,0.04)", borderRadius: 1, animation: "pulse 2s infinite" }} />
              <Box sx={{ height: 12, width: "75%", bgcolor: "rgba(255,255,255,0.04)", borderRadius: 1, animation: "pulse 2s infinite" }} />
              <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
            </Stack>
          )}

          {results && !loading && (
            <Stack spacing={5}>
              <Box>
                <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main" }}>{results.sources_discovered}</Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>discovered</Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main" }}>{results.sources_scraped}</Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>scraped</Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main" }}>{results.sources_summarized}</Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>summarized</Typography>
                  </Box>
                </Stack>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    lineHeight: 1.6,
                    color: "text.primary",
                  }}
                >
                  {results.answer}
                </Typography>
              </Box>

              {results.per_source_summaries && results.per_source_summaries.length > 0 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Sources
                  </Typography>
                  <Stack spacing={2}>
                    {results.per_source_summaries.map((s: any, i: number) => (
                      <Box
                        key={i}
                        sx={{
                          p: 2.5,
                          border: 1,
                          borderColor: "rgba(255,255,255,0.06)",
                          borderRadius: 2,
                        }}
                      >
                        <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between", mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {s.title || "Untitled"}
                          </Typography>
                          {s.url && (
                            <Button
                              component="a"
                              href={s.url}
                              target="_blank"
                              size="small"
                              endIcon={<OpenInNew sx={{ fontSize: 14 }} />}
                              sx={{ fontSize: "0.75rem", minWidth: 0, py: 0, flexShrink: 0 }}
                            >
                              Visit
                            </Button>
                          )}
                        </Stack>
                        {s.url && (
                          <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1, fontFamily: "monospace", fontSize: "0.7rem" }}>
                            {s.url}
                          </Typography>
                        )}
                        {s.summary && (
                          <Typography variant="body2" sx={{ color: "text.secondary", whiteSpace: "pre-wrap", fontSize: "0.8rem" }}>
                            {s.summary}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Stack>
          )}

          {!results && !loading && !error && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <SearchIcon sx={{ fontSize: 48, color: "rgba(255,255,255,0.08)", mb: 2 }} />
              <Typography sx={{ color: "text.secondary" }}>
                Type a question above and hit search.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 5, borderTop: 1, borderColor: "divider" }}>
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

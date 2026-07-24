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

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://tardie.vercel.app";

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
      <Box
        component="header"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: "rgba(0,0,0,0.8)",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 2 }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
              <Typography
                component={Link}
                href="/"
                sx={{ fontWeight: 800, letterSpacing: -0.5, textDecoration: "none", color: "inherit", fontSize: "1.25rem" }}
              >
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

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 1, textAlign: "center", letterSpacing: -0.5, fontSize: { xs: "1.75rem", md: "2.25rem" } }}
          >
            Ask anything.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center", mb: 4 }}>
            Get a synthesized answer with sources from across the web.
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
                bgcolor: "#0a0a0a",
                border: 1,
                borderColor: "rgba(255,255,255,0.1)",
                borderRadius: 1.5,
                px: 2.5,
                py: 1.8,
                fontSize: "0.95rem",
                color: "inherit",
                outline: "none",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                "&:focus": {
                  borderColor: "#ffffff",
                  boxShadow: "0 0 0 2px rgba(255,255,255,0.1)",
                  bgcolor: "#111111",
                },
                "&::placeholder": { color: "#555555" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              sx={{ px: 4, minWidth: 100, fontWeight: 600 }}
            >
              {loading ? <CircularProgress size={20} sx={{ color: "#000000" }} /> : "Search"}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ flex: 1, py: 6 }}>
        <Container maxWidth="md">
          {error && (
            <Box sx={{ p: 3, border: 1, borderColor: "rgba(255,255,255,0.1)", borderRadius: 1.5, bgcolor: "#0a0a0a" }}>
              <Typography sx={{ fontWeight: 600 }}>{error}</Typography>
            </Box>
          )}

          {loading && (
            <Stack spacing={3}>
              {[60, 100, 40, 90, 75].map((w, i) => (
                <Box
                  key={i}
                  sx={{
                    height: i === 1 ? 80 : i === 0 ? 20 : 12,
                    width: `${w}%`,
                    borderRadius: 1,
                    background: "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                  }}
                />
              ))}
            </Stack>
          )}

          {results && !loading && (
            <Stack spacing={6}>
              <Stack direction="row" spacing={2} sx={{ justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  { label: "Discovered", value: results.sources_discovered },
                  { label: "Scraped", value: results.sources_scraped },
                  { label: "Summarized", value: results.sources_summarized },
                ].map((stat, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      minWidth: 100,
                      maxWidth: 160,
                      textAlign: "center",
                      p: 2.5,
                      border: 1,
                      borderColor: "rgba(255,255,255,0.06)",
                      borderRadius: 1.5,
                      bgcolor: "#0a0a0a",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: 700, lineHeight: 1.1, mb: 0.5, color: "#ffffff" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#666666", textTransform: "uppercase", letterSpacing: 0.5, fontSize: "0.65rem", fontWeight: 500 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box
                sx={{
                  p: 3,
                  border: 1,
                  borderColor: "rgba(255,255,255,0.08)",
                  borderRadius: 1.5,
                  bgcolor: "#0a0a0a",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 450, lineHeight: 1.8, color: "#f5f5f5", fontSize: "1rem" }}>
                  {results.answer}
                </Typography>
              </Box>

              {results.per_source_summaries && results.per_source_summaries.length > 0 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, letterSpacing: -0.3, color: "#ffffff" }}>
                    Sources
                  </Typography>
                  <Stack spacing={1.5}>
                    {results.per_source_summaries.map((s: any, i: number) => (
                      <Box
                        key={i}
                        sx={{
                          p: 2.5,
                          border: 1,
                          borderColor: "rgba(255,255,255,0.06)",
                          borderRadius: 1.5,
                          bgcolor: "#0a0a0a",
                          transition: "all 0.15s ease",
                          "&:hover": {
                            borderColor: "rgba(255,255,255,0.12)",
                            bgcolor: "#0d0d0d",
                          },
                        }}
                      >
                        <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#f5f5f5" }}>
                            {s.title || "Untitled"}
                          </Typography>
                          {s.url && (
                            <Button
                              component="a"
                              href={s.url}
                              target="_blank"
                              size="small"
                              endIcon={<OpenInNew sx={{ fontSize: 14 }} />}
                              sx={{ fontSize: "0.75rem", minWidth: 0, py: 0, flexShrink: 0, ml: 2, color: "#888888" }}
                            >
                              Visit
                            </Button>
                          )}
                        </Stack>
                        {s.url && (
                          <Box
                            sx={{
                              display: "inline-block",
                              px: 1.2,
                              py: 0.3,
                              borderRadius: 0.5,
                              bgcolor: "rgba(255,255,255,0.04)",
                              mb: 1.5,
                              fontFamily: "monospace",
                              fontSize: "0.7rem",
                              color: "#666666",
                              maxWidth: "100%",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {s.url}
                          </Box>
                        )}
                        {s.summary && (
                          <Typography
                            variant="body2"
                            sx={{ color: "#888888", whiteSpace: "pre-wrap", fontSize: "0.8rem", lineHeight: 1.7 }}
                          >
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
            <Box sx={{ textAlign: "center", py: 12 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: 1,
                  borderColor: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2.5,
                }}
              >
                <SearchIcon sx={{ fontSize: 20, color: "#555555" }} />
              </Box>
              <Typography sx={{ color: "#888888", fontSize: "0.9rem" }}>
                Type a question above and hit search.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 5, borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 800, letterSpacing: -0.5, color: "#ffffff" }}>tard</Typography>
            <Typography variant="body2" sx={{ color: "#555555" }}>
              &copy; {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

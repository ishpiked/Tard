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
import ArticleIcon from "@mui/icons-material/Article";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

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
          bgcolor: "rgba(6,8,10,0.8)",
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
          py: { xs: 4, md: 6 },
          background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 60%)",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, textAlign: "center", letterSpacing: -0.5 }}>
            Ask anything.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center", mb: 3 }}>
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
                bgcolor: "rgba(255,255,255,0.03)",
                border: 1,
                borderColor: "rgba(255,255,255,0.08)",
                borderRadius: 2,
                px: 2.5,
                py: 1.8,
                fontSize: "0.95rem",
                color: "inherit",
                outline: "none",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
                "&:focus": {
                  borderColor: "primary.main",
                  boxShadow: "0 0 0 3px rgba(99,102,241,0.15)",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
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
            <Box sx={{ p: 3, border: 1, borderColor: "error.main", borderRadius: 2, bgcolor: "rgba(239,68,68,0.08)" }}>
              <Typography sx={{ color: "error.main", fontWeight: 600 }}>{error}</Typography>
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
                    background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)",
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
                  { label: "Discovered", value: results.sources_discovered, icon: <TravelExploreIcon sx={{ fontSize: 18 }} /> },
                  { label: "Scraped", value: results.sources_scraped, icon: <ArticleIcon sx={{ fontSize: 18 }} /> },
                  { label: "Summarized", value: results.sources_summarized, icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} /> },
                ].map((stat, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      maxWidth: 160,
                      textAlign: "center",
                      p: 2,
                      border: 1,
                      borderColor: "rgba(255,255,255,0.06)",
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.02)",
                      transition: "all 0.2s ease",
                      "&:hover": { borderColor: "rgba(99,102,241,0.3)", bgcolor: "rgba(99,102,241,0.04)" },
                    }}
                  >
                    <Box sx={{ color: "primary.main", mb: 0.5 }}>{stat.icon}</Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "primary.main", lineHeight: 1.2 }}>
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 0.5, fontSize: "0.65rem" }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box sx={{ position: "relative", pl: 3 }}>
                <Box sx={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, bgcolor: "primary.main", borderRadius: 1 }} />
                <Box
                  sx={{
                    p: 3,
                    border: 1,
                    borderColor: "rgba(99,102,241,0.15)",
                    borderRadius: 2,
                    bgcolor: "rgba(99,102,241,0.03)",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.8, color: "text.primary", fontSize: "1rem" }}>
                    {results.answer}
                  </Typography>
                </Box>
              </Box>

              {results.per_source_summaries && results.per_source_summaries.length > 0 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5, letterSpacing: -0.3 }}>
                    Sources ({results.per_source_summaries.length})
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
                          transition: "all 0.2s ease",
                          "&:hover": {
                            borderColor: "rgba(255,255,255,0.12)",
                            bgcolor: "rgba(255,255,255,0.015)",
                            transform: "translateY(-1px)",
                          },
                        }}
                      >
                        <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
                            {s.title || "Untitled"}
                          </Typography>
                          {s.url && (
                            <Button
                              component="a"
                              href={s.url}
                              target="_blank"
                              size="small"
                              endIcon={<OpenInNew sx={{ fontSize: 14 }} />}
                              sx={{ fontSize: "0.75rem", minWidth: 0, py: 0, flexShrink: 0, ml: 2 }}
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
                              borderRadius: 1,
                              bgcolor: "rgba(255,255,255,0.04)",
                              mb: 1.5,
                              fontFamily: "monospace",
                              fontSize: "0.7rem",
                              color: "text.secondary",
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
                            sx={{ color: "text.secondary", whiteSpace: "pre-wrap", fontSize: "0.8rem", lineHeight: 1.7 }}
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
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  bgcolor: "rgba(99,102,241,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <SearchIcon sx={{ fontSize: 28, color: "primary.main" }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: "text.primary" }}>
                Ready when you are
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
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
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              &copy; {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

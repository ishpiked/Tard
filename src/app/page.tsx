"use client";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const SOURCES = ["Reuters", "Nature", "Reddit r/fusion", "Bloomberg", "ArXiv"];

const FAKE_ANSWER =
  "Fusion energy research is advancing on multiple fronts. The ITER project in France aims to demonstrate net energy gain by 2035, while private companies like Commonwealth Fusion Systems and Helion are pursuing compact tokamak and pulsed inertial designs. Recent breakthroughs in high-temperature superconductors have accelerated magnet development, and several startups now target commercial reactors by the early 2030s.";

type Phase = "idle" | "searching" | "reading" | "synthesizing" | "done";

export default function Home() {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleSources, setVisibleSources] = useState(0);
  const [readSources, setReadSources] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phase === "searching") {
      const t1 = setTimeout(() => setVisibleSources(1), 400);
      const t2 = setTimeout(() => setVisibleSources(2), 800);
      const t3 = setTimeout(() => setVisibleSources(3), 1200);
      const t4 = setTimeout(() => setPhase("reading"), 1800);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }
    if (phase === "reading") {
      const t1 = setTimeout(() => setReadSources(1), 500);
      const t2 = setTimeout(() => setReadSources(2), 1000);
      const t3 = setTimeout(() => setReadSources(3), 1500);
      const t4 = setTimeout(() => setPhase("synthesizing"), 2200);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }
    if (phase === "synthesizing") {
      const t = setTimeout(() => setPhase("done"), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  function handleResearch() {
    if (!query.trim() || phase !== "idle") return;
    setPhase("searching");
    setVisibleSources(0);
    setReadSources(0);
  }

  function handleReset() {
    setPhase("idle");
    setVisibleSources(0);
    setReadSources(0);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#09090B" }}>
      <Box
        component="header"
        sx={{
          borderBottom: 1,
          borderColor: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: "rgba(9,9,11,0.8)",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", py: 1.5 }}>
            <Typography
              sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: "1.1rem", color: "#ffffff" }}
            >
              tard
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Button
                component="a"
                href="https://github.com/ishpiked/Tard"
                target="_blank"
                sx={{ color: "#888888", fontWeight: 500, px: 1.5, fontSize: "0.85rem", "&:hover": { color: "#f5f5f5" } }}
              >
                GitHub
              </Button>
              <Button
                component={Link}
                href="/docs"
                sx={{ color: "#888888", fontWeight: 500, px: 1.5, fontSize: "0.85rem", "&:hover": { color: "#f5f5f5" } }}
              >
                API
              </Button>
              <Button component={Link} href="/docs" variant="outlined" size="small" sx={{ ml: 1, fontWeight: 600, fontSize: "0.8rem" }}>
                Docs
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: -1.5,
                mb: 2,
                color: "#ffffff",
              }}
            >
              Research the web,
              <br />
              not just search it.
            </Typography>
            <Typography
              sx={{ color: "#888888", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6, mb: 5, maxWidth: 520 }}
            >
              Searches the web, reads articles and Reddit,
              then returns one concise answer.
            </Typography>

            {phase === "idle" && (
              <Box>
                <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
                  <Box
                    ref={inputRef}
                    component="input"
                    placeholder="Why is Nvidia worth so much?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleResearch(); }}
                    sx={{
                      flex: 1,
                      bgcolor: "rgba(255,255,255,0.03)",
                      border: 1,
                      borderColor: "rgba(255,255,255,0.08)",
                      borderRadius: 1.5,
                      px: 2.5,
                      py: 1.6,
                      fontSize: "0.95rem",
                      color: "#f5f5f5",
                      outline: "none",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                      "&:focus": { borderColor: "rgba(255,255,255,0.2)", bgcolor: "rgba(255,255,255,0.04)" },
                      "&::placeholder": { color: "#555555" },
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleResearch}
                    disabled={!query.trim()}
                    sx={{ px: 3.5, fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Research
                  </Button>
                </Box>
                <Typography sx={{ color: "#555555", fontSize: "0.8rem" }}>
                  3 sources read &bull; 2.4s average &bull; Open Source
                </Typography>
              </Box>
            )}

            {(phase === "searching" || phase === "reading" || phase === "synthesizing") && (
              <Box
                sx={{
                  p: 3,
                  border: 1,
                  borderColor: "rgba(255,255,255,0.06)",
                  borderRadius: 1.5,
                  bgcolor: "#0a0a0a",
                  maxWidth: 500,
                }}
              >
                <Stack spacing={1.5}>
                  {phase === "searching" && (
                    <>
                      <Box sx={{ color: "#888888", fontSize: "0.85rem", fontWeight: 500 }}>
                        Searching web...
                      </Box>
                      {SOURCES.slice(0, 3).map((s, i) => (
                        <Box
                          key={s}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: i < visibleSources ? "#55b87a" : "#555555",
                            fontSize: "0.85rem",
                            transition: "all 0.3s ease",
                            opacity: i < visibleSources ? 1 : 0.3,
                          }}
                        >
                          <Box
                            sx={{
                              width: 16,
                              height: 16,
                              borderRadius: "50%",
                              border: 1,
                              borderColor: i < visibleSources ? "#55b87a" : "rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "10px",
                              bgcolor: i < visibleSources ? "#55b87a" : "transparent",
                              color: i < visibleSources ? "#ffffff" : "transparent",
                            }}
                          >
                            {i < visibleSources ? "✓" : ""}
                          </Box>
                          {s}
                        </Box>
                      ))}
                    </>
                  )}
                  {phase === "reading" && (
                    <>
                      <Box sx={{ color: "#55b87a", fontSize: "0.85rem", fontWeight: 500, display: "flex", alignItems: "center", gap: 1 }}>
                        <Box sx={{ width: 16, height: 16, borderRadius: "50%", bgcolor: "#55b87a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#ffffff" }}>✓</Box>
                        Searching web
                      </Box>
                      <Box sx={{ color: "#888888", fontSize: "0.85rem", fontWeight: 500, mt: 0.5 }}>
                        Reading pages...
                      </Box>
                      {SOURCES.slice(0, 3).map((s, i) => (
                        <Box
                          key={s}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: i < readSources ? "#55b87a" : "#555555",
                            fontSize: "0.85rem",
                            transition: "all 0.3s ease",
                            opacity: i < readSources ? 1 : 0.3,
                          }}
                        >
                          <Box
                            sx={{
                              width: 16,
                              height: 16,
                              borderRadius: "50%",
                              border: 1,
                              borderColor: i < readSources ? "#55b87a" : "rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "10px",
                              bgcolor: i < readSources ? "#55b87a" : "transparent",
                              color: i < readSources ? "#ffffff" : "transparent",
                            }}
                          >
                            {i < readSources ? "✓" : ""}
                          </Box>
                          {s}
                        </Box>
                      ))}
                    </>
                  )}
                  {phase === "synthesizing" && (
                    <>
                      <Box sx={{ color: "#55b87a", fontSize: "0.85rem", fontWeight: 500, display: "flex", alignItems: "center", gap: 1 }}>
                        <Box sx={{ width: 16, height: 16, borderRadius: "50%", bgcolor: "#55b87a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#ffffff" }}>✓</Box>
                        Searching web
                      </Box>
                      <Box sx={{ color: "#55b87a", fontSize: "0.85rem", fontWeight: 500, display: "flex", alignItems: "center", gap: 1 }}>
                        <Box sx={{ width: 16, height: 16, borderRadius: "50%", bgcolor: "#55b87a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#ffffff" }}>✓</Box>
                        Reading pages
                      </Box>
                      <Box sx={{ color: "#a0c4ff", fontSize: "0.85rem", fontWeight: 500, mt: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            border: 1,
                            borderColor: "#a0c4ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            animation: "pulse 1s ease-in-out infinite",
                          }}
                        >
                          ●
                        </Box>
                        Synthesizing answer...
                      </Box>
                    </>
                  )}
                </Stack>
              </Box>
            )}

            {phase === "done" && (
              <Box
                sx={{
                  p: 3,
                  border: 1,
                  borderColor: "rgba(255,255,255,0.08)",
                  borderRadius: 1.5,
                  bgcolor: "#0a0a0a",
                  maxWidth: 600,
                }}
              >
                <Stack spacing={3}>
                  <Stack spacing={1}>
                    {["Searching web", "Reading pages", "Synthesizing answer"].map((step) => (
                      <Box key={step} sx={{ display: "flex", alignItems: "center", gap: 1, color: "#55b87a", fontSize: "0.8rem" }}>
                        <Box sx={{ width: 16, height: 16, borderRadius: "50%", bgcolor: "#55b87a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#ffffff" }}>✓</Box>
                        {step}
                      </Box>
                    ))}
                  </Stack>
                  <Box sx={{ borderTop: 1, borderColor: "rgba(255,255,255,0.06)", pt: 3 }}>
                    <Typography sx={{ color: "#a0c4ff", fontSize: "0.75rem", fontWeight: 600, mb: 1 }}>
                      ANSWER
                    </Typography>
                    <Typography sx={{ color: "#f5f5f5", fontSize: "0.9rem", lineHeight: 1.7, mb: 2 }}>
                      {FAKE_ANSWER}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                      <Typography sx={{ color: "#555555", fontSize: "0.75rem" }}>
                        3 sources &bull; 5 pages read
                      </Typography>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={handleReset}
                        sx={{ fontSize: "0.75rem", py: 0.3, px: 1.5 }}
                      >
                        Try another
                      </Button>
                      <Button
                        component={Link}
                        href={`/search?q=${encodeURIComponent(query)}`}
                        size="small"
                        variant="contained"
                        sx={{ fontSize: "0.75rem", py: 0.3, px: 1.5 }}
                      >
                        Full results
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      <Box sx={{ borderTop: 1, borderColor: "rgba(255,255,255,0.04)", py: 8 }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={6} sx={{ justifyContent: "center", flexWrap: "wrap", gap: 4 }}>
            {[
              { label: "Search", desc: "DuckDuckGo + fallback" },
              { label: "Read", desc: "Full article scraping" },
              { label: "Understand", desc: "LLM synthesis" },
              { label: "Reliable", desc: "Automatic failover" },
            ].map((f) => (
              <Box key={f.label} sx={{ textAlign: "center", minWidth: 120 }}>
                <Typography sx={{ color: "#ffffff", fontWeight: 600, fontSize: "0.9rem", mb: 0.3 }}>{f.label}</Typography>
                <Typography sx={{ color: "#666666", fontSize: "0.8rem" }}>{f.desc}</Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ borderTop: 1, borderColor: "rgba(255,255,255,0.04)", py: 8 }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={6} sx={{ justifyContent: "center", flexWrap: "wrap", gap: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: "#888888", fontSize: "0.75rem", fontWeight: 600, mb: 2, letterSpacing: 1 }}>BUILT FOR DEVELOPERS</Typography>
              <Stack spacing={1.5}>
                {["REST API", "JSON responses", "Serverless", "Open source", "Self-hostable"].map((f) => (
                  <Box key={f} sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: "#555555" }} />
                    <Typography sx={{ color: "#f5f5f5", fontSize: "0.85rem" }}>{f}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box sx={{ width: 1, bgcolor: "rgba(255,255,255,0.06)", alignSelf: "stretch" }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ color: "#888888", fontSize: "0.75rem", fontWeight: 600, mb: 2, letterSpacing: 1 }}>WHY TARD?</Typography>
              <Stack spacing={1.5}>
                <Box>
                  <Typography sx={{ color: "#888888", fontSize: "0.8rem" }}>Google finds links.</Typography>
                  <Typography sx={{ color: "#f5f5f5", fontSize: "0.85rem", fontWeight: 500 }}>Tard reads them.</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#888888", fontSize: "0.8rem" }}>Perplexity is closed.</Typography>
                  <Typography sx={{ color: "#f5f5f5", fontSize: "0.85rem", fontWeight: 500 }}>Tard is open source.</Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ borderTop: 1, borderBottom: 1, borderColor: "rgba(255,255,255,0.04)", py: 8 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={6} sx={{ alignItems: "center" }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: "#888888", fontSize: "0.75rem", fontWeight: 600, mb: 1.5, letterSpacing: 1 }}>API</Typography>
              <Typography sx={{ color: "#ffffff", fontSize: { xs: "1.5rem", md: "1.75rem" }, fontWeight: 600, mb: 2, letterSpacing: -0.5 }}>
                One endpoint, one answer.
              </Typography>
              <Typography sx={{ color: "#888888", fontSize: "0.9rem", lineHeight: 1.7, mb: 3 }}>
                Send a query, get back a synthesized answer with sources.
              </Typography>
              <Button component={Link} href="/docs" variant="contained" size="small" sx={{ fontWeight: 600 }}>
                Read the Docs
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1,
                bgcolor: "#0a0a0a",
                border: 1,
                borderColor: "rgba(255,255,255,0.06)",
                borderRadius: 1.5,
                p: 2.5,
                fontFamily: "monospace",
                fontSize: "0.8rem",
                lineHeight: 1.8,
                overflowX: "auto",
                width: "100%",
              }}
            >
              <Box sx={{ color: "#555555", fontSize: "0.75rem", mb: 1.5 }}>GET /search?q=fusion energy</Box>
              <Box><Box component="span" sx={{ color: "#888888" }}>{`{`}</Box></Box>
              <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;query&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;fusion energy&quot;</Box>,</Box>
              <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;sources_read&quot;</Box>: <Box component="span" sx={{ color: "#ffffff" }}>3</Box>,</Box>
              <Box>&nbsp;&nbsp;<Box component="span" sx={{ color: "#aaaaaa" }}>&quot;answer&quot;</Box>: <Box component="span" sx={{ color: "#f5f5f5" }}>&quot;Fusion energy...&quot;</Box></Box>
              <Box><Box component="span" sx={{ color: "#888888" }}>{`}`}</Box></Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
            <Typography sx={{ fontWeight: 800, letterSpacing: -0.5, color: "#ffffff", fontSize: "1rem" }}>tard</Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Button
                component="a"
                href="https://github.com/ishpiked/Tard"
                target="_blank"
                sx={{ color: "#555555", fontWeight: 500, px: 1, fontSize: "0.8rem", "&:hover": { color: "#f5f5f5" }, minWidth: 0 }}
              >
                GitHub
              </Button>
              <Button
                component={Link}
                href="/docs"
                sx={{ color: "#555555", fontWeight: 500, px: 1, fontSize: "0.8rem", "&:hover": { color: "#f5f5f5" }, minWidth: 0 }}
              >
                API Docs
              </Button>
              <Typography sx={{ color: "#444444", fontSize: "0.8rem" }}>MIT License</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function CTASection() {
  return (
    <Box sx={{ py: 10, bgcolor: "primary.main", color: "white", textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Ready to get answers?
        </Typography>
        <Typography sx={{ mb: 4, opacity: 0.8 }}>
          Drop a query and let Tard do the digging.
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<KeyboardArrowRight />}
          sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.200" } }}
        >
          Start Searching
        </Button>
      </Container>
    </Box>
  );
}

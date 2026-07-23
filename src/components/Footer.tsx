import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
            tard
          </Typography>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

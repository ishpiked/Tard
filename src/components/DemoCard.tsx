import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DemoCard() {
  return (
    <Box sx={{ bgcolor: "primary.main", borderRadius: 4, height: 380, display: "flex", alignItems: "center", justifyContent: "center", color: "white", px: 4 }}>
      <Box sx={{ maxWidth: 400 }}>
        <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem", opacity: 0.5, mb: 1 }}>
          $ tard search &quot;current state of fusion energy&quot;
        </Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "1rem", mb: 2, lineHeight: 1.6 }}>
          &ldquo;Fusion energy research is progressing on multiple fronts.
          The ITER project aims for net energy gain by 2035, while private
          companies pursue compact tokamak designs.&rdquo;
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", opacity: 0.5 }}>
          3 sources &middot; synthesised
        </Typography>
      </Box>
    </Box>
  );
}

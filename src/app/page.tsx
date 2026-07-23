import Box from "@mui/material/Box";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <Footer />
    </Box>
  );
}

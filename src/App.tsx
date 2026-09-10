import { FooterSection } from "./componenets/FooterSection";
import { HeroSection } from "./componenets/HeroSection";
import { PhotoTrail } from "./componenets/PhotoTrail";

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <HeroSection />
      <PhotoTrail />
      <FooterSection />
    </div>
  );
}

export default App;

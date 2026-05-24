import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import HomeReflections from "./components/HomeReflections";
import HomeSocials from "./components/HomeSocials";
import HomeNewsletter from "./components/HomeNewsletter";
import HomeContact from "./components/HomeContact";

export default function HomePage() {
  return (
    <main className="bg-[#ede5dc] text-[#292928]">
      <Header />
      <Hero />
      <HomeAbout />
      <HomeReflections />
      <HomeSocials />
      <HomeNewsletter />
      <HomeContact />
      <Footer />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <SEO 
        title="Media One - #1 Entertainment PR Agency Mumbai | Movie Promotion & Digital Marketing"
        description="Media One is Mumbai's leading entertainment PR agency specializing in Marathi movie promotions, digital influencer marketing, drama promotions, and event media coverage. 500+ successful campaigns, 10+ years experience. Contact us for movie publicity, celebrity PR, and brand promotion services."
        keywords="Media One, entertainment PR agency Mumbai, Marathi movie promotion, digital PR agency, influencer marketing Mumbai, event PR, drama promotion, Bollywood PR, film marketing agency, entertainment marketing Mumbai, PR agency India, movie publicity, celebrity PR, brand promotion, Marathi entertainment, Mumbai PR services"
      />
      <header>
        <Navbar />
      </header>
      <main role="main">
        <Hero />
        <About />
        <OurStory />
        <Services />
        <Partners />
        <Projects />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

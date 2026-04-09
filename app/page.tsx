import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Mentor } from "@/components/sections/mentor";
import { About } from "@/components/sections/about";
import { Modules } from "@/components/sections/modules";
import { Benefits } from "@/components/sections/benefits";
import { Guarantee } from "@/components/sections/guarantee";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/sections/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mentor />
        <About />
        <Modules />
        <Benefits />
        <Pricing />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

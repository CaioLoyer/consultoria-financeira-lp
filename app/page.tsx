import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Modules } from "@/components/sections/modules";
import { Benefits } from "@/components/sections/benefits";
import { Authority } from "@/components/sections/authority";
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
        <About />
        <Modules />
        <Benefits />
        <Authority />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

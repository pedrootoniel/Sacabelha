export const metadata = {
  title: "Abelha Rainha - Canal de SAC/OUVIDORIA",
  description: "Nosso SAC está aqui para atender suas dúvidas, sugestões e solicitações sobre nossos produtos e serviços. Estamos prontos para te ajudar",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Cta />
    </>
  );
}

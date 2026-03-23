import { ArrowRight, Play, BookOpen } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20MTBI";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 via-background to-background" />
      


      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-primary">
              O QUE É O
            </p>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Método Anti-Burro{" "}
              <span className="gradient-text">de Investimento</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-foreground-muted lg:text-xl">
              Um programa de formação em investimentos criado para desenvolver{" "}
              <strong className="text-foreground">pensamento estratégico</strong>,{" "}
              <strong className="text-foreground">disciplina</strong> e{" "}
              <strong className="text-foreground">visão de longo prazo</strong>.
              Ideal para quem busca autonomia, método e controle total sobre suas
              decisões financeiras.
            </p>

            {/* Stats */}
            <div className="mb-10 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">10 Módulos</span>
              </div>
              <div className="flex items-center gap-3">
                <Play className="h-6 w-6 text-secondary" />
                <span className="text-lg font-semibold text-foreground">+50 Aulas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border group inline-flex items-center justify-center gap-2 rounded-xl bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-background-tertiary"
              >
                QUERO COMEÇAR AGORA
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-8 py-4 text-base font-semibold text-foreground-muted transition-colors hover:border-primary hover:text-foreground"
              >
                CONHECER O MÉTODO
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-secondary/30 to-primary/30 blur-2xl" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="gradient-border rounded-2xl bg-card p-8 text-center">
                  <p className="mb-2 font-heading text-6xl font-bold text-accent">MTBI</p>
                  <p className="text-sm font-medium tracking-spaced text-foreground-muted">
                    MÉTODO ANTI-BURRO
                  </p>
                  <div className="mt-4 gradient-bar w-24 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

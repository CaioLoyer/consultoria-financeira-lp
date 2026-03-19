import { Award, Headphones, Target } from "lucide-react";

const benefits = [
  {
    number: 1,
    title: "Mentoria de A a Z",
    description:
      "Não é apenas uma aula, é um plano de execução. Você terá acompanhamento personalizado para validar sua estratégia. Sairá com sua carteira estruturada, utilizando a mesma metodologia exclusiva que usamos para gerir o patrimônio dos grandes clientes. Você nunca mais terá dúvidas se está investindo no lugar certo.",
    icon: Award,
  },
  {
    number: 2,
    title: "Carteira Recomendada 2026",
    description:
      "Pule a etapa da dúvida e vá direto para o lucro. Nós já fizemos o trabalho pesado de análise. Você terá acesso imediato à nossa seleção de ativos 'campeões' para 2026. É a sua chance de começar o ano posicionado nos mesmos ativos que nós, profissionais, estamos comprando, sem precisar gastar horas analisando gráficos ou balanços.",
    icon: Target,
  },
  {
    number: 3,
    title: "Consultor de Bolso",
    description:
      '"Consultor de Bolso" (Acesso Direto) Esqueça o suporte lento via e-mail. Durante 12 meses, você terá acesso a um canal direto e exclusivo na nossa comunidade pelo WhatsApp. Travou em alguma decisão? Mande sua dúvida.',
    icon: Headphones,
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="gradient-bar w-24" />
          </div>
          <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-primary">
            BÔNUS EXCLUSIVOS
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            O que você recebe
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.number}
                className="card-hover gradient-border group relative rounded-2xl bg-card p-6 sm:p-8"
              >
                {/* Badge Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="mb-2 font-heading text-xs font-medium tracking-spaced text-foreground-muted">
                    BÔNUS {benefit.number}
                  </p>
                  <h3 className="mb-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

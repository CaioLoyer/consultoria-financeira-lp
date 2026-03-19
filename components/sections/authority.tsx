import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "6.000+",
    label: "Alunos formados",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Anos de experiência",
  },
  {
    icon: TrendingUp,
    value: "170%",
    label: "do CDI (média clientes)",
  },
  {
    icon: Award,
    value: "CNPI",
    label: "Analista certificado",
  },
];

const testimonialCharts = [
  {
    profile: "CLIENTE PERFIL MODERADO",
    return: "+23,02%",
    cdi: "170,70% do CDI",
  },
  {
    profile: "CLIENTE INICIOU EM DEZ/25",
    return: "+3,99%",
    cdi: "193,60% do CDI",
  },
  {
    profile: "CLIENTE PERFIL MODERADO",
    return: "+21,17%",
    cdi: "156,98% do CDI",
  },
];

export function Authority() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="gradient-border rounded-2xl bg-card p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mb-1 font-heading text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground-muted">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Client Results Section */}
        <div className="text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Evolução dos{" "}
            <span className="gradient-text">nossos clientes</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-foreground-muted">
            Resultados reais de clientes que aplicaram o método MTBI em suas
            carteiras de investimento.
          </p>

          {/* Charts Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonialCharts.map((chart, index) => (
              <div
                key={index}
                className="card-hover gradient-border overflow-hidden rounded-2xl bg-card"
              >
                {/* Chart Header */}
                <div className="border-b border-border p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded bg-background-tertiary px-2 py-1 text-foreground">
                      Evolução
                    </span>
                    <div className="flex gap-2">
                      <span className="rounded bg-background-tertiary px-2 py-1 text-foreground-muted">
                        Rentabilidade
                      </span>
                      <span className="rounded bg-transparent px-2 py-1 text-foreground-muted">
                        Patrimônio
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chart Body */}
                <div className="p-4">
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-success">
                      {chart.return}
                    </span>
                    <span className="text-xs text-primary">• {chart.cdi}</span>
                  </div>

                  {/* Simplified Chart Visualization */}
                  <div className="relative h-32 w-full overflow-hidden rounded-lg bg-background-tertiary">
                    <svg
                      viewBox="0 0 200 80"
                      className="h-full w-full"
                      preserveAspectRatio="none"
                    >
                      {/* Upward trend line */}
                      <path
                        d="M0,70 Q50,60 100,40 T200,10"
                        fill="none"
                        stroke="hsl(var(--foreground))"
                        strokeWidth="2"
                      />
                      {/* CDI reference line */}
                      <path
                        d="M0,65 L200,45"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                      />
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-foreground" />
                      <span className="text-foreground-muted">Carteira</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-foreground-muted">CDI</span>
                    </div>
                  </div>
                </div>

                {/* Chart Footer */}
                <div className="border-t border-border bg-background-tertiary/50 p-3">
                  <p className="text-xs font-medium text-foreground">
                    {chart.profile}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

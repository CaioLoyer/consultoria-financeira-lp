import {
  Wallet,
  PieChart,
  TrendingUp,
  Receipt,
  Building2,
  BarChart3,
  LineChart,
  DollarSign,
  Shield,
  Bitcoin,
} from "lucide-react";

const modules = [
  {
    number: 1,
    title: "Controle de Finanças",
    description:
      "Estruture sua base financeira para investir com segurança. Organização, fluxo de caixa e decisões conscientes antes de buscar retorno.",
    icon: Wallet,
  },
  {
    number: 2,
    title: "Montagem de Carteira",
    description:
      "Aprenda a construir uma carteira diversificada e alinhada com seus objetivos, perfil de risco e horizonte de investimento.",
    icon: PieChart,
  },
  {
    number: 3,
    title: "Renda Fixa",
    description:
      "Domine os principais ativos de renda fixa do mercado brasileiro. Tesouro Direto, CDBs, LCIs, LCAs e debêntures.",
    icon: TrendingUp,
  },
  {
    number: 4,
    title: "Imposto de Renda",
    description:
      "Entenda a tributação de investimentos e aprenda a declarar corretamente seus ativos na declaração anual.",
    icon: Receipt,
  },
  {
    number: 5,
    title: "FIIs",
    description:
      "Fundos Imobiliários explicados do zero. Análise de fundos, métricas importantes e estratégias de alocação.",
    icon: Building2,
  },
  {
    number: 6,
    title: "ETFs",
    description:
      "Exchange Traded Funds: como usar ETFs para diversificar sua carteira de forma eficiente e com baixo custo.",
    icon: BarChart3,
  },
  {
    number: 7,
    title: "Ações",
    description:
      "Análise fundamentalista, leitura de balanços, indicadores e métodos para selecionar empresas de qualidade.",
    icon: LineChart,
  },
  {
    number: 8,
    title: "Dólar",
    description:
      "Estratégias de proteção cambial e investimentos em dólar. Diversificação internacional para brasileiros.",
    icon: DollarSign,
  },
  {
    number: 9,
    title: "Reservas de Valor",
    description:
      "Ouro, prata e outros ativos de proteção patrimonial. Quando e como usar reservas de valor na carteira.",
    icon: Shield,
  },
  {
    number: 10,
    title: "Criptomoedas",
    description:
      "Bitcoin, Ethereum e o mercado cripto com visão de investidor. Riscos, oportunidades e alocação responsável.",
    icon: Bitcoin,
  },
];

export function Modules() {
  return (
    <section id="modulos" className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-primary">
            FOI FEITO
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            pra você
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground-muted">
            Um programa completo de formação em investimentos com{" "}
            <strong className="text-foreground">10 módulos</strong> que cobrem
            desde finanças pessoais até criptomoedas.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="space-y-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={module.number}
                className={`flex flex-col gap-6 lg:flex-row lg:items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Module Card Preview */}
                <div className="lg:w-1/3">
                  <div className="card-hover gradient-border relative overflow-hidden rounded-2xl bg-card p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 px-3 py-1">
                      <span className="text-xs font-semibold text-primary">
                        Módulo {module.number}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {module.title}
                      </h3>
                    </div>
                    <div className="mt-4 gradient-bar w-16" />
                  </div>
                </div>

                {/* Module Description */}
                <div className="lg:w-2/3">
                  <div className="gradient-border rounded-2xl bg-card/50 p-6 sm:p-8">
                    <div className="mb-3 gradient-bar w-24" />
                    <p className="mb-2 font-heading text-xs font-medium tracking-spaced text-foreground-muted">
                      MÓDULO {module.number}
                    </p>
                    <h3 className="mb-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                      {module.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-foreground-muted">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

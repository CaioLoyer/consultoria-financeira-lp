import { CheckCircle2, XCircle } from "lucide-react";

const idealClient = [
  "Quer dominar o jogo completo, do básico à tomada de decisão avançada, sem depender de dicas, gurus ou terceiros",
  "Valoriza fundamento, lógica e processo, e não promessas rápidas",
  "Quer saber por que investir, onde investir e quando não investir",
  "Entende que uma boa carteira nasce da combinação entre finanças pessoais, renda fixa, renda variável, gestão de risco e proteção patrimonial",
  "Quer construir uma estratégia de longo prazo, preparada para cenários de alta, queda, crise e oportunidade",
  "Busca clareza e controle sobre o próprio patrimônio, mesmo em mercados voláteis",
  "Quer investir no Brasil e no exterior com a mesma segurança conceitual",
];

const notIdealClient = [
  "Procura atalhos, 'táticas secretas' ou ganhos rápidos",
  "Quer apenas copiar carteira pronta sem entender o racional por trás",
  "Não tem interesse em aprender fundamentos, indicadores, valuation ou gestão de risco",
  "Se incomoda com números, análises e decisões baseadas em dados",
  "Prefere apostar em tendências, modismos ou promessas de curto prazo",
  "Quer investir sem assumir responsabilidade pelas próprias escolhas",
  "Busca entretenimento financeiro, e não formação real",
];

export function About() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-primary">
            PRA QUEM É O
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Método Anti-Burro de Investimento
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Ideal Client Card */}
          <div className="gradient-border rounded-2xl bg-card p-6 sm:p-8">
            <ul className="space-y-4">
              {idealClient.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-success" />
                  <span className="text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Ideal Client Card */}
          <div className="gradient-border rounded-2xl bg-card p-6 sm:p-8">
            <ul className="space-y-4">
              {notIdealClient.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <XCircle className="h-6 w-6 flex-shrink-0 text-error" />
                  <span className="text-foreground-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

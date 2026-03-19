"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O treinamento serve para quem é totalmente leigo?",
    answer:
      "Sim! O MTBI foi desenvolvido para atender desde iniciantes completos até investidores intermediários. Começamos do absoluto zero e avançamos progressivamente, garantindo que você absorva cada conceito antes de passar para o próximo.",
  },
  {
    question: "É preciso ter muito capital para investir?",
    answer:
      "Não. Você pode começar com qualquer valor. O mais importante é aprender a metodologia correta. Nossos alunos começam com valores diversos, desde R$ 100 até valores maiores. O método ensina a otimizar qualquer quantia.",
  },
  {
    question: "O foco é em investimentos no Brasil ou no Exterior?",
    answer:
      "Ambos! O MTBI cobre investimentos nacionais (renda fixa, ações, FIIs) e internacionais (ETFs americanos, investimento em dólar). Você aprenderá a diversificar globalmente.",
  },
  {
    question: "Quem é o mentor do curso?",
    answer:
      "O MTBI é conduzido por um profissional com mais de 15 anos de experiência no mercado financeiro, certificação CNPI (Analista de Valores Mobiliários) e CVM. Já formou mais de 6.000 alunos com seu método exclusivo.",
  },
  {
    question: "Terei acesso a sugestões práticas de onde investir?",
    answer:
      "Sim! Além da formação teórica, você recebe a Carteira Recomendada 2026 com ativos selecionados pela nossa equipe de análise. Você saberá exatamente onde alocar seus recursos.",
  },
  {
    question: "Os métodos apresentados são comprovados?",
    answer:
      "Absolutamente. Nossa metodologia é baseada em análise fundamentalista, gestão de risco e estratégias validadas ao longo de mais de uma década. Os resultados dos nossos clientes comprovam a eficácia.",
  },
  {
    question: "Qual a duração do acesso?",
    answer:
      "Você terá acesso ao conteúdo completo por 12 meses, incluindo todas as atualizações e novos módulos que forem adicionados durante este período.",
  },
  {
    question: "As aulas são gravadas ou em tempo real?",
    answer:
      "As aulas são gravadas para você assistir no seu ritmo. Além disso, oferecemos encontros ao vivo periódicos para tirar dúvidas e discutir o mercado atual.",
  },
  {
    question: "Tenho uma rotina muito corrida, vou conseguir acompanhar?",
    answer:
      "Sim! O método foi pensado para pessoas ocupadas. Com apenas 15-20 minutos por dia, você consegue absorver o conteúdo. As aulas são objetivas e diretas ao ponto.",
  },
  {
    question: "Existe alguma garantia?",
    answer:
      "Sim, oferecemos garantia de satisfação. Se em até 7 dias você sentir que o programa não é para você, devolvemos 100% do valor investido, sem burocracia.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="gradient-bar w-24" />
          </div>
          <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-primary">
            FAQ
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Perguntas{" "}
            <span className="font-extrabold">Frequentes</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-3 pr-4 text-base font-medium text-primary sm:text-lg">
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-foreground-muted transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="pl-7 text-foreground-muted">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

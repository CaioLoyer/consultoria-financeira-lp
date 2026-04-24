"use client";

import { ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="preco" className="section-padding bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* Pricing Card */}
          <div className="w-full max-w-xl">
            <div className="relative rounded-2xl bg-card p-8 sm:p-10 overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-8 right-8 h-1 gradient-bar" />
              
              {/* Content */}
              <div className="text-center">
                <h2 className="mb-4 font-heading text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  Invista como quem entende o jogo.{" "}
                  <span className="text-foreground-muted">
                    Não como quem torce para dar certo.
                  </span>
                </h2>
                
                <p className="mb-8 text-base text-foreground-muted leading-relaxed">
                  Um treinamento completo para quem já cansou de achismo, dicas de 
                  internet e promessas milagrosas — e quer{" "}
                  <strong className="text-foreground">
                    dominar os fundamentos, montar carteira sólida e tomar decisões com clareza.
                  </strong>
                </p>
                
                {/* Price Section */}
                <div className="mb-8">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Oferta especial
                  </p>
                  
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-foreground-muted line-through text-lg">
                      De R$ 599,00
                    </span>
                    <span className="text-foreground">
                      por apenas 12x
                    </span>
                  </div>
                  
                  <p className="text-6xl sm:text-7xl font-bold text-foreground font-heading mb-2">
                    R$ 33,25
                  </p>
                  
                  <p className="text-xl text-foreground-muted">
                    ou <span className="text-foreground font-semibold">R$300</span> à vista
                  </p>
                </div>
                
                {/* CTA Button */}
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-card border border-border px-8 py-4 font-semibold text-foreground transition-all hover:bg-muted gradient-border w-full sm:w-auto"
                >
                  EU QUERO INVESTIR AGORA
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                
                {/* Payment Methods */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-60">
                  <span className="text-xs text-foreground-muted">Kiwify</span>
                  <span className="text-xs text-foreground-muted font-bold">pix</span>
                  <span className="text-xs text-foreground-muted font-bold">VISA</span>
                  <span className="text-xs text-foreground-muted font-bold">Mastercard</span>
                  <span className="text-xs text-foreground-muted">Elo</span>
                  <span className="text-xs text-foreground-muted">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

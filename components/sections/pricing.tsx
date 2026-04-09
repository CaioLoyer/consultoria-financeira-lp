"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Pricing() {
  return (
    <section id="preco" className="section-padding bg-background-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Pricing Card */}
          <div className="flex-1 w-full max-w-xl">
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
          
          {/* Right - Phone Mockup */}
          <div className="flex-1 relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
              
              {/* Phone Frame */}
              <div className="relative z-10 rounded-[2.5rem] border-4 border-border/50 bg-card p-2 shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden bg-background-tertiary aspect-[9/16]">
                  {/* Phone Screen Content */}
                  <div className="p-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-foreground-muted">RESUMO</span>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 rounded bg-muted text-foreground-muted">CARTEIRA</span>
                        <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">EVOLUÇÃO</span>
                      </div>
                    </div>
                    
                    {/* Balance */}
                    <div className="mb-6">
                      <p className="text-xs text-foreground-muted mb-1">Patrimônio Total</p>
                      <p className="text-2xl font-bold text-foreground">R$ 23.250,00</p>
                      <p className="text-xs text-success">+12.5% este mês</p>
                    </div>
                    
                    {/* Chart placeholder */}
                    <div className="flex-1 flex items-end gap-1 pb-4">
                      {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* Assets */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                        <span className="text-xs text-foreground">Renda Fixa</span>
                        <span className="text-xs text-success">+8.2%</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                        <span className="text-xs text-foreground">Ações</span>
                        <span className="text-xs text-success">+15.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating money/coins decoration */}
              <div className="absolute top-10 -right-8 w-16 h-10 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                💵
              </div>
              <div className="absolute bottom-20 -left-8 w-16 h-10 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>
                💰
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

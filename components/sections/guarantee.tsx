"use client";

import { ArrowRight, Shield } from "lucide-react";

export function Guarantee() {
  return (
    <section id="garantia" className="section-padding bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - 30 Days Badge */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Shield background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Shield className="w-64 h-64 text-primary" strokeWidth={0.5} />
              </div>
              
              {/* Number and text */}
              <div className="relative text-center">
                <span className="text-[180px] sm:text-[220px] lg:text-[260px] font-bold leading-none text-white/90 font-heading">
                  30
                </span>
                <div className="mt-[-40px] sm:mt-[-50px]">
                  <p className="text-2xl sm:text-3xl font-medium text-foreground-muted tracking-wide">
                    DIAS DE
                  </p>
                  <p className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
                    GARANTIA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="flex-1 max-w-xl">
            <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-secondary">
              S A T I S F A Ç Ã O &nbsp; G A R A N T I D A
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              OU SEU DINHEIRO DE VOLTA
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-foreground-muted">
              Nossa garantia é simples: você tem 30 dias inteiros pra explorar o curso, 
              assistir às aulas e testar o conteúdo. Se nesse período você sentir que o MTBI não 
              é pra você, devolvemos 100% do seu investimento, sem burocracia, sem 
              perguntas.
            </p>
            
            {/* CTA Button */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-lg bg-card px-8 py-4 font-semibold text-foreground transition-all hover:bg-card/80 gradient-border"
            >
              EU QUERO INVESTIR AGORA
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

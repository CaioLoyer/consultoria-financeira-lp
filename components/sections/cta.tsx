import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20MTBI";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 to-background" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Browser Window Mockup */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-border bg-background-secondary px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-error" />
            <div className="h-3 w-3 rounded-full bg-accent" />
            <div className="h-3 w-3 rounded-full bg-success" />
          </div>

          {/* Content */}
          <div className="px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Fale direto com a nossa equipe no WhatsApp!
            </h2>
            <p className="mb-10 text-sm text-foreground-muted sm:text-base">
              Clique no botão abaixo e tire suas dúvidas com um de nossos especialistas.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white sm:text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              QUERO ATENDIMENTO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

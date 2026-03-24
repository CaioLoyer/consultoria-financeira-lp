"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20MTBI";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg md:h-16 md:w-16"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white md:h-8 md:w-8" />
    </a>
  );
}

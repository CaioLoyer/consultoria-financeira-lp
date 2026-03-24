export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Gradient Bar */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="gradient-bar w-24" />
        </div>

        {/* Logo */}
        <div className="mb-8 text-center">
          <span className="font-heading text-3xl font-bold tracking-tight text-accent">
            MTBI
          </span>
          <p className="mt-2 text-sm font-medium tracking-spaced text-foreground-muted">
            MÉTODO ANTI-BURRO DE INVESTIMENTO
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-foreground-muted">
            © Copyright {currentYear} – Todos direitos reservados.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs leading-relaxed text-foreground-muted/70">
            Este material é educacional e não constitui recomendação de
            investimento. Rentabilidade passada não garante resultados futuros.
            Consulte um profissional habilitado antes de tomar decisões
            financeiras.
          </p>
        </div>
      </div>
    </footer>
  );
}

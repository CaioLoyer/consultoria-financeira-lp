import Image from "next/image";

export function Mentor() {
  return (
    <section id="mentor" className="relative overflow-hidden bg-background-secondary py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 font-heading text-sm font-medium tracking-spaced text-primary">
              Q U E M É O
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Mentor do <span className="gradient-text">MTBI</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-foreground-muted">
              Caio Loyer é investidor há mais de 10 anos, especialista em mercado financeiro e
              educador dedicado a transformar a forma como as pessoas investem. Já ajudou centenas
              de alunos a desenvolverem autonomia nas suas decisões financeiras.
            </p>
            <blockquote className="relative border-l-2 border-primary pl-6">
              <p className="text-base italic leading-relaxed text-foreground-muted">
                &ldquo;O MTBI nasceu da minha experiência prática no mercado. Criei um método
                simples e direto para que qualquer pessoa consiga investir com segurança,
                sem depender de dicas ou promessas milagrosas&rdquo;.
              </p>
            </blockquote>
          </div>

          {/* Right Content - Photo */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gyitjfwwaYGmDGeRLed3UkwxBzxaiC.jpg"
                  alt="Caio Loyer ministrando aula sobre tipos de ativos"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

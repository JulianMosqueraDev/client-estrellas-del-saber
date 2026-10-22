export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-7 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-black/10 pb-5">
          <span aria-label="Estrellas del Saber" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-[var(--color-navy)] text-xl text-[var(--color-gold)]">
              ✦
            </span>
            <span className="text-sm font-semibold tracking-wide">ESTRELLAS DEL SABER</span>
          </span>
          <span className="hidden rounded-full border border-black/10 px-4 py-2 text-xs text-black/60 sm:inline-flex">
            Preparando una nueva etapa
          </span>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-blue)]">
              <span className="size-2 rounded-full bg-[var(--color-gold)]" />
              Una base para aprender y crecer
            </p>
            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Cada gran historia
              <span className="block text-[var(--color-blue)]">empieza con una estrella.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-black/65 sm:text-lg">
              Un espacio para aprender, descubrir y crecer.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto grid aspect-square w-full max-w-md place-items-center"
          >
            <div className="absolute inset-[8%] rounded-full border border-[var(--color-blue)]/15" />
            <div className="absolute inset-[18%] rounded-full border border-[var(--color-blue)]/15" />
            <div className="absolute inset-[28%] rounded-full bg-[var(--color-gold)]/20" />
            <div className="absolute right-[11%] top-[18%] size-4 rounded-full bg-[var(--color-blue)]" />
            <div className="absolute bottom-[15%] left-[13%] size-3 rounded-full bg-[var(--color-gold)]" />
            <div className="relative grid size-[45%] place-items-center rounded-full bg-[var(--color-navy)] shadow-[0_30px_80px_-28px_rgba(20,42,75,0.55)]">
              <span className="-mt-2 text-[clamp(6rem,17vw,11rem)] leading-none text-[var(--color-gold)]">
                ✦
              </span>
              <span className="absolute bottom-[24%] text-[10px] font-medium uppercase tracking-[0.28em] text-white/80">
                SABER
              </span>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-black/10 pt-5 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© Estrellas del Saber</span>
          <span>Un espacio pensado para aprender con confianza.</span>
        </footer>
      </div>
    </main>
  );
}

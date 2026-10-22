# Frontend — Estrellas del Saber

Base web con Bun, Next.js App Router, React, TypeScript estricto y Tailwind CSS. Esta etapa entrega una pantalla de bienvenida y configuración de API; no implementa funcionalidades de producto.

## Requisitos y comandos

- Bun `1.4.4` (fijado en `.bun-version`).
- Instala dependencias reproducibles: `bun ci`.
- Desarrollo: `bun run dev` y abre `http://localhost:3000`.
- Calidad: `bun run format:check`, `bun run lint`, `bun run typecheck`, `bun test --check` y `bun run build`.

El backend tiene su propio repositorio y se ejecuta por separado. La URL pública opcional está en `.env.example`; copia el archivo a `.env.local` para cambiarla. No pongas secretos en variables `NEXT_PUBLIC_*`, porque Next las expone al navegador.

## Decisiones

Los repositorios frontend y backend son independientes. La política de ramas, permisos y revisión está en [`CONTRIBUTING.md`](CONTRIBUTING.md). La decisión inicial de stack y compatibilidad está en [`docs/adr/0001-stack-inicial.md`](docs/adr/0001-stack-inicial.md).

Redux Toolkit se añadirá cuando exista estado compartido del producto que se beneficie de él; no se crea un store sin uso. El frontend consume contratos HTTP versionados (`/api/v1`) cuando se implementen.

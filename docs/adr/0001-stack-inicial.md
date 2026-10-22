# ADR 0001: frontend y repositorios separados

- **Estado:** aceptado para Semana 1.
- **Fecha:** 2026-10-22.

## Decisión

Usar Next.js App Router, React, TypeScript estricto y Tailwind CSS. Mantener frontend y backend en repositorios independientes, ambos con Bun `1.4.4` y lockfile versionado. Redux Toolkit se incorpora si aparece estado compartido de aplicación que lo justifique; no almacenar estado local efímero en Redux.

## Consecuencias

CI usa `bun ci` y ejecuta formato, lint, typecheck, tests y build. El backend se desarrolla y verifica en su propio repositorio. Los cambios de contrato se coordinan por pull request. La aplicación muestra una pantalla inicial sin representar funcionalidades no implementadas.

## Referencias

- [Guía oficial de Bun para Next.js](https://bun.sh/guides/ecosystem/nextjs)
- [Instalación de Next.js](https://nextjs.org/docs/app/getting-started/installation)

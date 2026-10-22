# Contribuir

## Ramas y permisos

Protege `main` y trabaja en ramas `feat/<issue>-<resumen>`, `fix/<issue>-<resumen>`, `docs/<resumen>` o `chore/<resumen>`. Integra mediante pull request con una aprobación independiente y el check `quality` en verde. Bloquea force-push y borrado de `main`; aplica permisos de mínimo privilegio por repositorio. Los ajustes reales se activan en GitHub Settings según [`repository-policy.md`](docs/architecture/repository-policy.md).

## Definition of Done

1. El cambio está dentro del alcance aprobado y tiene pruebas útiles.
2. `bun ci`, formato, lint, typecheck, tests y build pasan localmente y en CI.
3. Documentación actualizada; sin secretos ni información personal real.
4. Pull request revisado y checks verdes.
5. Cambios de contrato API coordinados con el repositorio backend.

En la Semana 1 no se crean flujos de producto para completar artificialmente estos criterios.

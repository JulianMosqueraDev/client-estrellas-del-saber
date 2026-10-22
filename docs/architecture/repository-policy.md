# Ramas, permisos y coordinación

Frontend y backend tienen repositorios Git separados, cada uno con su propia `main`, CI y revisión. Mantenerlos separados permite que evolucionen con ciclos propios sin duplicar un monorepo local.

- `main`: protegida; sin push directo, force-push ni borrado.
- Ramas cortas `feat/<issue>-<resumen>`, `fix/<issue>-<resumen>`, `docs/<resumen>` y `chore/<resumen>`.
- Todo cambio por PR con una aprobación de otra persona, check `quality` exitoso y conversaciones resueltas; preferir squash merge.
- Admin solo para responsables del repositorio, Write para quienes desarrollan, Read/Triage para consulta y clasificación. Gestionar los permisos por separado en ambos repositorios.
- `CODEOWNERS` solicita revisión de `@JulianMosqueraDev`; protección de rama y permisos deben configurarse en GitHub Settings.
- Cambios en rutas o payloads se coordinan en PRs de frontend/backend. No guardar secretos de despliegue durante esta etapa.

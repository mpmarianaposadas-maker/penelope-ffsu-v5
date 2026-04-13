# Sistema Penélope — PoC FFSU v5

> **Sistema de apoyo no decisorio para la verificación formal de solicitudes de fondos del Servicio Universal (FFSU) — ENACOM**

## Descripción

PoC que implementa el pipeline de verificación formal previa a la sustanciación de solicitudes FFSU (Fondo Fideicomisos del Servicio Universal), conforme al Reglamento General del Servicio Universal (RGSU, Res. ENACOM 1182/2025) y los Reglamentos Particulares vigentes (Res. 950/2025, 1191/2025 y 1385/2025).

**El sistema no emite actos administrativos. Genera pre-análisis sujetos a validación humana obligatoria.**

## Estructura del repositorio

```
penelope-ffsu-v5/
├── index.html              <- Estructura HTML + tabs + panels
├── css/
│   ├── tokens.css          <- Variables CSS + temas claro/oscuro
│   ├── layout.css          <- Topbar + tab groups + layout + aside
│   ├── components.css      <- Cards + forms + checklist + hitl + buttons
│   └── gde.css             <- Estilos documentos GDE + PNL + kill switch
├── js/
│   ├── state.js            <- Estado global + PNL + incumplimientos
│   ├── navigation.js       <- goTo() + guard + progress bar
│   ├── validation.js       <- EX-GDE regex + CUIT verificador + RUPECO
│   ├── pipeline.js         <- verif() + spos() + deuda() + plazos()
│   ├── hitl.js             <- HITL items + anti-automation bias + timer
│   ├── gde.js              <- genGDE() + borradores por linea Dec.336/17
│   ├── pnl.js              <- addPNL() + pnlRender() + exportarPNL()
│   └── kill.js             <- firmar() + resetKill() + causales
└── README.md
```

## Base normativa

| Norma | Contenido |
|---|---|
| Res. ENACOM 1182/2025 | Reglamento General del Servicio Universal (RGSU) |
| Res. ENACOM 950/2025 | Reglamento Particular FATIC — ANR |
| Res. ENACOM 1191/2025 | Reglamento Particular — Mercado de Capitales |
| Res. ENACOM 1385/2025 | Reglamento Particular — Crédito BNA |
| Dec. 336/2017 | Tipos documentales GDE (PV, NO, IF) |
| Dec. 89/2024 | Intervención ENACOM |
| Ley 19.549 | Ley Nacional de Procedimientos Administrativos |
| Ley 25.326 | Protección de datos personales |

## Arquitectura HITL

- **AUTOMATIZA**: Verificación de formato (EX-GDE, CUIT, RUPECO), cálculo de plazos, clasificación orientativa de línea
- **ASISTE**: Pre-análisis de requisitos art. 20 RGSU, detección de deudas exigibles, generación de borradores GDE
- **NO PUEDE HACER**: Emitir actos administrativos, adoptar decisiones de fondo, firmar documentos, sustanciar el mérito del proyecto

## Gaps de producción abiertos

1. Integración API RUPECO (verificación en tiempo real)
2. Integración API ARCA/AFIP (control de deudas)
3. Integración GDE (incorporación real de documentos)
4. Hash SHA-256 real en PNL (actualmente simulado)
5. Autenticación de agente (LDAP/AD o GDE-auth)
6. Persistencia de sesión (base de datos con journaling inmutable)
7. Validación CUIT contra padrón real ARCA
8. Firma digital real en Kill Switch (token FNMT o equivalente)
9. Notificaciones proactivas (integración GDE o correo institucional)
10. Accesibilidad WCAG AA (aria-labels, contraste verificado)

## Versión

- v5.0 — Abril 2026
- Proyecto académico — IALAB / UBA
- No apto para uso en producción sin intervención de ONTI y autoridad de protección de datos (art. 29, Ley 25.326)

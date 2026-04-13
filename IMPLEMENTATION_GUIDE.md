# Sistema Penélope FFSU v5 — Implementation Guide

## Project Status

This document provides detailed guidance for completing the remaining components of Sistema Penélope FFSU v5.

### Completed Components ✅

1. **HTML Structure** (`index.html`)
   - Complete application shell
   - Sidebar navigation
   - Top bar with search and actions
   - Modal overlay system
   - Toast notifications container
   - All required JavaScript includes

2. **CSS Styles** (`css/`)
   - `tokens.css` — Design tokens (colors, spacing, typography)
   - `layout.css` — Layout system (sidebar, topbar, grid)
   - `components.css` — UI components (cards, buttons, badges, forms, tables)

3. **Core JavaScript** (`js/`)
   - `data.js` — Mock data for expedientes, sujetos, líneas, deudas, normas, plazos
   - `utils.js` — Utility functions (formatting, modals, toasts, search)
   - `router.js` — Hash-based routing system
   - `app.js` — Main application controller

### Pending Components ⏳

The following 9 view files need to be created in `js/views/`:

1. `dashboard.js` — Overview with KPIs and recent activity
2. `expedientes.js` — Expedientes list and management
3. `lineas.js` — Líneas de crédito catalog
4. `sujetos.js` — Sujetos directory
5. `deudas.js` — Deudas tracking
6. `normas.js` — Normas aplicables reference
7. `plazos.js` — Plazos procesales calendar
8. `simulador.js` — Credit simulation tool
9. `reportes.js` — Reports and analytics

---

## Implementation Pattern for View Files

Each view file should follow this structure:

```javascript
// js/views/VIEWNAME.js
(function() {
  'use strict';
  
  window.Views = window.Views || {};
  
  window.Views.VIEWNAME = function() {
    return `
      <div class="view-header">
        <h1>View Title</h1>
        <div class="view-actions">
          <!-- Action buttons -->
        </div>
      </div>
      <div class="view-content">
        <!-- Main content here -->
      </div>
    `;
  };
})();
```

---

## Detailed View Specifications

### 1. Dashboard (`js/views/dashboard.js`)

**Purpose**: Overview of system status with key metrics

**Components**:
- 4 KPI cards showing:
  - Total expedientes (with estado breakdown)
  - Líneas de crédito activas
  - Sujetos registrados
  - Deudas pendientes (monto total)
- Recent expedientes table (últimos 5)
- Próximos plazos vencimientos

**Data Access**:
- `DATA.expedientes`
- `DATA.lineasCredito`
- `DATA.sujetos`
- `DATA.deudas`
- `DATA.plazos`

**Example Structure**:
```javascript
window.Views.dashboard = function() {
  const exps = DATA.expedientes;
  const lineas = DATA.lineasCredito.filter(l => l.vigente);
  
  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-value">${exps.length}</div>
        <div class="kpi-label">Expedientes</div>
      </div>
      <!-- More KPIs -->
    </div>
    <div class="recent-activity">
      <h3>Últimos Expedientes</h3>
      <!-- Table here -->
    </div>
  `;
};
```

### 2. Expedientes (`js/views/expedientes.js`)

**Purpose**: Listado y gestión de expedientes FFSU

**Features**:
- Tabla con todos los expedientes
- Filtros por estado
- Búsqueda por número/sujeto
- Ver detalle de expediente (modal)

**Data Access**: `DATA.expedientes`, `DATA.sujetos`, `DATA.lineasCredito`, `DATA.deudas`

**Table Columns**:
- ID Expediente
- Fecha
- Sujeto (lookup from `DATA.sujetos`)
- Línea de Crédito
- Monto
- Estado (badge)
- Acciones (Ver detalle)

### 3. Líneas de Crédito (`js/views/lineas.js`)

**Purpose**: Catálogo de líneas de crédito disponibles

**Features**:
- Cards mostrando cada línea
- Indicador de vigencia
- Normativa aplicable
- Condiciones (monto máximo, tasa, plazo)

**Data Access**: `DATA.lineasCredito`, `DATA.normas`

### 4. Sujetos (`js/views/sujetos.js`)

**Purpose**: Directorio de solicitantes

**Features**:
- Tabla de sujetos
- Distinguir persona física vs jurídica
- Expedientes asociados
- Datos de contacto

**Data Access**: `DATA.sujetos`, `DATA.expedientes`

### 5. Deudas (`js/views/deudas.js`)

**Purpose**: Seguimiento de obligaciones

**Features**:
- Listado de deudas
- Filtro por estado
- Vinculación a expediente
- Montos original y actual

**Data Access**: `DATA.deudas`, `DATA.expedientes`, `DATA.sujetos`

### 6. Normas Aplicables (`js/views/normas.js`)

**Purpose**: Repositorio normativo

**Features**:
- Listado de normas
- Tipo (Reglamento/Resolución)
- Links externos
- Búsqueda por título/número

**Data Access**: `DATA.normas`

### 7. Plazos Procesales (`js/views/plazos.js`)

**Purpose**: Calendario de etapas procedimentales

**Features**:
- Tabla de etapas
- Plazos en días
- Responsable (ENACOM/Administrado)
- Normativa de referencia

**Data Access**: `DATA.plazos`

### 8. Simulador (`js/views/simulador.js`)

**Purpose**: Herramienta de cálculo de crédito

**Features**:
- Form para ingresar monto solicitado
- Selector de línea de crédito
- Cálculo de condiciones
- Resultado con resumen

**Data Access**: `DATA.lineasCredito`

### 9. Reportes (`js/views/reportes.js`)

**Purpose**: Análisis y estadísticas

**Features**:
- Gráficos (placeholder text)
- Estadísticas agregadas
- Filtros temporales

**Data Access**: All `DATA` objects

---

## Quick Start for Missing View Files

Create minimal placeholder files:

```javascript
// js/views/dashboard.js
(function() {
  window.Views = window.Views || {};
  window.Views.dashboard = function() {
    const exps = DATA.expedientes;
    return `
      <div class="view-header"><h1>Dashboard</h1></div>
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-value">${exps.length}</div>
          <div class="kpi-label">Expedientes</div>
        </div>
      </div>
    `;
  };
})();
```

Repeat for all 9 views with appropriate titles and basic content.

---

## Testing

1. Open `index.html` in a web browser
2. Check browser console for errors
3. Navigate through all views using sidebar
4. Test responsive layout
5. Verify data displays correctly

---

## Next Steps

1. Create all 9 view files in `js/views/`
2. Implement detailed views progressively
3. Add interactivity (click handlers, filters)
4. Deploy to GitHub Pages
5. Iterate based on feedback

---

**Prepared for**: Mariana Posadas  
**Date**: January 2025  
**Version**: 1.0

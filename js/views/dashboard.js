// dashboard.js - Dashboard view for Sistema Penélope FFSU v5
(function() {
  'use strict';
  
  window.Views = window.Views || {};
  
  window.Views.dashboard = function() {
    const exps = DATA.expedientes;
    const lineas = DATA.lineasCredito.filter(l => l.vigente);
    const sujetos = DATA.sujetos;
    const deudas = DATA.deudas;
    
    // Calculate KPIs
    const totalMonto = deudas.reduce((sum, d) => sum + d.montoActual, 0);
    
    return `
      <div class="view-header">
        <h1>Dashboard — Sistema Penélope FFSU</h1>
      </div>
      
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-value">${exps.length}</div>
          <div class="kpi-label">Expedientes</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-value">${lineas.length}</div>
          <div class="kpi-label">Líneas Activas</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-value">${sujetos.length}</div>
          <div class="kpi-label">Sujetos</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-value">${UTILS.formatCurrency(totalMonto)}</div>
          <div class="kpi-label">Deudas Totales</div>
        </div>
      </div>
      
      <div class="view-content">
        <div class="card">
          <div class="card-header">
            <h3>Últimos Expedientes</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="sp-table">
                <thead>
                  <tr>
                    <th>Expediente</th>
                    <th>Fecha</th>
                    <th>Sujeto</th>
                    <th>Monto</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  ${exps.map(exp => {
                    const sujeto = sujetos.find(s => s.id === exp.sujeto);
                    return `
                      <tr>
                        <td><code>${exp.id}</code></td>
                        <td>${UTILS.formatDate(exp.fecha)}</td>
                        <td>${sujeto ? sujeto.nombreCompleto || sujeto.razonSocial : exp.sujeto}</td>
                        <td>${UTILS.formatCurrency(exp.monto)}</td>
                        <td><span class="sp-badge ${UTILS.getEstadoBadgeClass(exp.estado)}">${UTILS.getEstadoLabel(exp.estado)}</span></td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  };
})();

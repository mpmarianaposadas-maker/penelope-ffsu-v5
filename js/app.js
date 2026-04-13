// app.js - Main application controller for Sistema Penélope FFSU v5

document.addEventListener('DOMContentLoaded', () => {
  console.log('🟢 Sistema Penélope FFSU v5 iniciado');
  
  // Initialize UI event listeners
  initEventListeners();
  
  // Register routes
  registerRoutes();
  
  // Initialize router
  Router.init();
});

function initEventListeners() {
  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
  
  // Global search
  const globalSearch = document.getElementById('globalSearch');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      // TODO: Implement global search
      console.log('Search:', e.target.value);
    });
  }
  
  // Nuevo expediente button
  const btnNuevoExp = document.getElementById('btnNuevoExp');
  if (btnNuevoExp) {
    btnNuevoExp.addEventListener('click', () => {
      UTILS.showModal(
        'Nuevo Expediente',
        '<p>Funcionalidad en desarrollo...</p>',
        '<button class="btn btn-secondary" onclick="UTILS.hideModal()">Cerrar</button>'
      );
    });
  }
  
  // Modal close
  const modalClose = document.getElementById('modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', () => UTILS.hideModal());
  }
  
  // Modal overlay click
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) UTILS.hideModal();
    });
  }
  
  // Sidebar navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function registerRoutes() {
  // Register all view routes
  Router.addRoute('dashboard', () => renderView('dashboard'));
  Router.addRoute('expedientes', () => renderView('expedientes'));
  Router.addRoute('lineas', () => renderView('lineas'));
  Router.addRoute('sujetos', () => renderView('sujetos'));
  Router.addRoute('deudas', () => renderView('deudas'));
  Router.addRoute('normas', () => renderView('normas'));
  Router.addRoute('plazos', () => renderView('plazos'));
  Router.addRoute('simulador', () => renderView('simulador'));
  Router.addRoute('reportes', () => renderView('reportes'));
}

function renderView(viewName) {
  const container = document.getElementById('viewContainer');
  const breadcrumb = document.getElementById('breadcrumb');
  
  // Update breadcrumb
  const breadcrumbTitles = {
    dashboard: 'Dashboard',
    expedientes: 'Expedientes',
    lineas: 'Líneas de Crédito',
    sujetos: 'Sujetos',
    deudas: 'Deudas',
    normas: 'Normas Aplicables',
    plazos: 'Plazos Procesales',
    simulador: 'Simulador',
    reportes: 'Reportes'
  };
  if (breadcrumb) breadcrumb.textContent = breadcrumbTitles[viewName] || viewName;
  
  // Check if view renderer exists
  if (window.Views && window.Views[viewName]) {
    container.innerHTML = window.Views[viewName]();
  } else {
    // Fallback placeholder
    container.innerHTML = `
      <div class="placeholder-view">
        <h2>${breadcrumbTitles[viewName]}</h2>
        <p>Vista en desarrollo...</p>
      </div>
    `;
  }
}

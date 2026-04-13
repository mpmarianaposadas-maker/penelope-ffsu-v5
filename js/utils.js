// utils.js - Utility functions for Sistema Penélope FFSU v5

// Format currency
function formatCurrency(amount, currency = 'ARS') {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// Format date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('es-AR').format(date);
}

// Format relative date (ej: "hace 2 días")
function formatRelativeDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'Hoy';
  if (days === 1) return 'Ayer';
  if (days < 30) return `Hace ${days} días`;
  if (days < 365) return `Hace ${Math.floor(days/30)} meses`;
  return `Hace ${Math.floor(days/365)} años`;
}

// Get estado badge class
function getEstadoBadgeClass(estado) {
  const map = {
    'en_tramite': 'sp-badge-pend',
    'observado': 'sp-badge-venc',
    'aprobado': 'sp-badge-code',
    'rechazado': 'sp-badge-info',
    'pendiente_aprobacion': 'sp-badge-pend',
    'observada': 'sp-badge-venc',
    'aprobada': 'sp-badge-code'
  };
  return map[estado] || 'sp-badge-info';
}

// Get estado label
function getEstadoLabel(estado) {
  const map = {
    'en_tramite': 'En Trámite',
    'observado': 'Observado',
    'aprobado': 'Aprobado',
    'rechazado': 'Rechazado',
    'pendiente_aprobacion': 'Pendiente',
    'observada': 'Observada',
    'aprobada': 'Aprobada'
  };
  return map[estado] || estado;
}

// Show toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Show modal
function showModal(title, bodyHTML, footerHTML = '') {
  const overlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalFooter = document.getElementById('modalFooter');
  
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHTML;
  modalFooter.innerHTML = footerHTML;
  overlay.style.display = 'flex';
}

// Hide modal
function hideModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.style.display = 'none';
}

// Search in array
function searchInObjects(array, query, fields) {
  const lowerQuery = query.toLowerCase();
  return array.filter(obj => {
    return fields.some(field => {
      const value = obj[field];
      return value && String(value).toLowerCase().includes(lowerQuery);
    });
  });
}

// Export to window
window.UTILS = {
  formatCurrency,
  formatDate,
  formatRelativeDate,
  getEstadoBadgeClass,
  getEstadoLabel,
  showToast,
  showModal,
  hideModal,
  searchInObjects
};

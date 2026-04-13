// router.js - Simple hash-based router

const Router = {
  routes: {},
  currentView: null,
  
  addRoute(path, handler) {
    this.routes[path] = handler;
  },
  
  navigate(path) {
    window.location.hash = path;
  },
  
  handleRoute() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    const handler = this.routes[hash];
    
    if (handler) {
      this.currentView = hash;
      handler();
    } else {
      this.navigate('dashboard');
    }
  },
  
  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }
};

window.Router = Router;

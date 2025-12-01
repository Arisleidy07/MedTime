// ========================================
// MAIN APPLICATION INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

function initializeApp() {
  loadFromLocalStorage();
  setupNavigation();
  setupHamburgerMenu();
  setupFormHandlers();
  setupVideoRotation();
  renderMedications();
  renderHistory();
  checkEmptyStates();
}

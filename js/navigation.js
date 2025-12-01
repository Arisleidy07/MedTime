// ========================================
// NAVIGATION SYSTEM
// ========================================

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, [data-page]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      let targetPage = link.getAttribute('href')?.replace('#', '') || link.getAttribute('data-page');
      
      const navMobile = document.getElementById('navMobile');
      if (navMobile) {
        navMobile.classList.remove('show');
      }
      
      navigateToPage(targetPage);
    });
  });
}

function navigateToPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${pageId}` || link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });
  
  checkEmptyStates();
}

function setupHamburgerMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navMobile = document.getElementById('navMobile');
  
  if (menuBtn && navMobile) {
    menuBtn.addEventListener('click', () => {
      navMobile.classList.toggle('show');
    });
  }
}

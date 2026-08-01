function showSection(section) {
  const supportedSections = [
    'tech-stack',
    'xion',
    'vara',
    'vinuchain',
    'q402',
    'yellow',
    'bitcoin',
    'starknet',
    'base',
    'kite',
    'uniswap',
    'cowswap',
    'injective'
  ];

  const sections = document.querySelectorAll('.tech-stack-section');
  const matchedSection = supportedSections.includes(section) ? section : null;

  sections.forEach(sectionEl => {
    sectionEl.style.display = matchedSection && sectionEl.id === matchedSection ? 'block' : 'none';
  });

  if (matchedSection) {
    document.body.setAttribute('data-route-section', matchedSection);
  } else {
    document.body.removeAttribute('data-route-section');
  }
}

function handleRouteFromLocation() {
  const hash = window.location.hash.replace('#', '').trim();
  showSection(hash || 'home');
}

document.addEventListener('DOMContentLoaded', handleRouteFromLocation);
window.addEventListener('hashchange', handleRouteFromLocation);

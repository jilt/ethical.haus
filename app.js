function openPage(id) {
  document.querySelectorAll('.subpage').forEach(el => el.classList.remove('active'));
  document.body.classList.add('modal-open');

  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

function closePages() {
  document.querySelectorAll('.subpage').forEach(el => el.classList.remove('active'));
  document.body.classList.remove('modal-open');
}

function scrollToRoadmap() {
  const roadmap = document.getElementById('roadmap');
  if (roadmap) {
    roadmap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.getElementById('hero-image');
  if (heroImage) {
    heroImage.style.backgroundPosition = 'center';
  }

  const stackButtons = document.querySelectorAll('.stack-button');
  const stackCards = document.querySelectorAll('.stack-card');

  stackButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      stackButtons.forEach(item => item.classList.remove('active'));
      stackCards.forEach(card => card.classList.remove('active'));

      button.classList.add('active');
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add('active');
      }
    });
  });
});

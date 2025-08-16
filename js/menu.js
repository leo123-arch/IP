document.addEventListener('DOMContentLoaded', function () {
  const popup      = document.getElementById('popup');
  const closeBtn   = document.getElementById('close');
  const popupImg   = document.getElementById('popup-img');
  const popupTitle = document.getElementById('popup-title');
  const popupDesc  = document.getElementById('popup-desc');
  const popupPrice = document.getElementById('popup-price');
  const popupFullDesc = document.getElementById('popup-full-desc');

  document.body.addEventListener('click', (e) => {
    const card = e.target.closest('.menu-card');
    if (!card) return;

    popupImg.src           = card.querySelector('img')?.src || '';
    popupTitle.textContent = card.querySelector('h3')?.textContent || '';
    popupDesc.textContent  = card.querySelector('p')?.textContent || '';
    popupPrice.textContent = card.querySelector('.price')?.textContent || '';
    popupFullDesc.textContent = card.dataset.description || '';

    popup.classList.add('active');
  });

  closeBtn.addEventListener('click', () => popup.classList.remove('active'));
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.classList.remove('active');
  });
});
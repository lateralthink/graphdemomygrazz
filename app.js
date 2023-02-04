const setupMobileMenu = () => {
  let icon = document.getElementById('icon');

  const mobile = document.getElementById('mobile');
  icon.addEventListener('click', () => {
    mobile.style.display = mobile.style.display === 'none' ? 'block' : 'none';
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
  });
}

const setupSlider = () => {
  new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 5000 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });
};
// controlo de visualização do toast de notificação
function showtoast(message) {
  const toast = document.getElementById('toast-notif');
  if (toast) {
    toast.textContent = message.toLowerCase();
    toast.classList.remove('hidden');

    toast.animate([
      { opacity: 0, transform: 'translate3d(0, 8px, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ], {
      duration: 150,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'forwards'
    });

      setTimeout(() => {
      toast.classList.add('hidden');
    }, 2000);
  }
}

// controle do footer e header fixos baseados na rolagem da página
document.addEventListener('DOMContentLoaded', () => {
  let lastScrollY = window.scrollY;
  const footerFixo = document.getElementById('footer-fixo');
  const headerFixo = document.getElementById('header-fixo');
  
  if (footerFixo || headerFixo) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // se a página scrolla até o fim (com margem de 20px), o footer e o header aparecem
      if (currentScrollY + windowHeight >= documentHeight - 20) {
        if (footerFixo) footerFixo.style.transform = 'translateY(0)';
        if (headerFixo) headerFixo.style.transform = 'translateY(0)';
      } 
      // se scrolla para baixo, esconde o footer e desliza o header até sobrar apenas as barras de cores (h-3 = 0.75rem)
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        if (footerFixo) footerFixo.style.transform = 'translateY(100%)';
        if (headerFixo) headerFixo.style.transform = 'translateY(calc(-100% + 0.75rem))';
      } 
      // se scrolla para cima ou está no topo, reaparecem ambos
      else {
        if (footerFixo) footerFixo.style.transform = 'translateY(0)';
        if (headerFixo) headerFixo.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    });
  }
});

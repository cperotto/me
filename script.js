// guarda o estado da aba activa atualmente
let current_active_tab = 'sobre';

// Definição dos Web Components para os componentes reutilizáveis
class SwissMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav id="menu-grelha" class="flex flex-wrap gap-2">
  <button id="grelha-sobre" onclick="nav_to('sobre')"
    class="square-btn px-4 py-2 border-2 text-xs font-bold tracking-wider border-ink text-ink">
    [ /sobre ]
  </button>
  <button id="grelha-acadêmico" onclick="nav_to('acadêmico')"
    class="square-btn px-4 py-2 border-2 text-xs font-bold tracking-wider border-ink text-ink">
    [ /acadêmico ]
  </button>
  <button id="grelha-nutshells" onclick="nav_to('nutshells')"
    class="square-btn px-4 py-2 border-2 text-xs font-bold tracking-wider border-ink text-ink">
    [ /nutshells ]
  </button>
</nav>
    `;
    // sincronizar estado inicial após carregamento do HTML do menu
    sync_menu_states(current_active_tab);
  }
}
customElements.define('swiss-menu', SwissMenu);

class NutshellCard extends HTMLElement {
  connectedCallback() {
    const platform = this.getAttribute('platform') || '';
    const date = this.getAttribute('date') || '';
    const title = this.getAttribute('title') || '';
    const content = this.innerHTML.trim();
    const tagsAttr = this.getAttribute('tags') || '';

    this.innerHTML = `
<div class="border-2 p-6 flex flex-col justify-between space-y-4 border-ink bg-card">
  <div class="space-y-3">
    <div class="flex justify-between items-baseline">
      <span class="text-[10px] font-mono font-bold tracking-widest text-warm-text">${platform}</span>
      <span class="text-[10px] font-mono font-bold text-ink-mid opacity-80">${date}</span>
    </div>
    <!-- título principal em univers -->
    <h3 class="text-lg md:text-xl font-bold font-univers tracking-tight leading-snug text-ink">
      ${title}
    </h3>
    <!-- subtítulo de apoio em plus jakarta sans com contraste e tamanho corretos -->
    <p class="font-geom-body text-sm leading-relaxed text-ink">
      ${content}
    </p>
  </div>
  <!-- etiquetas estilizadas de acordo com o sistema cromático -->
  <div class="flex flex-wrap gap-1.5 text-[9px] font-mono" id="tags-container"></div>
</div>
    `;

    // Renderizar as tags/etiquetas
    const tagsContainer = this.querySelector('#tags-container');
    if (tagsContainer && tagsAttr) {
      const tags = tagsAttr.split(',').map(t => t.trim());
      tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-2 py-0.5 border border-ink bg-surface text-ink-mid';
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });
    }
  }
}
customElements.define('nutshell-card', NutshellCard);

// função de sincronização visual do menu em formato de grelha
function sync_menu_states(tabid) {
  const tabs = ['sobre', 'acadêmico', 'nutshells'];
  tabs.forEach(t => {
    const btn = document.getElementById('grelha-' + t);
    if (btn) {
      if (t === tabid) {
        btn.classList.add('active');
        btn.style.backgroundColor = 'var(--color-ink)';
        btn.style.color = 'var(--color-bg-surface)';
      } else {
        btn.classList.remove('active');
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--color-ink)';
      }
    }
  });
}

// função de navegação interna com micro-animação linear
function nav_to(tabid) {
  const tabs = ['sobre', 'acadêmico', 'nutshells'];
  current_active_tab = tabid;

  tabs.forEach(id => {
    const subpage = document.getElementById('sub-' + id);

    if (id === tabid) {
      // exibir a subpágina correspondente
      subpage.classList.remove('hidden');

      // micro-animação de deslocamento e opacidade (estilo precisão de 8px)
      subpage.animate([
        { opacity: 0, transform: 'translate3d(0, 8px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ], {
        duration: 120,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        fill: 'forwards'
      });

    } else {
      subpage.classList.add('hidden');
    }
  });

  // sincronizar estados visuais de todos os blocos de navegação ativos
  sync_menu_states(tabid);
}

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

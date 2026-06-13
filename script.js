// guarda o estado da aba activa atualmente
let current_active_tab = 'sobre';

// Definição dos Web Components para os componentes reutilizáveis
class SwissMenu extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch('menu.html');
      if (!response.ok) throw new Error('erro ao carregar menu.html');
      const html = await response.text();
      this.innerHTML = html;
      // sincronizar estado inicial após carregamento do HTML do menu
      sync_menu_states(current_active_tab);
    } catch (error) {
      console.error(error);
    }
  }
}
customElements.define('swiss-menu', SwissMenu);

class NutshellCard extends HTMLElement {
  async connectedCallback() {
    try {
      const platform = this.getAttribute('platform') || '';
      const date = this.getAttribute('date') || '';
      const title = this.getAttribute('title') || '';
      const content = this.innerHTML.trim();
      const tagsAttr = this.getAttribute('tags') || '';

      const response = await fetch('card.html');
      if (!response.ok) throw new Error('erro ao carregar card.html');
      let html = await response.text();

      // Substituir placeholders
      html = html.replace('{{platform}}', platform)
                 .replace('{{date}}', date)
                 .replace('{{title}}', title)
                 .replace('{{content}}', content);

      this.innerHTML = html;

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
    } catch (error) {
      console.error(error);
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

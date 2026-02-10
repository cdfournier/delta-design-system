export default {
  title: 'Organisms/Banner',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Hero banner sections with \`.tall\` (100vh) and \`.short\` (50vh) height variants. The \`.text\` wrapper centers content within the banner. Banners use the secondary color as background.`,
      },
    },
  },
};

export const Tall = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="banner tall">
      <div class="text">
        <h1 class="title">Title Heading</h1>
        <p>This is a tall banner that occupies the full viewport height. It uses the <code>.banner.tall</code> classes.</p>
      </div>
    </div>
  `;
  return el;
};

export const Short = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="banner short">
      <div class="text">
        <h1 class="title">Title Heading</h1>
        <p>This is a short banner that occupies half the viewport height. It uses the <code>.banner.short</code> classes.</p>
      </div>
    </div>
  `;
  return el;
};

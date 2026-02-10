export default {
  title: 'Molecules/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_molecules/_cards.scss\` to add styles.\n\nCards display content in vertical or horizontal layouts with an image, heading, and description. Horizontal cards support default, reverse, and mobile directions.`,
      },
    },
  },
};

const cardBaseStyle = 'border: 1px solid var(--gray-medium); border-radius: var(--border-radius-md); overflow: hidden; max-width: 480px; font-family: Montserrat, sans-serif;';

export const Vertical = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card card--vertical" style="${cardBaseStyle}">
      <img src="/assets/images/boston.jpg" alt="Example" style="width: 100%; height: 200px; object-fit: cover;">
      <div style="padding: var(--spacing-lg);">
        <h3>Card Title</h3>
        <p>Card description text goes here. This is a vertical card layout.</p>
        <a href="#">Learn more</a>
      </div>
    </div>
  `;
  return el;
};

export const HorizontalDefault = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card card--horizontal" style="${cardBaseStyle} display: flex; max-width: 600px;">
      <img src="/assets/images/boston.jpg" alt="Example" style="width: 200px; object-fit: cover;">
      <div style="padding: var(--spacing-lg); flex: 1;">
        <h3>Card Title</h3>
        <p>Card description text goes here. This is a horizontal card layout with the image on the left.</p>
        <a href="#">Learn more</a>
      </div>
    </div>
  `;
  return el;
};

export const HorizontalReverse = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card card--horizontal card--reverse" style="${cardBaseStyle} display: flex; flex-direction: row-reverse; max-width: 600px;">
      <img src="/assets/images/boston.jpg" alt="Example" style="width: 200px; object-fit: cover;">
      <div style="padding: var(--spacing-lg); flex: 1;">
        <h3>Card Title</h3>
        <p>Card description text goes here. This is a horizontal card layout with the image on the right.</p>
        <a href="#">Learn more</a>
      </div>
    </div>
  `;
  return el;
};

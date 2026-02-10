export default {
  title: 'Layouts/Grid',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Delta Design System uses a flexbox-based responsive grid. The parent container is a \`.row\` with a modifier class that defines how child \`.column\` elements divide horizontal space. Below 48rem, all columns stack full-width.`,
      },
    },
  },
};

const columnStyle = 'background: var(--gray-light); padding: var(--spacing-lg); border: 1px dashed var(--gray-medium); border-radius: var(--border-radius-sm);';

export const Wide = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl);">
      <h3>Wide Row</h3>
      <p>A <code>.wide</code> row occupies 100% of the available width on screens of all widths.</p>
      <div class="row wide">
        <div class="column" style="${columnStyle}">
          <p>Full-width column</p>
        </div>
      </div>
    </article>
  `;
  return el;
};

export const FiftyFifty = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl);">
      <h3>Fifty Fifty Row</h3>
      <p>Columns in a <code>.fifty</code> row occupy 50% of the available width on screens wider than 48rem.</p>
      <div class="row fifty">
        <div class="column" style="${columnStyle}">
          <h4>Left Column</h4>
          <p>50% width at desktop</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Right Column</h4>
          <p>50% width at desktop</p>
        </div>
      </div>
    </article>
  `;
  return el;
};

export const GoldenLeft = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl);">
      <h3>Golden Left Row</h3>
      <p>The left column occupies 62% and the right column 38% on screens wider than 48rem.</p>
      <div class="row golden-left">
        <div class="column" style="${columnStyle}">
          <h4>Left Column (62%)</h4>
          <p>Golden ratio — wider side</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Right Column (38%)</h4>
          <p>Golden ratio — narrower side</p>
        </div>
      </div>
    </article>
  `;
  return el;
};

export const GoldenRight = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl);">
      <h3>Golden Right Row</h3>
      <p>The left column occupies 38% and the right column 62% on screens wider than 48rem.</p>
      <div class="row golden-right">
        <div class="column" style="${columnStyle}">
          <h4>Left Column (38%)</h4>
          <p>Golden ratio — narrower side</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Right Column (62%)</h4>
          <p>Golden ratio — wider side</p>
        </div>
      </div>
    </article>
  `;
  return el;
};

export const Thirds = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl);">
      <h3>Thirds Row</h3>
      <p>Columns in a <code>.thirds</code> row each occupy 33% of the available width on screens wider than 48rem.</p>
      <div class="row thirds">
        <div class="column" style="${columnStyle}">
          <h4>First Column</h4>
          <p>33% width</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Second Column</h4>
          <p>33% width</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Third Column</h4>
          <p>33% width</p>
        </div>
      </div>
    </article>
  `;
  return el;
};

export const Fourths = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl);">
      <h3>Fourths Row</h3>
      <p>Columns in a <code>.fourths</code> row occupy 50% on screens wider than 48rem and 25% on screens wider than 64rem.</p>
      <div class="row fourths">
        <div class="column" style="${columnStyle}">
          <h4>First</h4>
          <p>25% width</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Second</h4>
          <p>25% width</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Third</h4>
          <p>25% width</p>
        </div>
        <div class="column" style="${columnStyle}">
          <h4>Fourth</h4>
          <p>25% width</p>
        </div>
      </div>
    </article>
  `;
  return el;
};

export const AllLayouts = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <article style="padding: var(--spacing-xl); display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4>Wide</h4>
        <div class="row wide"><div class="column" style="${columnStyle}"><p>100%</p></div></div>
      </div>
      <div>
        <h4>Fifty</h4>
        <div class="row fifty">
          <div class="column" style="${columnStyle}"><p>50%</p></div>
          <div class="column" style="${columnStyle}"><p>50%</p></div>
        </div>
      </div>
      <div>
        <h4>Golden Left</h4>
        <div class="row golden-left">
          <div class="column" style="${columnStyle}"><p>62%</p></div>
          <div class="column" style="${columnStyle}"><p>38%</p></div>
        </div>
      </div>
      <div>
        <h4>Golden Right</h4>
        <div class="row golden-right">
          <div class="column" style="${columnStyle}"><p>38%</p></div>
          <div class="column" style="${columnStyle}"><p>62%</p></div>
        </div>
      </div>
      <div>
        <h4>Thirds</h4>
        <div class="row thirds">
          <div class="column" style="${columnStyle}"><p>33%</p></div>
          <div class="column" style="${columnStyle}"><p>33%</p></div>
          <div class="column" style="${columnStyle}"><p>33%</p></div>
        </div>
      </div>
      <div>
        <h4>Fourths</h4>
        <div class="row fourths">
          <div class="column" style="${columnStyle}"><p>25%</p></div>
          <div class="column" style="${columnStyle}"><p>25%</p></div>
          <div class="column" style="${columnStyle}"><p>25%</p></div>
          <div class="column" style="${columnStyle}"><p>25%</p></div>
        </div>
      </div>
    </article>
  `;
  return el;
};
AllLayouts.parameters = { controls: { disable: true } };

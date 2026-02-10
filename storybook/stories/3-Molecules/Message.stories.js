export default {
  title: 'Molecules/Message',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_molecules/_messages.scss\` to add styles.\n\nMessages display contextual feedback including modals, promos, confirmations, errors, success alerts, and toasts.`,
      },
    },
  },
};

const baseMessageStyle = 'padding: var(--spacing-lg); border-radius: var(--border-radius-md); font-family: Montserrat, sans-serif; margin-bottom: 1rem;';

export const Confirmation = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="message message--confirmation" style="${baseMessageStyle} background: var(--gray-light); border: 1px solid var(--gray-medium); max-width: 400px;">
      <p>Your changes have been saved.</p>
    </div>
  `;
  return el;
};

export const Error = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="message message--error" style="${baseMessageStyle} background: #fef2f2; border: 1px solid var(--input-invalid); color: var(--input-invalid); max-width: 400px;">
      <p>Something went wrong. Please try again.</p>
    </div>
  `;
  return el;
};

export const Success = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="message message--success" style="${baseMessageStyle} background: #f0fdf4; border: 1px solid var(--input-valid); color: var(--input-valid); max-width: 400px;">
      <p>Operation completed successfully.</p>
    </div>
  `;
  return el;
};

export const Toast = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="message message--toast" style="${baseMessageStyle} background: var(--secondary); color: white; display: inline-flex; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-sm) var(--spacing-lg); border-radius: var(--border-radius-xl);">
      <p style="margin: 0;">Toast notification message</p>
    </div>
  `;
  return el;
};

export const AllTypes = () => {
  const el = document.createElement('div');
  el.style.cssText = 'display: flex; flex-direction: column; gap: 1rem; max-width: 400px;';
  el.appendChild(Confirmation());
  el.appendChild(Error());
  el.appendChild(Success());
  el.appendChild(Toast());
  return el;
};
AllTypes.parameters = { controls: { disable: true } };

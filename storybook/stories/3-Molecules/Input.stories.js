export default {
  title: 'Molecules/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Form input fields with label, placeholder, and validation messages. The fieldset pattern uses CSS transitions to move the label on focus and includes help/error/success message slots. Add \`.invalid\` or \`.valid\` classes to the fieldset to trigger validation states.`,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'tel', 'url', 'number', 'password'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'invalid', 'valid'],
    },
    helpMessage: { control: 'text' },
    errorMessage: { control: 'text' },
    successMessage: { control: 'text' },
  },
};

const Template = ({ label, placeholder, type, state, helpMessage, errorMessage, successMessage }) => {
  const el = document.createElement('div');
  const stateClass = state !== 'default' ? ` class="${state}"` : '';
  const inputClass = state !== 'default' ? ` class="${state}"` : '';
  el.innerHTML = `
    <fieldset${stateClass} style="padding: var(--spacing-md) 0;">
      <label for="demo-input">${label}</label>
      <input type="${type}" name="demo-input" id="demo-input" placeholder="${placeholder}"${inputClass}>
      <div class="message">
        <span class="help">${helpMessage}</span>
        <span class="invalid">${errorMessage}</span>
        <span class="valid">${successMessage}</span>
      </div>
    </fieldset>
  `;
  return el;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  type: 'text',
  state: 'default',
  helpMessage: 'Help message goes here',
  errorMessage: 'Error message goes here',
  successMessage: 'Valid message goes here',
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Default.args,
  state: 'invalid',
};

export const Valid = Template.bind({});
Valid.args = {
  ...Default.args,
  state: 'valid',
};

export const AllStates = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <fieldset style="padding: var(--spacing-md) 0;">
        <label for="default-input">Default</label>
        <input type="text" id="default-input" placeholder="Default state">
        <div class="message">
          <span class="help">Help message goes here</span>
          <span class="invalid">Error message goes here</span>
          <span class="valid">Valid message goes here</span>
        </div>
      </fieldset>

      <fieldset class="invalid" style="padding: var(--spacing-md) 0;">
        <label for="invalid-input">Invalid</label>
        <input type="text" id="invalid-input" placeholder="Invalid state" class="invalid">
        <div class="message">
          <span class="help">Help message goes here</span>
          <span class="invalid">Error message goes here</span>
          <span class="valid">Valid message goes here</span>
        </div>
      </fieldset>

      <fieldset class="valid" style="padding: var(--spacing-md) 0;">
        <label for="valid-input">Valid</label>
        <input type="text" id="valid-input" placeholder="Valid state" class="valid">
        <div class="message">
          <span class="help">Help message goes here</span>
          <span class="invalid">Error message goes here</span>
          <span class="valid">Valid message goes here</span>
        </div>
      </fieldset>
    </div>
  `;
  return el;
};
AllStates.parameters = { controls: { disable: true } };

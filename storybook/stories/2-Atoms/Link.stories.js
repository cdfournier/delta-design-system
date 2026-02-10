export default {
  title: 'Atoms/Link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Links are styled with Montserrat bold, primary color, with a transition to secondary color on hover.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
  },
};

const Template = ({ label, href }) => {
  const el = document.createElement('div');
  el.innerHTML = `<a href="${href}">${label}</a>`;
  return el;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Link text',
  href: '#',
};

export const InParagraph = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <p>This is a paragraph with a <a href="#">link element</a> styled by the design system. Links transition from the primary color to the secondary color on hover.</p>
  `;
  return el;
};
InParagraph.parameters = { controls: { disable: true } };

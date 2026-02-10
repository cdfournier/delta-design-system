export default {
  title: 'Atoms/Blockquote',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_atoms/_blockquotes.scss\` to add styles.\n\nBlockquotes display quoted text with two background variants: section and page.`,
      },
    },
  },
  argTypes: {
    background: {
      control: { type: 'select' },
      options: ['section', 'page'],
    },
    quote: { control: 'text' },
  },
};

const Template = ({ background, quote }) => {
  const el = document.createElement('div');
  const bg = background === 'section' ? 'var(--gray-light)' : 'white';
  el.innerHTML = `
    <blockquote class="blockquote blockquote--${background}" style="padding: var(--spacing-xl); background: ${bg}; border-left: 4px solid var(--primary); margin: 0; font-family: 'Ovo', serif; font-size: var(--h4);">
      <p>${quote}</p>
    </blockquote>
  `;
  return el;
};

export const SectionBackground = Template.bind({});
SectionBackground.args = {
  background: 'section',
  quote: 'Design is not just what it looks like and feels like. Design is how it works.',
};

export const PageBackground = Template.bind({});
PageBackground.args = {
  background: 'page',
  quote: 'Design is not just what it looks like and feels like. Design is how it works.',
};

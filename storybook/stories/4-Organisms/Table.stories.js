export default {
  title: 'Organisms/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system.\n\nTables display structured data with header and body rows. Cells support text, header, and control variants.`,
      },
    },
  },
};

const tableStyle = 'width: 100%; border-collapse: collapse; font-family: Montserrat, sans-serif;';
const thStyle = 'padding: var(--spacing-sm) var(--spacing-lg); text-align: left; border-bottom: 2px solid var(--gray-medium); font-weight: 700;';
const tdStyle = 'padding: var(--spacing-sm) var(--spacing-lg); text-align: left; border-bottom: 1px solid var(--gray-light);';

export const Default = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <table style="${tableStyle}">
      <thead>
        <tr>
          <th style="${thStyle}">Name</th>
          <th style="${thStyle}">Role</th>
          <th style="${thStyle}">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="${tdStyle}">Alice Johnson</td>
          <td style="${tdStyle}">Designer</td>
          <td style="${tdStyle}">Active</td>
        </tr>
        <tr>
          <td style="${tdStyle}">Bob Smith</td>
          <td style="${tdStyle}">Developer</td>
          <td style="${tdStyle}">Active</td>
        </tr>
        <tr>
          <td style="${tdStyle}">Carol Davis</td>
          <td style="${tdStyle}">Manager</td>
          <td style="${tdStyle}">Inactive</td>
        </tr>
      </tbody>
    </table>
  `;
  return el;
};

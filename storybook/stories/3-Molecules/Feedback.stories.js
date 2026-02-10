export default {
  title: 'Molecules/Feedback',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Status: CSS not yet implemented.** This story shows the intended HTML structure from the Figma design system. See \`css/_molecules/_feedback.scss\` to add styles.\n\nFeedback components include progress bars and meters for displaying completion and measured values.`,
      },
    },
  },
};

export const Progress = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label for="progress-demo" style="font-family: Montserrat, sans-serif; font-size: var(--small); display: block; margin-bottom: 0.25rem;">Progress (50%)</label>
        <progress id="progress-demo" value="50" max="100" style="width: 100%; height: 12px;">50%</progress>
      </div>
      <div>
        <label for="progress-demo-2" style="font-family: Montserrat, sans-serif; font-size: var(--small); display: block; margin-bottom: 0.25rem;">Progress (75%)</label>
        <progress id="progress-demo-2" value="75" max="100" style="width: 100%; height: 12px;">75%</progress>
      </div>
    </div>
  `;
  return el;
};

export const Meter = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <div style="max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label for="meter-optimum" style="font-family: Montserrat, sans-serif; font-size: var(--small); display: block; margin-bottom: 0.25rem;">Meter — Optimum</label>
        <meter id="meter-optimum" value="0.8" min="0" max="1" low="0.25" high="0.75" optimum="0.9" style="width: 100%; height: 12px;">80%</meter>
      </div>
      <div>
        <label for="meter-low" style="font-family: Montserrat, sans-serif; font-size: var(--small); display: block; margin-bottom: 0.25rem;">Meter — Low</label>
        <meter id="meter-low" value="0.15" min="0" max="1" low="0.25" high="0.75" optimum="0.9" style="width: 100%; height: 12px;">15%</meter>
      </div>
      <div>
        <label for="meter-high" style="font-family: Montserrat, sans-serif; font-size: var(--small); display: block; margin-bottom: 0.25rem;">Meter — High</label>
        <meter id="meter-high" value="0.9" min="0" max="1" low="0.25" high="0.75" optimum="0.5" style="width: 100%; height: 12px;">90%</meter>
      </div>
    </div>
  `;
  return el;
};

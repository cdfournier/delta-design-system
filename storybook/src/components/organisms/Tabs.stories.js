import picassoBull from '../../images/picasso-bull.jpg';

export default {
  title: 'Organisms/Tabs',
};

export const Documentation = () => {
  return `
    <div class="delta-docs">
      <h1>Tabs</h1>
      <p>A tab system organizes related content into multiple sections within the same space. It allows users to switch between panels by selecting a tab, reducing scrolling and keeping interfaces more concise and navigable.</p>

      <hr />

      <h2>Anatomy</h2>
      <ul>
        <li><strong>Tab list:</strong> A container that groups all tab buttons.</li>
        <li><strong>Tab button:</strong> A label users select to reveal associated content.</li>
        <li><strong>Tab panel:</strong> The content region linked to the active tab.</li>
        <li><strong>Optional figure:</strong> A supporting image or media block inside the panel.</li>
        <li><strong>Content area:</strong> Includes heading, body copy, and optional footer or CTA.</li>
      </ul>

      <div class="component-demo">
        <div class="tabs" data-direction="horizontal">

          <div class="tablist" role="tablist" aria-label="Picasso's Bull">
            <button class="tab-button" role="tab" aria-selected="true" aria-controls="panel-intro" id="tab-intro" tabindex="0" data-style="primary">Intro</button>
            <button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-one" id="tab-one" tabindex="-1" data-style="primary">One</button>
            <button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-two" id="tab-two" tabindex="-1" data-style="primary">Two</button>
            <button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-three" id="tab-three" tabindex="-1" data-style="primary">Three</button>
            <button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-four" id="tab-four" tabindex="-1" data-style="primary">Four</button>
          </div>

          <div class="tabpanels">
            <div class="tab-panel" role="tabpanel" id="panel-intro" aria-labelledby="tab-intro">
              <figure class="tab-figure">
                <img src="${picassoBull}" alt="Pablo Picasso's The Bull, a series of eleven lithographs showing progressive abstraction">
              </figure>
              <div class="tab-content">
                <h3>The Bull by Pablo Picasso – A Lesson in Abstraction</h3>
                <p>Pablo Picasso's The Bull is a series of eleven lithographs created in 1945. It depicts the bull at various stages of abstraction, starting with a fairly realistic depiction and ending with nothing but a few lines.</p>
                <footer class="tab-footer">
                  <p class="tab-fine">by <a href="https://drawpaintacademy.com/the-bull/" target="_blank">Dan Scott</a></p>
                </footer>
              </div>
            </div>

            <div class="tab-panel" role="tabpanel" id="panel-one" aria-labelledby="tab-one" hidden>
              <div class="tab-content">
                <h3>One</h3>
                <p>Content for the first tab panel.</p>
              </div>
            </div>

            <div class="tab-panel" role="tabpanel" id="panel-two" aria-labelledby="tab-two" hidden>
              <div class="tab-content">
                <h3>Two</h3>
                <p>Content for the second tab panel.</p>
              </div>
            </div>

            <div class="tab-panel" role="tabpanel" id="panel-three" aria-labelledby="tab-three" hidden>
              <div class="tab-content">
                <h3>Three</h3>
                <p>Content for the third tab panel.</p>
              </div>
            </div>

            <div class="tab-panel" role="tabpanel" id="panel-four" aria-labelledby="tab-four" hidden>
              <div class="tab-content">
                <h3>Four</h3>
                <p>Content for the fourth tab panel.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr />

      <h2>Variants</h2>
      <ul>
        <li><strong>Direction:</strong> Horizontal or vertical tab list arrangement.</li>
        <li><strong>Style:</strong> Primary or secondary selected-state treatment.</li>
        <li><strong>Panel orientation:</strong> Content may stack vertically or sit side by side.</li>
      </ul>

      <hr />

      <h2>States</h2>
      <ul>
        <li><strong>Default:</strong> Unselected tab buttons are transparent with text-default color.</li>
        <li><strong>Selected:</strong> The active tab is filled with brand color and white text.</li>
        <li><strong>Hover:</strong> Tabs may support hover feedback to indicate interactivity.</li>
        <li><strong>Focus:</strong> Keyboard focus should remain clearly visible.</li>
      </ul>

      <hr />

      <h2>Typography</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Font family</th>
            <th>Font size</th>
            <th>Line height</th>
            <th>Font weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tab button</td>
            <td>Montserrat</td>
            <td><code>components/tab/font-size</code></td>
            <td><code>components/tab/line-height</code></td>
            <td>700</td>
          </tr>
          <tr>
            <td>Panel heading</td>
            <td>Ovo</td>
            <td><code>h3/font-size</code></td>
            <td><code>h3/line-height</code></td>
            <td>400</td>
          </tr>
          <tr>
            <td>Panel body</td>
            <td>Montserrat</td>
            <td><code>p/font-size</code></td>
            <td><code>p/line-height</code></td>
            <td>400</td>
          </tr>
          <tr>
            <td>Panel footer / fine print</td>
            <td>Montserrat</td>
            <td><code>fine/font-size</code></td>
            <td><code>fine/line-height</code></td>
            <td>400 / 700 for link</td>
          </tr>
        </tbody>
      </table>

      <p>The selected tab label remains bold; panel copy follows standard content type tokens for hierarchy and readability.</p>

      <hr />

      <h2>Spacing</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tabs container gap</td>
            <td><code>spacing/md</code></td>
          </tr>
          <tr>
            <td>Tablist padding</td>
            <td><code>spacing/md</code></td>
          </tr>
          <tr>
            <td>Tablist gap</td>
            <td><code>spacing/md</code></td>
          </tr>
          <tr>
            <td>Tab button vertical padding</td>
            <td><code>spacing/sm</code></td>
          </tr>
          <tr>
            <td>Tab button horizontal padding</td>
            <td><code>spacing/md</code></td>
          </tr>
          <tr>
            <td>Tabpanels padding</td>
            <td><code>spacing/md</code></td>
          </tr>
          <tr>
            <td>Panel content padding</td>
            <td><code>spacing/xl</code></td>
          </tr>
          <tr>
            <td>Body spacing above heading</td>
            <td><code>spacing/sm</code></td>
          </tr>
          <tr>
            <td>Footer spacing above body</td>
            <td><code>spacing/xl</code></td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Border-radius</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Horizontal tablist</td>
            <td><code>border-radius/xxl</code></td>
          </tr>
          <tr>
            <td>Tab button</td>
            <td><code>components/button/border-radius</code></td>
          </tr>
          <tr>
            <td>Tabpanels container</td>
            <td><code>border-radius/md</code></td>
          </tr>
          <tr>
            <td>Tab panel</td>
            <td><code>border-radius/md</code></td>
          </tr>
          <tr>
            <td>Figure (horizontal at widescreen)</td>
            <td><code>border-radius/md</code> on left side only</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Colors</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Light mode</th>
            <th>Dark mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tablist / tabpanels background</td>
            <td><code>page/background</code></td>
            <td><code>page/background</code></td>
          </tr>
          <tr>
            <td>Tab panel background</td>
            <td><code>section/background</code></td>
            <td><code>section/background</code></td>
          </tr>
          <tr>
            <td>Unselected tab text</td>
            <td><code>text/default</code></td>
            <td><code>text/default</code></td>
          </tr>
          <tr>
            <td>Selected primary tab</td>
            <td><code>brand/primary</code> with <code>global/white</code> text</td>
            <td><code>brand/primary</code> with <code>global/white</code> text</td>
          </tr>
          <tr>
            <td>Selected secondary tab</td>
            <td><code>brand/secondary</code> with <code>global/white</code> text</td>
            <td><code>brand/secondary</code> with <code>global/white</code> text</td>
          </tr>
          <tr>
            <td>Footer link</td>
            <td><code>text/link</code></td>
            <td><code>text/link</code></td>
          </tr>
        </tbody>
      </table>

      <p>In dark mode, token overrides ensure surfaces and text adapt automatically while brand colors remain consistent for selected tabs and hover treatments.</p>

      <hr />

      <h2>Accessibility</h2>
      <h3>Keyboard navigation</h3>
      <p>Tabs should support arrow-key navigation within the tab list, with Home and End keys moving focus to the first and last tabs where applicable.</p>

      <h3>Screen readers</h3>
      <p>Use the WAI-ARIA tab pattern: <code>role="tablist"</code> on the list, <code>role="tab"</code> on buttons, and <code>role="tabpanel"</code> on panels, linked via <code>aria-controls</code> and <code>aria-labelledby</code>.</p>

      <h3>Focus management</h3>
      <p>Only the active tab should be in the tab order by default; inactive tabs should use <code>tabindex="-1"</code> until focused programmatically.</p>

      <h3>Announcements</h3>
      <p>When selection changes, assistive technologies should announce the newly active tab and associated panel context.</p>

      <h3>Color contrast</h3>
      <p>Ensure text and selected-state fills meet WCAG contrast requirements in both light and dark modes.</p>

      <hr />

      <h2>Usage</h2>
      <h3>When to use</h3>
      <ul>
        <li>To organize related content into digestible sections within a shared area.</li>
        <li>When users benefit from switching between categories, views, or grouped information.</li>
        <li>When the number of sections is limited and labels remain concise.</li>
      </ul>

      <h3>When not to use</h3>
      <ul>
        <li>For long, complex navigation systems better suited to sidebars or separate pages.</li>
        <li>When tab labels are too long to fit comfortably.</li>
        <li>When users need to compare content across panels simultaneously.</li>
      </ul>

      <h3>Content guidelines</h3>
      <ul>
        <li>Keep tab labels short, descriptive, and scannable.</li>
        <li>Use consistent content structure across panels when possible.</li>
        <li>Include optional media only when it adds clarity or context.</li>
      </ul>

      <h3>Best practices</h3>
      <table>
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Keep labels concise and distinct</td>
            <td>Use long or ambiguous tab labels</td>
          </tr>
          <tr>
            <td>Maintain consistent panel structure</td>
            <td>Mix unrelated layouts without reason</td>
          </tr>
          <tr>
            <td>Hide inactive panels from view</td>
            <td>Show multiple panels when only one should be active</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Code reference</h2>
      <h3>HTML</h3>
      <pre><code>&lt;div class="tabs" data-direction="horizontal"&gt;
  &lt;div class="tablist" role="tablist" aria-label="Picasso's Bull"&gt;
    &lt;button class="tab-button" role="tab" aria-selected="true" aria-controls="panel-intro" id="tab-intro" tabindex="0" data-style="primary"&gt;Intro&lt;/button&gt;
    &lt;button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-one" id="tab-one" tabindex="-1" data-style="primary"&gt;One&lt;/button&gt;
    &lt;button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-two" id="tab-two" tabindex="-1" data-style="primary"&gt;Two&lt;/button&gt;
    &lt;button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-three" id="tab-three" tabindex="-1" data-style="primary"&gt;Three&lt;/button&gt;
    &lt;button class="tab-button" role="tab" aria-selected="false" aria-controls="panel-four" id="tab-four" tabindex="-1" data-style="primary"&gt;Four&lt;/button&gt;
  &lt;/div&gt;

  &lt;div class="tabpanels"&gt;
    &lt;div class="tab-panel" role="tabpanel" id="panel-intro" aria-labelledby="tab-intro"&gt;
      &lt;figure class="tab-figure"&gt;
        &lt;img src="picasso-bull.jpg" alt="Pablo Picasso's The Bull, a series of eleven lithographs showing progressive abstraction"&gt;
      &lt;/figure&gt;
      &lt;div class="tab-content"&gt;
        &lt;h3&gt;The Bull by Pablo Picasso – A Lesson in Abstraction&lt;/h3&gt;
        &lt;p&gt;Pablo Picasso's The Bull is a series of eleven lithographs created in 1945. It depicts the bull at various stages of abstraction, starting with a fairly realistic depiction and ending with nothing but a few lines.&lt;/p&gt;
        &lt;footer class="tab-footer"&gt;
          &lt;p class="tab-fine"&gt;by &lt;a href="https://drawpaintacademy.com/the-bull/" target="_blank"&gt;Dan Scott&lt;/a&gt;&lt;/p&gt;
        &lt;/footer&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="tab-panel" role="tabpanel" id="panel-one" aria-labelledby="tab-one" hidden&gt;
      &lt;div class="tab-content"&gt;
        &lt;h3&gt;One&lt;/h3&gt;
        &lt;p&gt;Content for the first tab panel.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="tab-panel" role="tabpanel" id="panel-two" aria-labelledby="tab-two" hidden&gt;
      &lt;div class="tab-content"&gt;
        &lt;h3&gt;Two&lt;/h3&gt;
        &lt;p&gt;Content for the second tab panel.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="tab-panel" role="tabpanel" id="panel-three" aria-labelledby="tab-three" hidden&gt;
      &lt;div class="tab-content"&gt;
        &lt;h3&gt;Three&lt;/h3&gt;
        &lt;p&gt;Content for the third tab panel.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="tab-panel" role="tabpanel" id="panel-four" aria-labelledby="tab-four" hidden&gt;
      &lt;div class="tab-content"&gt;
        &lt;h3&gt;Four&lt;/h3&gt;
        &lt;p&gt;Content for the fourth tab panel.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS</h3>
      <pre><code>.tabs {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.tablist {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--page-background);
  border-radius: var(--border-radius-xxl);
}

.tab-button {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid transparent;
  background: transparent;
  border-radius: var(--components-button-border-radius);
  font-family: 'Montserrat', sans-serif;
  font-size: var(--components-tab-font-size);
  line-height: var(--components-tab-line-height);
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  color: var(--text-default);
  cursor: pointer;
  transition: all 150ms ease-out;
}

.tab-button[aria-selected="true"][data-style="primary"] {
  background-color: var(--brand-primary);
  border-color: var(--brand-primary);
  color: var(--global-white);
}

.tab-button[aria-selected="true"][data-style="secondary"] {
  background-color: var(--brand-secondary);
  border-color: var(--brand-secondary);
  color: var(--global-white);
}

.tabpanels {
  padding: var(--spacing-md);
  background-color: var(--page-background);
  border-radius: var(--border-radius-md);
}

.tab-panel {
  display: flex;
  flex-direction: column;
  gap: 0;
  background-color: var(--section-background);
  border-radius: var(--border-radius-md);
  overflow: clip;
  min-height: 16rem;
}

@media (min-width: 48rem) {
  .tab-panel {
    flex-direction: row;
    gap: var(--spacing-md);
  }
}

.tab-panel[hidden] {
  display: none;
}

.tab-figure {
  margin: 0;
  overflow: clip;
}

.tab-panel .tab-figure {
  width: 100%;
  aspect-ratio: 1.618;
}

@media (min-width: 48rem) {
  .tab-panel .tab-figure {
    flex: 1;
    align-self: stretch;
    width: auto;
    aspect-ratio: auto;
    border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
  }
}

.tab-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tab-content {
  flex: 1;
  padding: var(--spacing-xl);
}

.tab-content h3 {
  font-family: 'Ovo', Georgia, serif;
  font-size: var(--h3-font-size);
  line-height: var(--h3-line-height);
  font-weight: 400;
  color: var(--text-default);
  margin: 0;
}

.tab-content p {
  font-family: 'Montserrat', sans-serif;
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  color: var(--text-default);
  margin: var(--spacing-sm) 0 0 0;
}

.tab-footer {
  padding-top: var(--spacing-xl);
}

.tab-fine {
  font-family: 'Montserrat', sans-serif;
  font-size: var(--fine-font-size);
  line-height: var(--fine-line-height);
  color: var(--text-default);
  margin: 0;
}

.tab-fine a {
  color: var(--text-link);
  text-decoration: underline;
  font-weight: 700;
}

.tab-fine a:hover {
  color: var(--brand-secondary);
  text-decoration: underline;
}

[data-color-mode="dark"] .tab-fine a:hover {
  color: var(--brand-primary);
}</code></pre>

      <h3>JavaScript</h3>
      <pre><code>const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach((button) =&gt; {
  button.addEventListener('click', () =&gt; {
    const targetPanel = button.getAttribute('aria-controls');

    tabButtons.forEach((tab) =&gt; {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });

    tabPanels.forEach((panel) =&gt; {
      panel.hidden = true;
    });

    button.setAttribute('aria-selected', 'true');
    button.setAttribute('tabindex', '0');
    document.getElementById(targetPanel).hidden = false;
  });
});</code></pre>

      <h3>Design tokens reference</h3>
      <pre><code>/* Typography */
--components/tab/font-size
--components/tab/line-height
--h3/font-size
--h3/line-height
--p/font-size
--p/line-height
--fine/font-size
--fine/line-height

/* Spacing */
--spacing/sm
--spacing/md
--spacing/xl

/* Border-radius */
--components/button/border-radius
--border-radius/md
--border-radius/xxl

/* Colors */
--page/background
--section/background
--text/default
--text/link
--brand/primary
--brand/secondary
--global/white</code></pre>

      <hr />

      <h2>Resources</h2>
      <ul>
        <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/">WAI-ARIA Authoring Practices: Tabs Pattern</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role">MDN: ARIA tab role</a></li>
      </ul>
    </div>
  `;
};

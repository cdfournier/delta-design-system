import './blockquotes.css';

function figureShell(content) {
  return `<section class="dds-blockquotes-fig">${content}</section>`;
}

function blockquoteMarkup(orientation, quote, cite) {
  return `
    <blockquote class="dds-blockquote dds-blockquote--${orientation}">
      <p class="dds-blockquote__quote">${quote}</p>
      <cite><a class="dds-blockquote__cite" href="#">${cite}</a></cite>
    </blockquote>
  `;
}

export function createBlockquotesAnatomyFigure() {
  return figureShell(`
    <div class="dds-blockquotes-fig__card">
      <div class="dds-blockquotes-fig__variants">
        ${blockquoteMarkup(
          'left',
          "We should embrace the fact that the web doesn't have the same constraints, and design for this flexibility.",
          'John Allsopp, A Dao of Web Design',
        )}
        ${blockquoteMarkup(
          'center',
          'If you wish to make an apple pie from scratch, you must first invent the universe.',
          'Carl Sagan, Cosmos',
        )}
        ${blockquoteMarkup(
          'right',
          "Now more than ever, we're designing work meant to be viewed along a gradient of different experiences.",
          'Ethan Marcotte, Responsive Web Design',
        )}
      </div>
    </div>
  `);
}

export function createBlockquotesVariantsFigure() {
  return figureShell(`
    <div class="dds-blockquotes-fig__card">
      <div class="dds-blockquotes-fig__variants">
        ${blockquoteMarkup(
          'left',
          "We should embrace the fact that the web doesn't have the same constraints, and design for this flexibility.",
          'John Allsopp, A Dao of Web Design',
        )}
        ${blockquoteMarkup(
          'center',
          'If you wish to make an apple pie from scratch, you must first invent the universe.',
          'Carl Sagan, Cosmos',
        )}
        ${blockquoteMarkup(
          'right',
          "Now more than ever, we're designing work meant to be viewed along a gradient of different experiences.",
          'Ethan Marcotte, Responsive Web Design',
        )}
      </div>
    </div>
  `);
}

export function createBlockquotesBestPracticesFigure() {
  return figureShell(`
    <div class="dds-blockquotes-fig__do-dont-grid">
      <section class="dds-blockquotes-fig__do">
        <h4 class="dds-blockquotes-fig__column-title">Do</h4>
        <p><strong>Use semantic HTML</strong></p>
        <p>Always use <code>&lt;blockquote&gt;</code> and <code>&lt;cite&gt;</code> tags for proper document structure.</p>
        <p><strong>Attribute external sources</strong></p>
        <p>Include a cite attribution with a link to the source when quoting external content.</p>
        <p><strong>Keep quotes accurate</strong></p>
        <p>Preserve the original wording. Use ellipses to indicate omitted content.</p>
        <p><strong>Introduce the quote</strong></p>
        <p>Provide surrounding text that gives the quote context and relevance.</p>
      </section>
      <section class="dds-blockquotes-fig__dont">
        <h4 class="dds-blockquotes-fig__column-title">Don't</h4>
        <p><strong>Don't misuse for indentation</strong></p>
        <p>Never use blockquotes just to indent or visually offset non-quoted content.</p>
        <p><strong>Don't modify quoted text</strong></p>
        <p>Don't alter quotes to fit your message. Preserve the original meaning.</p>
        <p><strong>Don't use headings inside blockquotes</strong></p>
        <p>Quotes are not headings. Apply blockquote styles via CSS, not heading tags.</p>
        <p><strong>Don't over-use center or right orientations</strong></p>
        <p>Use left as the default. Center and right orientations should be intentional, not decorative.</p>
      </section>
    </div>
  `);
}

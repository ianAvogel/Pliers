import './amendments.css'
import './shared.css'
import { renderSiteNav, renderSkipLink } from './site-shell.js'

document.querySelector('#app').innerHTML = `
  ${renderSkipLink()}
  ${renderSiteNav('amendments')}

  <header class="amend-header">
    <p class="label">Plier Doctrine Archive</p>
    <h1>Amendments</h1>
    <p>Versioned updates that refine, clarify, and extend Plier jurisprudence.</p>
    <p class="page-flow">Page Purpose: track doctrine updates. Next Step: return to Manifesto summary.</p>
    <div class="actions">
      <a href="/index.html">Manifesto</a>
      <a href="/case-law.html">Case Law</a>
      <button id="print-amendments" type="button">Print Amendments</button>
    </div>
  </header>

  <main id="main-content" class="timeline" tabindex="-1">
    <article class="entry">
      <p class="version">v1.1 · April 2026</p>
      <h2>The Split-Roll Clarification</h2>
      <p>
        Rolls that are cut deep but remain connected at one seam are recognized
        as valid unified hinges under Plier law.
      </p>
    </article>

    <article class="entry">
      <p class="version">v1.2 · April 2026</p>
      <h2>The Vault Distinction</h2>
      <p>
        Closed-edge forms such as calzones are formally classified as Vaults,
        a sealed derivative lineage of the Plier family.
      </p>
    </article>

    <article class="entry">
      <p class="version">v1.3 · April 2026</p>
      <h2>Transit Fold Rule</h2>
      <p>
        Folding for transport does not alter base identity. Pizza and flatbreads
        remain in their native classes unless engineered for pinch mechanics.
      </p>
    </article>

    <article class="entry">
      <p class="version">v1.4 · April 2026</p>
      <h2>The Bun Elasticity Note</h2>
      <p>
        Candidate pliers should exhibit compress-and-rebound behavior typical of
        leavened starches, reinforcing the tactile criterion of the pinch.
      </p>
    </article>
  </main>
`

document.querySelector('#print-amendments').addEventListener('click', () => {
  window.print()
})

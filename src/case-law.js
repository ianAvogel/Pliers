import './case-law.css'
import './shared.css'
import { renderSiteNav, renderSkipLink } from './site-shell.js'

document.querySelector('#app').innerHTML = `
  ${renderSkipLink()}
  ${renderSiteNav('case-law')}

  <header class="case-header">
    <p class="kicker">The Plier Method Docket</p>
    <h1>Plier Case Law</h1>
    <p>
      Arguments, precedents, and edge decisions for foods that challenge the
      leavened-hinge doctrine.
    </p>
    <p class="page-flow">Page Purpose: show rulings. Next Step: review version changes in Amendments.</p>
    <div class="header-actions">
      <a href="/index.html">Back to Manifesto</a>
      <a href="/amendments.html">Read Amendments</a>
      <button type="button" id="print-case-law">Print Case Law</button>
    </div>
  </header>

  <main id="main-content" tabindex="-1">
    <section class="case-grid">
      <article class="case-card">
        <h2>Case 001: The Gyro</h2>
        <p class="verdict">Verdict: Qualifies as Plier</p>
        <p>
          Pita is leavened and unified, and serving behavior applies a vertical
          pinch to prevent structural collapse.
        </p>
      </article>

      <article class="case-card">
        <h2>Case 002: The Lobster Roll</h2>
        <p class="verdict">Verdict: Qualifies as Plier</p>
        <p>
          Buttered split-top bun remains a single bread body. Contents are kept
          upright through side compression and hand grip.
        </p>
      </article>

      <article class="case-card">
        <h2>Case 003: The Soft Taco</h2>
        <p class="verdict denied">Verdict: Denied</p>
        <p>
          Though folded, the tortilla is unleavened. The item remains in Taco
          jurisdiction under the Tortilla Line.
        </p>
      </article>

      <article class="case-card">
        <h2>Case 004: Pizza Slice Folded in Half</h2>
        <p class="verdict split">Verdict: Temporary Plier (Transit Only)</p>
        <p>
          Fold action is incidental to transport. Base classification remains
          pizza, consistent with the Pizza Clause.
        </p>
      </article>
    </section>

    <section class="debate">
      <h2>Open Debates</h2>
      <ul>
        <li>Should bao buns with sealed bottoms become "Semi-Closed Pliers"?</li>
        <li>Do split baguettes constitute hinge continuity or stack behavior?</li>
        <li>Can a panini transition from sandwich to plier if unsliced at one edge?</li>
      </ul>
    </section>
  </main>
`

document.querySelector('#print-case-law').addEventListener('click', () => {
  window.print()
})

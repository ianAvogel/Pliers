import './principles.css'
import './shared.css'
import { renderSiteNav, renderSkipLink } from './site-shell.js'

document.querySelector('#app').innerHTML = `
  ${renderSkipLink()}
  ${renderSiteNav('foundations')}

  <header class="hero">
    <p class="kicker">Navigation Key</p>
    <h1>Foundations</h1>
    <p class="subtitle">The core definitions behind the Plier Method.</p>
    <p class="page-flow">Page Purpose: define rules. Next Step: compare categories in Taxonomy.</p>
  </header>

  <main id="main-content" class="grid" tabindex="-1">
    <section class="card">
      <h2>1. Leavened Starch</h2>
      <p>The container must be aerated bread, baked or steamed.</p>
    </section>
    <section class="card">
      <h2>2. Unified Hinge</h2>
      <p>The starch is a single connected piece that cradles filling.</p>
    </section>
    <section class="card">
      <h2>3. The Pinch</h2>
      <p>Consumption relies on a stabilizing side-pressure pinch.</p>
    </section>
    <section class="card">
      <h2>Boundary Rule</h2>
      <p>Tortilla forms remain tacos, even when fold behavior appears similar.</p>
    </section>
  </main>
`

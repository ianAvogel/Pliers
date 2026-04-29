import './style.css'
import './shared.css'
import { renderSiteNav, renderSkipLink } from './site-shell.js'

document.querySelector('#app').innerHTML = `
  ${renderSkipLink()}
  <div class="page-glow" aria-hidden="true"></div>
  ${renderSiteNav('manifesto')}

  <header class="hero">
    <p class="eyebrow">Established April 2026</p>
    <h1>The Plier Manifesto</h1>
    <p class="subtitle">A New Culinary Taxonomy for the Leavened Fold</p>
    <p class="nav-key">
      Navigation Key: Start with Manifesto, then read Foundations and Taxonomy,
      and use Case Law plus Amendments for examples and updates.
    </p>
    <p class="page-flow">Page Purpose: quick orientation. Next Step: open Foundations.</p>
    <div class="hero-actions">
      <a class="btn" href="/The_Plier_Manifesto_Official.pdf" download>Download Official PDF</a>
      <a class="btn btn-alt" href="/Plier_Manifesto.md" download>Download Markdown</a>
      <button class="btn btn-alt" type="button" id="print-manifesto">Print / Save as PDF</button>
      <a class="btn btn-alt" href="/principles.html">Read Foundations</a>
    </div>
  </header>

  <main id="main-content" tabindex="-1">
    <section class="panel intro reveal">
      <h2>What This Is</h2>
      <p>
        This page is the short entry point to the Plier Method. It defines the
        mission and routes you to focused pages so no single page is overloaded.
      </p>
    </section>

    <section class="panel reveal">
      <h2>Read Next</h2>
      <ol class="pillars simple-links">
        <li>
          <h3><a href="/principles.html">Foundations</a></h3>
          <p>The core definitions: leavened starch, unified hinge, and pinch.</p>
        </li>
        <li>
          <h3><a href="/taxonomy.html">Taxonomy</a></h3>
          <p>The side-by-side hierarchy and hall of fame examples.</p>
        </li>
        <li>
          <h3><a href="/case-law.html">Case Law</a></h3>
          <p>Practical rulings for tricky foods and edge scenarios.</p>
        </li>
      </ol>
    </section>

    <section class="panel reveal">
      <h2>Core Statement</h2>
      <p>
        The hot dog is the standard-bearer of the Plier class: a leavened,
        unified hinge food designed for the pinch.
      </p>
    </section>
  </main>

  <footer class="footer">
    <p>Founder: The User</p>
    <p>Developed in collaboration with Gemini (Google)</p>
  </footer>
`

document.querySelector('#print-manifesto').addEventListener('click', () => {
  window.print()
})

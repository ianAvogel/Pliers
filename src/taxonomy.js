import './taxonomy.css'
import './shared.css'
import { renderSiteNav, renderSkipLink } from './site-shell.js'

document.querySelector('#app').innerHTML = `
  ${renderSkipLink()}
  ${renderSiteNav('taxonomy')}

  <header class="hero">
    <p class="kicker">Navigation Key</p>
    <h1>Taxonomy</h1>
    <p class="subtitle">The category map and representative examples.</p>
    <p class="page-flow">Page Purpose: compare categories. Next Step: inspect rulings in Case Law.</p>
  </header>

  <main id="main-content" tabindex="-1">
    <section class="panel">
      <h2>Hierarchy</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Representative</th>
              <th>Starch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plier</td>
              <td>Hot Dog</td>
              <td>Leavened Bun</td>
              <td>The Pinch</td>
            </tr>
            <tr>
              <td>Taco</td>
              <td>Street Taco</td>
              <td>Unleavened Tortilla</td>
              <td>The Fold</td>
            </tr>
            <tr>
              <td>Sandwich</td>
              <td>Club Sandwich</td>
              <td>Sliced Loaf</td>
              <td>The Stack</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="panel">
      <h2>Hall of Fame</h2>
      <ul>
        <li>The King: The American Hot Dog</li>
        <li>The Ancient Ancestor: The Gyro</li>
        <li>The Coastal Variant: The Lobster Roll</li>
        <li>The Eastern Variant: The Gua Bao</li>
      </ul>
    </section>
  </main>
`

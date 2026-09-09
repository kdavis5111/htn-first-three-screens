// The example story, marked up the same way the live site renders one.
const STORY_HTML = `
<article class="story-card">
  <p class="kicker">World · Wednesday, September 9</p>
  <h3 class="headline">US Central Command says it destroyed five more Iranian oil tankers; Brent crude tops $100 a barrel</h3>
  <div class="sum-meta"><span class="chip chip-upd">updated</span></div>
  <p class="update-note"><span class="un-k">What changed</span>Tankers destroyed 3 → 8; Brent crude tops $100/barrel</p>
  <div class="impact-wrap"><p class="impact"><span class="impact-label">Why it matters</span>The number of Iranian oil tankers the US says it has destroyed rose from three last weekend to eight after Tuesday's strikes, and Brent crude crossed $100 a barrel on Wednesday for the first time since late July.</p></div>
  <p class="facts-head">The facts <span class="fcount fc-v"><i>●</i>3 verified</span><span class="fcount"><i>○</i>1 reported</span><span class="fcount fc-d"><i>◐</i>1 disputed</span></p>
  <ul class="facts">
    <li class="fact"><span class="chip status-verified">verified</span><span class="fact-text">US Central Command said it destroyed five Iranian oil tankers on Tuesday, Sept. 8, four in the Gulf of Oman and one near Kharg Island, after Iran's Revolutionary Guard twice tried to hit a US Navy warship with missiles.<span class="corr">— U.S. Central Command statement (primary source), reported by UPI and CBS News.</span></span></li>
    <li class="fact"><span class="chip status-verified">verified</span><span class="fact-text">Iran fired missiles at Muwaffaq Salti Air Base in Jordan. Jordan's military said it intercepted 18 and the other two landed in unpopulated areas, with no casualties.<span class="corr">— Jordan's military statement (primary source), reported by UPI and CBS News.</span></span></li>
    <li class="fact"><span class="chip status-verified">verified</span><span class="fact-text">Brent crude rose above $100 a barrel on Wednesday morning, Sept. 9, the first time since late July.<span class="corr">— BBC News, CBS News and CNBC each report it independently.</span></span></li>
    <li class="fact"><span class="chip status-reported">reported</span><span class="fact-text">Iran's Revolutionary Guard Navy warned crews of tankers near ports in Bahrain and Kuwait to leave their vessels.<span class="corr">— Single origin so far: Reuters.</span></span></li>
    <li class="fact"><span class="chip status-disputed">disputed</span><span class="fact-text">Iran's Revolutionary Guard said its naval forces hit two US warships; CENTCOM says no US warship has been hit.<span class="corr">— Iranian state media (IRNA) vs. U.S. Central Command. Outlets disagree; both accounts shown.</span></span></li>
  </ul>
  <a class="coverage" href="#">Read the full coverage →</a>
</article>`;

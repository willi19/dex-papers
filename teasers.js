// Teaser image resolution, shared by index.html and overview.html.
//
// Source order per paper: local crop under overview_assets/, then the curated
// `image` from papers.js, then a generated SVG placeholder. attachTeaser walks
// that list on each <img> error, so a dead hotlink degrades instead of breaking.
function placeholderTeaser(p) {
  const initials = p.title.split(/\s+/).filter(w => /^[A-Za-z0-9]/.test(w))
    .slice(0, 3).map(w => w[0].toUpperCase()).join("") || "DEX";
  const label = (window.GROUP_LABELS || {})[p._group] || "Paper";
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">' +
    '<defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#24364b"/>' +
    '<stop offset="1" stop-color="#141b25"/></linearGradient></defs>' +
    '<rect width="640" height="360" fill="url(#g)"/>' +
    '<circle cx="560" cy="58" r="130" fill="#6ea8fe" opacity=".12"/>' +
    '<text x="42" y="190" fill="#e6e8ee" font-family="Arial,sans-serif" font-size="78" font-weight="700">' +
    initials + '</text><text x="44" y="244" fill="#8bbce8" font-family="Arial,sans-serif" font-size="28">' +
    label + '</text></svg>';
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function teaserSources(p) {
  const sources = [];
  if (p.id) sources.push("overview_assets/" + p.id + "/teaser.png");
  if (p.image) sources.push(p.image);
  // Curated teasers only (papers.js `image`, or a rendered crop in
  // overview_assets/). Two fallbacks were tried and dropped: the arXiv "x1"
  // figure is as often a results plot as a teaser, and a screenshot of the
  // project/publisher page is journal chrome and an author list. Both put
  // something on the card that says nothing about the paper, which is worse
  // than the placeholder below.
  sources.push(placeholderTeaser(p));
  return [...new Set(sources)];
}
function attachTeaser(img, sources) {
  let index = 0;
  img.onerror = () => {
    index += 1;
    if (index < sources.length) img.src = sources[index];
  };
  img.src = sources[index];
}

window.placeholderTeaser = placeholderTeaser;
window.teaserSources = teaserSources;
window.attachTeaser = attachTeaser;

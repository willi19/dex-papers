// Anti-slop check for the written prose in this repo.
//
//   node scripts/slop-check.mjs                    # every summary in paper_summaries.js
//   node scripts/slop-check.mjs twisting-lids      # one summary
//   node scripts/slop-check.mjs review/README.md   # any prose file
//
// Reports the mechanical tells the stop-slop skill asks you to remove. It counts
// patterns, it does not rewrite. Run the skill to fix what this finds.
import fs from "node:fs";
import vm from "node:vm";

// Words that end in -ly without being adverbs.
const NOT_ADVERBS = new Set(["family","apply","reply","supply","july","italy","assembly",
  "anomaly","only","early","likely","imply","multiply","comply","rely","panoply","monopoly"]);

const FILLER = [
  "it's worth noting", "it is worth noting", "it's important to note",
  "in today's", "in the world of", "when it comes to", "at the end of the day",
  "the fact that", "needless to say", "that being said", "delve", "leverage",
  "seamless", "robust solution", "game-chang", "crucial", "pivotal",
  "here's what", "here's the", "here's how", "let's dive"
];

function scan(label, text) {
  const hits = [];
  const push = (rule, matches) => { if (matches.length) hits.push({rule, count: matches.length, sample: [...new Set(matches)].slice(0, 4)}); };

  push("em dash", text.match(/—/g) || []);
  push("-ly adverb", (text.match(/\b[A-Za-z]{4,}ly\b/g) || []).filter(w => !NOT_ADVERBS.has(w.toLowerCase())));
  push("not X, it's Y", text.match(/\bnot\s[^.;]{1,40},\s(?:it'?s|but)\b/gi) || []);
  push("rhetorical question", text.match(/\?["']?\s+(?:The|It|That|This|Yes|No)\b/g) || []);
  push("filler phrase", FILLER.flatMap(f => text.match(new RegExp(f, "gi")) || []));
  push("triple list", text.match(/\b\w+, \w+,? and \w+\b/g) || []);

  return {label, chars: text.length, hits};
}

function report(rows) {
  let flagged = 0;
  for (const r of rows) {
    if (!r.hits.length) continue;
    flagged++;
    console.log(`\n${r.label}  (${r.chars} chars)`);
    for (const h of r.hits) console.log(`  ${String(h.count).padStart(3)}  ${h.rule.padEnd(18)} ${h.sample.join(" | ")}`);
  }
  console.log(flagged ? `\n${flagged}/${rows.length} flagged. Run the stop-slop skill on these before committing.`
                      : `\n${rows.length} checked, nothing flagged.`);
  return flagged;
}

const arg = process.argv[2];
const root = new URL("../", import.meta.url);

if (arg && fs.existsSync(arg)) {
  process.exit(report([scan(arg, fs.readFileSync(arg, "utf8"))]) ? 1 : 0);
}

const context = vm.createContext({window: {}});
vm.runInContext(fs.readFileSync(new URL("paper_summaries.js", root), "utf8"), context);
const all = context.window.DETAILED_PAPER_SUMMARIES || {};
const keys = arg ? [arg] : Object.keys(all);

const rows = keys.map(k => {
  const p = all[k];
  if (!p) { console.error(`no summary with id "${k}"`); process.exit(2); }
  const prose = JSON.stringify(p).replace(/https?:\/\/\S+?"/g, '"');
  return scan(k, prose);
});
process.exit(report(rows) ? 1 : 0);

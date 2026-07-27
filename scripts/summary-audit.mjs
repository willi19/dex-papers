import fs from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const context = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(new URL("papers.js", root), "utf8"), context);
vm.runInContext(fs.readFileSync(new URL("paper_ideas.js", root), "utf8"), context);

const papers = context.window.PAPERS || [];
const completed = papers.filter(p => p.summary);
const sourceCounts = {
  localPdf: papers.filter(p => p.file).length,
  arxiv: papers.filter(p => p.arxiv).length,
  paper: papers.filter(p => p.paper).length,
  project: papers.filter(p => p.project).length
};

console.log(JSON.stringify({
  total: papers.length,
  completed: completed.length,
  remaining: papers.length - completed.length,
  sourceCounts,
  completedTitles: completed.map(p => p.title)
}, null, 2));

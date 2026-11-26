import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const { ALL_OBJECTIVE_QUESTIONS, ALL_DISCURSIVE_QUESTIONS } = await server.ssrLoadModule('/src/data/allExams.ts');
const { STUDY_MODULES } = await server.ssrLoadModule('/src/data/studyModules.ts');
const { DISCIPLINES } = await server.ssrLoadModule('/src/data/disciplines.ts');
const { FLASHCARDS } = await server.ssrLoadModule('/src/data/flashcards.ts');
const { FORMULAS } = await server.ssrLoadModule('/src/data/formulas.ts');

const ROOT = process.cwd();
const errors = [];

// Official definitive answer keys verified against INEP PDFs
const OFFICIAL_KEYS = {
  'enade-2017': [
    'C','C','B','B','C','E','A','D','E','D','C','A','E','A','B','C','D','B','C','A',
    'E','A','B','B','D','A','D','A','A','A','D','B','A','D','C'
  ],
  'enade-2019': [
    null,'D','C','B','C','C','D','B','E','E','C','B','A','B','E','E','A','D','C','E',
    'B','B','B','C','C','D','D','C','A','D','E','D','A','A','C'
  ],
  'enade-2023': [
    'D','D','B','A','E','C','A','B','E','B','C','A','D','E','C','E','D','B','B','B',
    'A','E','A','D','D','E','C','A','B','E','C','B','D','C','E','C','C','A'
  ],
};

function checkLatex(text, loc) {
  if (!text) return;
  let cleaned = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`]+`/g, '');
  // Protect R$ followed by digits
  cleaned = cleaned.replace(/(^|[^$\\])R\$(?=\s*\d)/g, '$1BRL');

  // Display math $$...$$
  cleaned = cleaned.replace(/\$\$([\s\S]+?)\$\$/g, (_m, expr) => {
    try {
      katex.renderToString(expr.trim(), { displayMode: true, throwOnError: true, strict: false });
    } catch (e) {
      errors.push(`[KaTeX Display] ${loc}: ${e.message} -> ${expr.slice(0, 80)}`);
    }
    return '';
  });

  // Inline math $...$
  cleaned.replace(/\$([^$\n]+?)\$/g, (_m, expr) => {
    if (!expr.trim()) return _m;
    try {
      katex.renderToString(expr.trim(), { displayMode: false, throwOnError: true, strict: false });
    } catch (e) {
      errors.push(`[KaTeX Inline] ${loc}: ${e.message} -> ${expr.slice(0, 80)}`);
    }
    return '';
  });
}

function checkImage(src, loc) {
  if (!src) return;
  const full = path.join(ROOT, 'public', src.replace(/^\//, ''));
  if (!fs.existsSync(full)) {
    errors.push(`[Missing Image] ${loc}: ${src} (${full})`);
  } else {
    const stat = fs.statSync(full);
    if (stat.size < 500) errors.push(`[Tiny/Corrupt Image] ${loc}: ${src} (${stat.size} bytes)`);
  }
}

console.log('=== ENADE COMP MASTER — AUDITORIA COMPLETA ===');
console.log(`Questões Objetivas: ${ALL_OBJECTIVE_QUESTIONS.length}`);
console.log(`Questões Discursivas: ${ALL_DISCURSIVE_QUESTIONS.length}`);
console.log(`Módulos Teóricos: ${STUDY_MODULES.length}`);
console.log(`Flashcards SM-2: ${FLASHCARDS.length}`);
console.log(`Fórmulas: ${FORMULAS.length}`);

// 1. Check objective questions
const seenObjIds = new Set();
const bySource = {};
for (const q of ALL_OBJECTIVE_QUESTIONS) {
  if (seenObjIds.has(q.id)) errors.push(`[Duplicate Objective ID] ${q.id}`);
  seenObjIds.add(q.id);
  bySource[q.source] = (bySource[q.source] || 0) + 1;

  if (q.options.length !== 5) errors.push(`[Options != 5] ${q.id}: ${q.options.length}`);
  if (!q.annulled && !['A', 'B', 'C', 'D', 'E'].includes(q.correctOption)) {
    errors.push(`[Invalid correctOption] ${q.id}: ${q.correctOption}`);
  }
  if (OFFICIAL_KEYS[q.source]) {
    const expected = OFFICIAL_KEYS[q.source][q.number - 1];
    if (q.correctOption !== expected) {
      errors.push(`[Key Mismatch] ${q.id}: got ${q.correctOption}, expected ${expected}`);
    }
  }
  if (!q.explanation || q.explanation.length < 40) errors.push(`[Short Explanation] ${q.id}`);

  checkLatex(q.context, `${q.id}.context`);
  checkLatex(q.command, `${q.id}.command`);
  checkLatex(q.explanation, `${q.id}.explanation`);
  checkLatex(q.keyConcept, `${q.id}.keyConcept`);
  for (const opt of q.options) {
    checkLatex(opt.text, `${q.id}.opt.${opt.letter}`);
    if (opt.image) checkImage(opt.image, `${q.id}.opt.${opt.letter}`);
  }
  if (q.optionAnalysis) {
    for (const [k, v] of Object.entries(q.optionAnalysis)) checkLatex(v, `${q.id}.analysis.${k}`);
  }
  for (const img of q.images || []) checkImage(img.src, `${q.id}.images`);
}
console.log('Por origem (Objetivas):', bySource);

// 2. Check discursive questions
const seenDiscIds = new Set();
for (const d of ALL_DISCURSIVE_QUESTIONS) {
  if (seenDiscIds.has(d.id)) errors.push(`[Duplicate Discursive ID] ${d.id}`);
  seenDiscIds.add(d.id);

  const pSum = Number(d.prompts.reduce((a, b) => a + b.points, 0).toFixed(2));
  const rSum = Number(d.rubricCriteria.reduce((a, b) => a + b.maxPoints, 0).toFixed(2));
  if (Math.abs(pSum - 10) > 0.01) errors.push(`[Prompts Sum != 10] ${d.id}: ${pSum}`);
  if (Math.abs(rSum - 10) > 0.01) errors.push(`[Rubric Sum != 10] ${d.id}: ${rSum}`);

  checkLatex(d.context, `${d.id}.context`);
  checkLatex(d.officialAnswer, `${d.id}.officialAnswer`);
  checkLatex(d.studyTips, `${d.id}.studyTips`);
  for (const img of d.images || []) checkImage(img.src, `${d.id}.images`);
  for (const img of d.officialAnswerImages || []) checkImage(img.src, `${d.id}.officialAnswerImages`);
}

// 3. Check Study Modules
const discIds = new Set(DISCIPLINES.map((d) => d.id));
const modIds = new Set(STUDY_MODULES.map((m) => m.id));
for (const id of discIds) {
  if (!modIds.has(id)) errors.push(`[Missing Study Module] ${id}`);
}
for (const m of STUDY_MODULES) {
  checkLatex(m.overview, `mod.${m.id}.overview`);
  checkLatex(m.enadeWeightNote, `mod.${m.id}.weight`);
  for (const s of m.sections) {
    checkLatex(s.content, `mod.${m.id}.${s.id}`);
    for (const kf of s.keyFormulas || []) {
      try {
        katex.renderToString(kf.latex, { displayMode: true, throwOnError: true, strict: false });
      } catch (e) {
        errors.push(`[KaTeX KeyFormula] mod.${m.id}.${s.id}: ${e.message}`);
      }
    }
  }
}

// 4. Check Flashcards & Formulas
for (const fc of FLASHCARDS) {
  checkLatex(fc.front, `fc.${fc.id}.front`);
  checkLatex(fc.back, `fc.${fc.id}.back`);
}
for (const f of FORMULAS) {
  try {
    katex.renderToString(f.latex, { displayMode: true, throwOnError: true, strict: false });
  } catch (e) {
    errors.push(`[KaTeX Formula] ${f.id}: ${e.message}`);
  }
}

if (errors.length > 0) {
  console.error(`\n❌ ENCONTRADOS ${errors.length} ERROS:`);
  for (const err of errors.slice(0, 40)) console.error(' -', err);
  await server.close();
  process.exit(1);
} else {
  console.log('\n✅ AUDITORIA 100% APROVADA — ZERO ERROS EM TODOS OS DADOS, GABARITOS, IMAGENS E EQUAÇÕES KATEX!');
  await server.close();
}

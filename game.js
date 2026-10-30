export function dayNumber(date = new Date()) { return Math.floor(date.getTime()/86400000); }
export function shuffle(items, random = Math.random) { const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
export function evaluate(groups, selected) { const counts=groups.map(g=>g.words.filter(w=>selected.includes(w)).length); const match=counts.indexOf(4); return {match, oneAway:match<0 && counts.includes(3)}; }
// Fixed permutation: the same UTC day maps to the same puzzle everywhere.
export function schedule(puzzles, day) { let seed=0x5eed1234; const order=shuffle(puzzles,()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}); return order[((day%order.length)+order.length)%order.length]; }
// Version 3 freezes the first 365 boards for dates from 2026-10-30 UTC.
export const YEAR_START = 20756;
export function dailySchedule(puzzles, day) {
  if (day < YEAR_START) return schedule(puzzles.slice(0, 7), day);
  if (puzzles.length < 365) throw new Error('The daily schedule requires 365 boards');
  return schedule(puzzles.slice(0, 365), day - YEAR_START);
}
export function dailyStorageKey(prefix, day) {
  return `${prefix}daily-${day < YEAR_START ? '' : 'v3-'}${day}`;
}
export function validate(puzzles) { const ids=new Set(), boards=new Set(); return puzzles.every(p=>{const groups=p.groups, words=groups.flatMap(g=>g.words), signature=[...words].sort().join('|');if(ids.has(p.id)||boards.has(signature))return false;ids.add(p.id);boards.add(signature);return groups.length===4 && groups.every(g=>g.name && g.words.length===4 && g.words.every(w=>typeof w==='string' && w.trim()===w && w.length>0)) && new Set(words).size===16 && [...groups.map(g=>g.rank)].sort().join(',')==='1,2,3,4';}); }
export function achievement(groups, solved) { const ranks=solved.map(i=>groups[i].rank); return {hardestFirst:ranks[0]===4,descending:ranks.join(',')==='4,3,2,1'}; }
export function record(stats, mode, id, groups, state) { if(state.solved.length!==4 && state.strikes>0) return stats; const next=structuredClone(stats); next[mode] ??= {}; if(next[mode][id])return next; next[mode][id]={won:state.solved.length===4,...achievement(groups,state.solved)}; return next; }
export function totals(records={}) { const values=Object.values(records); return {played:values.length,won:values.filter(x=>x.won).length,hardestFirst:values.filter(x=>x.hardestFirst).length,descending:values.filter(x=>x.descending).length}; }

// Notes are independent hypotheses; migrate the earlier single-color format on read.
export const NOTE_COLORS = ['yellow','green','blue','purple'];
export function normalizeNotes(notes) {
  if (!notes || typeof notes !== 'object' || Array.isArray(notes)) return {};
  const result = {};
  for (const [word, value] of Object.entries(notes)) {
    const values = Array.isArray(value) ? value : [value];
    const colors = NOTE_COLORS.filter(color => values.includes(color));
    if (colors.length) result[word] = colors;
  }
  return result;
}
export function setNote(notes, word, color) {
  const next = normalizeNotes(notes);
  if (!NOTE_COLORS.includes(color)) return next;
  const colors = next[word] || [];
  const toggled = colors.includes(color) ? colors.filter(c => c !== color) : [...colors, color];
  if (toggled.length) next[word] = NOTE_COLORS.filter(c => toggled.includes(c));
  else delete next[word];
  return next;
}

// Earlier saves contain sorted word signatures; recover their results from the same puzzle.
export function guessSignature(words) { return [...words].sort().join('|'); }
export function guessOutcome(groups, words) { const result=evaluate(groups, words); return result.match >= 0 ? 'correct' : result.oneAway ? 'one-away' : 'incorrect'; }
export function normalizeHistory(history, groups) {
  if (!Array.isArray(history)) return [];
  return history.map(entry => {
    if (typeof entry === 'string') {
      const words=entry.split('|');
      return {words, outcome: words.length === 4 ? guessOutcome(groups, words) : 'unknown'};
    }
    return entry;
  });
}
export function hasGuess(history, words) {
  const signature=guessSignature(words);
  return history.some(entry => Array.isArray(entry.words) && guessSignature(entry.words) === signature);
}

// Feedback reflects the most recent submitted guess only, including migrated saves.
export function lastGuessFeedback(history) {
  const last = Array.isArray(history) ? history.at(-1) : null;
  return last && Array.isArray(last.words) && ['incorrect','one-away'].includes(last.outcome)
    ? {outcome:last.outcome, words:last.words} : null;
}

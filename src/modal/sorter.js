import { getTasks } from "./storage.js";

/**
 * Returns tasks sorted by priority given user energy (0-15, sum of 3 quiz sliders).
 * High energy: prefer urgency + importance.
 * Low energy: prefer low effort.
 */
export function getSortedTasks(energy) {
  const tasks = getTasks();
  if (!tasks.length) return [];

  const e = Number(energy) || 0;

  return [...tasks].sort((a, b) => {
    const scoreA = weightedScore(a, e);
    const scoreB = weightedScore(b, e);
    return scoreB - scoreA;
  });
}

function weightedScore(task, energy) {
  const u = Number(task.urgency) || 0;
  const i = Number(task.important) || 0;
  const eff = Number(task.effort) || 0;

  if (energy > 11) {
    return u + i;
  }
  if (energy > 7) {
    return i + u * 0.3;
  }
  if (energy > 4) {
    return u;
  }
  return 5 - eff;
}

/**
 * Returns the best task to show in focus mode, excluding skipped ids.
 */
export function getBestTask(energy, skippedIds = new Set()) {
  const sorted = getSortedTasks(energy);
  return sorted.find((t) => !skippedIds.has(t.id)) || null;
}

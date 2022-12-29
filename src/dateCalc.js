import { diffDates, diffToHtml } from "./diffDates.js";

export const dateCalc = (firstDate, secondDate) => {
  const diff = diffDates(firstDate, secondDate);
  return diffToHtml(diff);
}
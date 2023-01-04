import { DateTime } from "luxon";
import { Howl } from "howler";
import { diffDates, diffToHtml } from "./diffDates.js";
import soundFile from './sounds/timer.mp3';

const sound = new Howl({
  src: [soundFile]
});

const timerTick = (timer, firstDateElem, secondDate, outElem, stopBtn) => {
  let firstDate = DateTime.fromISO(firstDateElem.value); 
  secondDate = DateTime.fromISO(secondDate);
  if (firstDate > secondDate) {
    secondDate = [firstDate, firstDate = secondDate][0];
  }    
  if (firstDate < secondDate) {
    firstDate = firstDate.plus({days: 1});
    firstDateElem.value = firstDate.toISODate();
    const diff = diffDates(firstDate, secondDate);
    outElem.innerHTML = diffToHtml(diff);
  } else {
    stopBtn.click();
    outElem.innerHTML =  "Таймер окончен.";
    sound.play();
  }
}

export const startTimer = (firstDateElem, secondDate, outElem, stopBtn) => {
  const timer = setInterval(() => timerTick(timer, firstDateElem, secondDate, outElem, stopBtn), 1000);
  return timer;
}

export const stopTimer = (timer) => {
  clearInterval(timer);
}
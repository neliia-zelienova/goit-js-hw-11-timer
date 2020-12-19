import CountdownTimer from './timer-plg.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('dec 25, 2020'),
});

timer.updateTimer();

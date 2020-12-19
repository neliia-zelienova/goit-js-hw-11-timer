
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. 
// Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий, 
// во время технического обслуживания и т.д.

import { days, hours, mins, secs } from './time-functions.js';

export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector,
        this.targetDate = targetDate,
        this.timerValues = Array.from(document.querySelector(this.selector).children);
    };

    updateTimer() {
        setInterval(() => {
            this.renderTimer(this.getTimeDifference());
        }, 500);
    };

    getTimeDifference() {
        const currDate = Date.now();
        const targetDatems = this.targetDate.getTime();
        return targetDatems - currDate;
    };

    getRefByDataset(value) {
        const ref = this.timerValues.find((item) => {
            const node = item.querySelector('.value');
            if (node.dataset.value === value) return node;
        });
        if (ref) return ref.querySelector('.value');
    };

    setValue(type, value) {
        const valueRef = this.getRefByDataset(type);
        if (valueRef) valueRef.textContent = value.toString().padStart(2, 0);
    };

    renderTimer(timeDifference) {
        this.setValue('days', days(timeDifference));
        this.setValue('hours', hours(timeDifference));
        this.setValue('mins', mins(timeDifference));
        this.setValue('secs', secs(timeDifference));
    }
};
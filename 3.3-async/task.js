"use stric";

class AlarmClock {
    constructor(alarmCollection = [], timerId = null) {
        this.alarmCollection = alarmCollection;
        this.timerId = timerId;
    };

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Укажите id будильника');
        } else if (AlarmClock.checkID(id, this.alarmCollection) == true) {
            console.error('Данный id уже существует в системе');
        } 
        else {
            this.alarmCollection.push({'id': id, 'time': time, 'callback': callback});
        };
    };

    removeClock(id) {
        if (!id) {
            throw new Error('Укажите id будильника');
        } 
        else {
            this.alarmCollection.splice(this.alarmCollection.findIndex(item => item['id'] === id), 1)
            console.log(`Будильник с id ${id} удален`); 
        };
    };

    getCurrentFormattedTime() {
        let hours = (new Date()).getHours();
        let minutes = (new Date()).getMinutes();
        return (`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`);
    }

    static checkClock(id, array, time) {
        if (id !== null) {
            if (array[array.findIndex(item => item['id'] === id)].time === time) {
              array[array.findIndex(item => item['id'] === id)].callback();
            };
        } 
        else {
            array.forEach(item => {
                if (item.time === time) {
                item.callback();
                };
            });
        };
    };

    static checkID = (_id, array) => {
        if (array.length > 0) {
            if (array.filter(dict => dict.id === _id).length > 0) {
            return true;
            } 
            else {
            return false;
            };
        } 
        else {
            return false;
        };
    };

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.checkClock(null,
            this.alarmCollection,
            this.getCurrentFormattedTime()), 2000);
        };
    }

    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        };
    };

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };

};
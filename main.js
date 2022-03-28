// тут вы можете вызывать функции из task.js
let receiveAlarm = new AlarmClock();
receiveAlarm.addClock("17:18", () => console.log("Пора вставать"), 1);
receiveAlarm.addClock("17:19", () => console.log("Давай, вставай уже!"), 2);
receiveAlarm.addClock("17:20", () => console.log("Вставай, а то проспишь!"), 3);
receiveAlarm.printAlarms();
receiveAlarm.start();
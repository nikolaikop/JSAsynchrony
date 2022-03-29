class AlarmClock {
    constructor() {
      this.alarmCollection = [];   //массив звонков
      this.timerId = null;
    }
  
    addClock(time, func, id) {
      //если id не передан
      if (isNaN(id)) {
        throw new Error ("Невозможно идентифицировать будильник. Параметр id не передан");
      }
  
      let array = this.alarmCollection;
      if (array.some(obj => obj.id === id)){
       console.error("Будильник с таким id уже существует")
       return null;
     }
  
     let obj = {
      time: time,
      func: func,
      id: id
    }  
  
    this.alarmCollection.push(obj);
    return obj;
  }
  
  removeClock(id) {
    let firstLength = this.alarmCollection.length;
    let array = this.alarmCollection;
    let lastArray = array.filter(obj => obj.id != id);
    let lastLength = lastArray.length;
    if (firstLength > lastLength){
      this.alarmCollection = lastArray;
      return true;
    }
    return false;
  }
  
  getCurrentFormattedTime() {
   let date = new Date();
   let time = date.toTimeString().substr(0, 5);
   return time;
  }
  
    //функция проверки, принимает звонок
    checkClock(phoneObj){
      let systemDate = this.getCurrentFormattedTime();
      let phoneTime = phoneObj.time;
      if (systemDate === phoneTime){
        return phoneObj.func();
      }
    }
  
    //запускает все звонки
    start (){ 
      let array = this.alarmCollection;
      if (this.timerId === null){
        //this.timerId = setInterval (() => {array.forEach (obj => this.checkClock(obj))}, 1000);
        this.timerId = setInterval (() => {this.alarmCollection.forEach (obj => this.checkClock(obj))}, 1000);
      } 
    }
  
    stop(){
      if (this.timerId != null){
        clearInterval (this.timerId);
        this.timerId = null;
      }
    }
  
    printAlarms () {
      let array = this.alarmCollection;
      array.forEach (obj => console.log("Будильник номер " + obj.id + " заведён на " + obj.time));
    }
  
    clearAlarms(){
      this.stop();
      this.alarmCollection = [];
    }
  }
  
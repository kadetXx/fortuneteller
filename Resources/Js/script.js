//Main codes fror ifa's prediction
function myFunc() {
  
  //variables and data for the alert and ialougue boxes
  let fateEvents = {
    firstEvent: ["buy a bentley", "get married", "start a business", "find love", "build a factory"],
    secondEvent: ["have a bike accident", "build a nice duplex"],
    thirdEvent: ["travel to canada", "get your dream job"],
    adverbOfTime: ["before the end of", "by", "in the month of", "on or before"],
    month: ["January","Febuary","March","April","May","June","July","August","September","October","November","December"],
  };
  
  let ranFirst = fateEvents.firstEvent[Math.floor(Math.random() * fateEvents.firstEvent.length)];
  let ranSecond = fateEvents.secondEvent[Math.floor(Math.random() * fateEvents.secondEvent.length)];
  let ranThird = fateEvents.thirdEvent[Math.floor(Math.random() * fateEvents.thirdEvent.length)];
  let ranAdverb = fateEvents.adverbOfTime[Math.floor(Math.random() * fateEvents.adverbOfTime.length)]
  let ranMonth = fateEvents.month[Math.floor(Math.random() * fateEvents.month.length)]
  
  
  
  let quest = "Ifa requests for your name, please tell him";
  let name = prompt(quest);
  let dob = "What year of your future do you want Ifa to look into?";
  let year = prompt(dob);
  let greeting = alert("Hi " + name + " Ifa has looked into the year " + year + ". click OK to see your results");

  let myArray = ["My magic ball says that you will ", ranFirst, ", ", ranSecond, " and ", ranThird, " ", ranAdverb, " ", ranMonth, ", ", year];
  let final = greeting + alert(myArray.join(""))

  return final;
};


//var timeTable = Timetable()
//timetable.setScope(9,3)
//timetable.setLocation(['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'])
//timetable.setEvent('work', 'Monday', new Date(2021,8,27,9,00), new Date(2021,8,27,11,00), { url:'#'})

//let arrEvents = new Array();
//if (window.localStorage.getItem('arrEvents') !== null) {
  //  let arrEvents = window.localStorage.getItem('arrEvents');
  //  persistEvents();
//} else {
 //   let arrEvents = new Array();
  //  arrEvents=[" "," "," "," "," "," "," "," "]
//}

let nine = document.getElementById('9');
let ten = document.getElementById('10');
let eleven = document.getElementById('11');
let twelve = document.getElementById('12');
let thirteen = document.getElementById('13');
let fourteen = document.getElementById('14');
let fifteen = document.getElementById('15');
let sixteen = document.getElementById('16');



let button = document.getElementsByClassName('saveBtn');

let output = document.getElementById('output');

let day = moment().format('dddd'); 
console.log(day)

output.innerHTML = day;

var time = moment().hour();
console.log(time)


for (let i=9; i<17; i++)
{
    switch (true) {
        case (i < time):
            
            document.getElementById(String(i)).className="past";
            break;
        case (i = time):
            
            document.getElementById(String(i)).className="present";
            break;
        case (i > time):
            
            document.getElementById(String(i)).className="future";
            break;
    }
}



button.addEventListener('click', function(){
    localStorage.setItem('schedule', nine.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', ten.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', eleven.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', twelve.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', thirteen.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', fourteen.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', fifteen.value);
})
button.addEventListener('click', function(){
    localStorage.setItem('schedule', sixteen.value);
})


//function saveEvent(hour){
  // arrEvents[parseInt(hour)-9] = document.getElementById(String(hour)).value;
  // window.localStorage.setItem("arrEvents", arrEvents);
 //  console.log( arrEvents[parseInt(hour)-9]);
  // console.log(document.getElementById(String(hour)).value);
  // console.log()
//}

//function persistEvents(){
  //  for(i=0;i<8;i++){
  //      document.getElementById(String(i+9)).value = arrEvents[i];
  //  }
//}


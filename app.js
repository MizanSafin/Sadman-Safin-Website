


let output = document.getElementById("output");
let mrqOutput = document.getElementById("mrq_output");

function timeDiff(){
         var a = moment('2022-02-07 13:00:00');
         var b = moment();
         let x = b-a;
        //  diff = moment.preciseDiff(a, b, true);
        
         let day = x/1000/60/60/24;
         output.innerHTML =`Now Safin,s Age is ${ Math.floor(day)} days`;
         output.style.color="red";
         output.style.textShadow = "0px 1px 3px #fff";
         mrqOutput.innerHTML =` ${Math.floor(day)}  days`;
        
}
setInterval(timeDiff,1000)



const timeLeft = document.getElementById("timeLeft");
let birthDate = new Date("02/07/2023 13:00:00");
let second = 1000;
let minute = second*60;
let hour = minute*60;
let day = hour*24;



function countDown(){
    const today = new Date();
    let timeSpan =birthDate - today;
    

    const days = Math.floor(timeSpan/day);
    const hours = Math.floor( timeSpan % day / hour);
    const minutes = Math.floor( timeSpan % hour /minute);
    const seconds = Math.floor( timeSpan % minute / second);
    // console.log(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds `)
    timeLeft.innerHTML = `Next BirthDay time left :${days} days ${hours} hours ${minutes} minutes ${seconds} seconds `; 
}

setInterval(countDown,1000)


setInterval(()=>{
    if(document.getElementsByClassName("slider")[0].classList.contains("active")){
       document.getElementsByClassName("slider")[1].classList.add("active");
       document.getElementsByClassName("slider")[0].classList.remove("active")
    }else if(document.getElementsByClassName("slider")[1].classList.contains("active")){
       document.getElementsByClassName("slider")[2].classList.add("active");
       document.getElementsByClassName("slider")[1].classList.remove("active")
    }else if(document.getElementsByClassName("slider")[2].classList.contains("active")){
       document.getElementsByClassName("slider")[3].classList.add("active");
       document.getElementsByClassName("slider")[2].classList.remove("active")
    }else if(document.getElementsByClassName("slider")[3].classList.contains("active")){
       document.getElementsByClassName("slider")[0].classList.add("active");
       document.getElementsByClassName("slider")[3].classList.remove("active")
    }
},4000)


const next = document.getElementById("next");
const prev = document.getElementById("prev");


next.addEventListener("click",()=>{
 if(document.getElementsByClassName("slider")[0].classList.contains("active")){
         document.getElementsByClassName("slider")[1].classList.add("active");
         document.getElementsByClassName("slider")[0].classList.remove("active")
      }else if(document.getElementsByClassName("slider")[1].classList.contains("active")){
         document.getElementsByClassName("slider")[2].classList.add("active");
         document.getElementsByClassName("slider")[1].classList.remove("active")
      }else if(document.getElementsByClassName("slider")[2].classList.contains("active")){
         document.getElementsByClassName("slider")[3].classList.add("active");
         document.getElementsByClassName("slider")[2].classList.remove("active")
      }else if(document.getElementsByClassName("slider")[3].classList.contains("active")){
         document.getElementsByClassName("slider")[0].classList.add("active");
         document.getElementsByClassName("slider")[3].classList.remove("active")
      }
})
prev.addEventListener("click",()=>{
 if(document.getElementsByClassName("slider")[0].classList.contains("active")){
         document.getElementsByClassName("slider")[3].classList.add("active");
         document.getElementsByClassName("slider")[0].classList.remove("active")
      }else if(document.getElementsByClassName("slider")[3].classList.contains("active")){
         document.getElementsByClassName("slider")[2].classList.add("active");
         document.getElementsByClassName("slider")[3].classList.remove("active")
      }else if(document.getElementsByClassName("slider")[2].classList.contains("active")){
         document.getElementsByClassName("slider")[1].classList.add("active");
         document.getElementsByClassName("slider")[2].classList.remove("active")
      }else if(document.getElementsByClassName("slider")[1].classList.contains("active")){
         document.getElementsByClassName("slider")[0].classList.add("active");
         document.getElementsByClassName("slider")[1].classList.remove("active")
      }
})

let dial = document.getElementById("container-contador");
let h = 0;
let m = 0;
let s = 0;
dial.innerHTML = `${h} : ${m} : ${s}`;

function setTime(time){
    switch(time){
        case "h":
            if(h == 99){
                h = 0;
                h++;
                dial.innerHTML = `${h} : ${m} : ${s}`;
            }else{
                h++;
                dial.innerHTML = `${h} : ${m} : ${s}`;
            }
        break;
        case "m":
            if(m == 59){
                m = 00;
                h++;
                dial.innerHTML = `${h} : ${m} : ${s}`;
            }else{
                m++;
                dial.innerHTML = `${h} : ${m} : ${s}`;
            }
        break;
        case "s":
            if(s == 59){
                s = 00;
                m++;
                dial.innerHTML = `${h} : ${m} : ${s}`;
            }else{
                s++;
                dial.innerHTML = `${h} : ${m} : ${s}`;
            }
            break;
    }
}

function customTime(){
    let timeC = prompt("Coloque uma quantidade de segundos menor que 360000s");
    timeC = Number(timeC)
    if(!timeC){
        alert ("coloque um tempo válido");
        return
    }
    
    h = Math.floor(timeC / 3600);
    m = Math.floor((timeC - h*3600)/60);
    s = Math.floor(timeC% 60)
      if(timeC >= 360000){
          alert("coloque um número menor que 360000s")
          return
      }else{
        dial.innerHTML = `${h} : ${m} : ${s}`;
  }
  }


let timeFunction = 1000
let timer;

let check = true;

function startStop(){
    if(h == 0 && m == 0 && s == 0){
        return
    }
    if(check){
        timer = setInterval(() => {
            cron();
           }, timeFunction)
           check = !check
           document.getElementById("iniciar-cotagem").innerHTML = "Stop";
    }else{
        clearInterval(timer)
        check = !check
        document.getElementById("iniciar-cotagem").innerHTML = "Start"
    }
    }


function reset(){
    if(h == 0 && m == 0 && s == 0){
        return
    }
    check = !check
    document.getElementById("iniciar-cotagem").innerHTML = "Start"
    clearInterval(timer);
    h = 0;
    m = 0;
    s = 0;
    dial.innerHTML = `${h} : ${m} : ${s}`;
}


function cron(){
    s--;
    if(s == -1){
        s = 59;
        m--;
        }
        if(m == -1){
            m = 59;
            h--;
            if(h == -1){
                alert("Seu tempo acabou")
                h = "00";
                m = "00";
                s = "00";
                clearInterval(timer)
                check = !check
                document.getElementById("iniciar-cotagem").innerHTML = "Start"
            }
        }
        dial.innerHTML = `${h} : ${m} : ${s}`;     
    }
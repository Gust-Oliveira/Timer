let mostrador = document.getElementById("container-contador");
let h = 0;
let m = 0;
let s = 0;
mostrador.innerHTML = `${h} : ${m} : ${s}`;
function inserirTempo(tempo){
    switch(tempo){
        case "h":
            if(h == 99){
                h = 0;
                h++;
                mostrador.innerHTML = `${h} : ${m} : ${s}`;
            }else{
                h++;
                mostrador.innerHTML = `${h} : ${m} : ${s}`;
            }
        break;
        case "m":
            if(m == 59){
                m = 00;
                h++;
                mostrador.innerHTML = `${h} : ${m} : ${s}`;
            }else{
                m++;
                mostrador.innerHTML = `${h} : ${m} : ${s}`;
            }
        break;
        case "s":
            if(s == 59){
                s = 00;
                m++;
                mostrador.innerHTML = `${h} : ${m} : ${s}`;
            }else{
                s++;
                mostrador.innerHTML = `${h} : ${m} : ${s}`;
            }
            break;
    }
}

function tempoPersonalizado(){
    let tempoP = prompt("Coloque a quantidade de segundos");
    tempoP = Number(tempoP)
    if(!tempoP){
        alert ("coloque um tempo válido");
        return
    }
    
    h = Math.floor(tempoP / 3600);
    m = Math.floor((tempoP - h*3600)/60);
    s = Math.floor(tempoP % 60)
      if(tempoP >= 360000){
          alert("coloque um número menor que 360000s")
          return
      }else{
        mostrador.innerHTML = `${h} : ${m} : ${s}`;
  }
  }


let tempofuncao = 1000
let temporizador;

let verifica = true;

function startPause(){
    if(h == 0 && m == 0 && s == 0){
        return
    }
    if(verifica){
        temporizador = setInterval(() => {
            cron();
           }, tempofuncao)
           verifica = !verifica
           document.getElementById("iniciar-cotagem").innerHTML = "Pausar";
    }else{
        clearInterval(temporizador)
        verifica = !verifica
        document.getElementById("iniciar-cotagem").innerHTML = "Iniciar"
    }
    }


function cancelar(){
    if(h == 0 && m == 0 && s == 0){
        return
    }
    verifica = !verifica
    document.getElementById("iniciar-cotagem").innerHTML = "Iniciar"
    clearInterval(temporizador);
    h = 0;
    m = 0;
    s = 0;
    mostrador.innerHTML = `${h} : ${m} : ${s}`;
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
                clearInterval(temporizador)
                verifica = !verifica
                document.getElementById("iniciar-cotagem").innerHTML = "Iniciar"
            }
        }
        mostrador.innerHTML = `${h} : ${m} : ${s}`;        
    }
let userscore = 0;
let computerscore = 0;
let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
const gencompchoice =()=>{
    let x = Math.random();
    const choice=['rock','paper','scissors'];
    let compchoice = choice[Math.floor(x*3)];
    return compchoice;
}
const userwin=()=>{
    msg.innerHTML = "you win";
    msg.style.backgroundColor = "green";
}
const compwin=()=>{
    msg.innerHTML = "computer win";
    msg.style.backgroundColor = "red";
}
const draw=()=>{
    msg.innerHTML = "draw";
    msg.style.backgroundColor = "#081b31";
}
choices.forEach((choice) => { 
    choice.addEventListener("click", ()=>{
        const userchoice = choice.id;
        // console.log("clicked "+userchoice);
        const compchoice = gencompchoice();
        // console.log("compchoice "+compchoice);
        if(userchoice===compchoice){
            //draw
            draw();
        }
        else if(userchoice==='rock' && compchoice==='scissors'){
            userscore++;
            //user win
            userwin();
        }
        else if(userchoice==='rock' && compchoice==='paper'){
            computerscore++;
            //comp win
            compwin();
        }
        else if(userchoice==='scissors' && compchoice==='rock'){
            computerscore++;
            //comp win
            compwin();
        }
        else if(userchoice==='scissors' && compchoice==='paper'){
            userscore++;
            //user win
            userwin();
        }
        else if(userchoice==='paper' && compchoice==='rock'){
            userscore++;
            //user win
            userwin();
        }
        else if(userchoice==='paper' && compchoice==='scissors'){
            computerscore++;
            //comp win
            compwin();
        }
        document.querySelector('#userscore').innerHTML = userscore;
        document.querySelector('#compscore').innerHTML = computerscore;
    }) 
});
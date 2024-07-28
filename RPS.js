let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const computerScorepara=document.querySelector("#computer-score");

const genCompchoice=()=>
{
    const options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

const draw=()=>
{
    console.log("Game Draw");
    msg.innerText="Game Draw"
    
}
const playGame=(userChoice)=>{
    console.log("User choice = ",userChoice);
    //generate computer choice
    const compChoice=genCompchoice();
    console.log("Comp choice = ",compChoice);
    if(userChoice===compChoice)
    {
        draw();
    }
    else{
        let userwin=true;
        if(userChoice==="rock")
        {
            if(compChoice==="paper")
            {
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userChoice==="paper")
        {
            if(compChoice==="scissors")
            {
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userChoice==="scissors")
        {
            if(compChoice==="rock")
            {
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

const showWinner=(userwin, userChoice,compChoice)=>
{
    if(userwin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You win");
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerScorepara.innerText=computerScore;
        console.log("You lose");
        msg.innerText=`${compChoice} beats your ${userChoice}, Better luck next time!`;
        msg.style.backgroundColor="red";
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>
{
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked");
    playGame(userChoice);
})
});
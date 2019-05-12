let user1Score=0;
let user2Score=0;
let loose=0;
const user1Score_span= document.getElementById("user1-score");
const user2Score_span= document.getElementById("user2-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p= document.querySelector(".result");
const last_p= document.querySelector(".last_parra");
const one_div = document.getElementById("choice1");
const two_div= document.getElementById("choice2");
const three_div= document.getElementById("choice3");
const four_div= document.getElementById("choice4");
const five_div= document.getElementById("choice5");
const replay_div= document.querySelector(".replay");


function getComputerChoice(){
	const choices=[1,2,3,4,6];
	const randomNumber=Math.floor(Math.random()*5);
	return choices[randomNumber];
}


function convertToWord(number){
	if(number===1)return " One Run ";
	if(number===2)return " Two Run ";
	if(number===3)return " Three Run ";
	if(number===4)return " Four ";
	return " Sixer ";
}


function win(userChoice,computerChoice){
  if(loose==0){
    user1Score=user1Score+userChoice;
  	user1Score_span.innerHTML=user1Score;
  	user2Score_span.innerHTML=user2Score;
  	const smallUserWord="user1".fontsize(2).sub();
  	const smallCompWord="computer".fontsize(2).sub();
  	result_p.innerHTML=`${smallUserWord} hits${convertToWord(userChoice)} against ${smallCompWord}${convertToWord(computerChoice)} .Bingo !`;

  }else{
    user2Score=user2Score+userChoice;
  	user2Score_span.innerHTML=user2Score;
  	const smallUserWord="user2".fontsize(2).sub();
  	const smallCompWord="computer".fontsize(2).sub();
  	result_p.innerHTML=`${smallUserWord} hits${convertToWord(userChoice)} against ${smallCompWord}${convertToWord(computerChoice)} .Bingo !`;

  }

}


function lose(userChoice,computerChoice){
  if(loose==0){
    user1Score_span.innerHTML=user1Score;
  	const smallUserWord="user1".fontsize(2).sub();
  	const smallCompWord="computer".fontsize(2).sub();
  	result_p.innerHTML=`${smallUserWord}${convertToWord(userChoice)} loses to ${smallCompWord}${convertToWord(computerChoice)} .<span color="red">OUT !</span>`;
    alert("OUT!! Next Player Turn");
    loose=1;

  }else{
    user2Score_span.innerHTML=user2Score;
  	const smallUserWord="user2".fontsize(2).sub();
  	const smallCompWord="computer".fontsize(2).sub();
  	result_p.innerHTML=`${smallUserWord}${convertToWord(userChoice)} loses to ${smallCompWord}${convertToWord(computerChoice)} .<span color="red">OUT !</span>`;
    alert("OUT!! GAME END ");
    if(user1Score>user2Score){
      last_p.innerHTML=`1st USER WINS THE MATCH!!`;
      alert("1st user Win!!");
    }else if (user2Score>user1Score) {
      last_p.innerHTML=`2nd USER WINS THE MATCH!!`;
      alert("2nd user Win!!");
    }else{
      last_p.innerHTML=`OOLALA.... It's a DRAW!!`;
      alert("OOLALA....It's a DRAW!!");
    }
    replay_div.style.display="block";
    		one_div.style.pointerEvents='none';
		two_div.style.pointerEvents='none';
		three_div.style.pointerEvents='none';
		four_div.style.pointerEvents='none';
		five_div.style.pointerEvents='none';

  }

}

function game(userChoice){
	const computerChoice=getComputerChoice();
  if(userChoice==computerChoice){
    lose(userChoice,computerChoice);
  }else{
    win(userChoice,computerChoice);
  }

}


function main(){
    one_div.addEventListener('click',function() {
	game(1);
    })
	two_div.addEventListener('click', function() {
	game(2);
    })
	three_div.addEventListener('click', function() {
	game(3);
    })
  four_div.addEventListener('click', function() {
  game(4);
      })
  five_div.addEventListener('click', function() {
  game(6);
        })
  replay_div.addEventListener('click',function(){
    document.location.reload();
  })
}

main();

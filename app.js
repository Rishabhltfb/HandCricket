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
const intro_div= document.querySelector(".intro");
const disappear_div= document.querySelector(".disappear");
const disappear2_div= document.querySelector(".disappear2");
const popup_div= document.querySelector(".popup2");
const main_msg= document.querySelector(".main-msg");
const popup_parra_msg1= document.querySelector(".popup_parra_msg1");
const popup_parra_msg2= document.querySelector(".popup_parra_msg2");



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
  if(user2Score>user1Score){
      last_p.innerHTML=`2nd USER WINS THE MATCH!!`;
      popup_div.style.display="block";
      main_msg.innerHTML=`Congo!!`;
      popup_parra_msg1.innerHTML=`Second Player Hits ${user2Score} runs`;
      popup_parra_msg2.innerHTML=`Second Player Wins!`;
      replay_div.style.display="block";
		one_div.style.pointerEvents='none';
		two_div.style.pointerEvents='none';
		three_div.style.pointerEvents='none';
		four_div.style.pointerEvents='none';
		five_div.style.pointerEvents='none';

  }

}


function lose(userChoice,computerChoice){
  if(loose==0){
    user1Score_span.innerHTML=user1Score;
  	const smallUserWord="user1".fontsize(2).sub();
  	const smallCompWord="computer".fontsize(2).sub();
  	result_p.innerHTML=`${smallUserWord}${convertToWord(userChoice)} loses to ${smallCompWord}${convertToWord(computerChoice)} .<span color="red">OUT !</span>`;
    popup_div.style.display="block";
    popup_parra_msg1.innerHTML=`First Player is Out at ${user1Score} runs`;
    loose=1;

  }else{
    user2Score_span.innerHTML=user2Score;
  	const smallUserWord="user2".fontsize(2).sub();
  	const smallCompWord="computer".fontsize(2).sub();
  	result_p.innerHTML=`${smallUserWord}${convertToWord(userChoice)} loses to ${smallCompWord}${convertToWord(computerChoice)} .<span color="red">OUT !</span>`;
    popup_div.style.display="block";
    popup_parra_msg1.innerHTML=`Second Player is Out at ${user2Score} runs`;
    popup_parra_msg2.innerHTML=`Let's see ScoreBoard!`;      
    if(user1Score>user2Score){
      last_p.innerHTML=`1st USER WINS THE MATCH!!`;
      popup_parra_msg1.innerHTML=`First Player Wins by ${user1Score - user2Score} runs`;
      popup_parra_msg2.innerHTML=`Congratulations!!`;
    }else{
      last_p.innerHTML=`OOLALA.... It's a DRAW!!`;
      popup_parra_msg1.innerHTML=`Both Players Score ${user1Score} runs`;
      popup_parra_msg2.innerHTML=`OLALA It's a Draw!!`;
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

function reset(){
    replay_div.style.display="none";
		one_div.style.pointerEvents='auto';
		two_div.style.pointerEvents='auto';
		three_div.style.pointerEvents='auto';
		four_div.style.pointerEvents='auto';
    five_div.style.pointerEvents='auto';
    user1Score = 0;
    user2Score = 0;
    loose = 0;
    user1Score_span.innerHTML=user1Score;
    user2Score_span.innerHTML=user2Score;
    result_p.innerHTML=`HIT YOUR SHOT !!`;
    last_p.innerHTML=`Make your Move.`;
    main_msg.innerHTML=`OUT!!`;
    popup_parra_msg1.innerHTML=`First Player is Out.`;
    popup_parra_msg2.innerHTML=`Next Player Turn...`;  

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
    reset();
  })
  disappear_div.addEventListener('click',function(){
    intro_div.style.display="none";
  })
  disappear2_div.addEventListener('click',function(){
    popup_div.style.display="none";
  })
}

main();

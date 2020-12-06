function  ageInDays(){
    var birthYear= prompt('What year were you born..good friend?');
    var ageInDayss = (2020-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + " "  +  ageInDayss + 'days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    }
    function reset(){
        document.getElementById('ageInDays').remove();
        
    }
    //challenge 2 Cat Generator
    function generateCat(){
        var image = document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp="
        div.appendChild(image);
    
    }
    //challenge 3 Rock, Paper, Scissor//
    
    function rpsGame(yourChoice){
        console.log(yourChoice);
        var humanChoice,botChoice;
        humanChoice = yourChoice.id;

        botChoice=numberToChoice(randToRpsInt());
        console.log('computerChoice',botChoice);

        results=decideWinner(humanChoice,botChoice);//[0,1] humanlost| bot won
        console.log(results);

        message=finalMessage(results);//{'message':'You Won!','color':'green'}
        console.log(message);

       rpsFrontEnd(yourChoice.id,botChoice,message);
    }

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase= {
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1,'scissors':0.5,'rock':0}
    };

var yourScore =rpsDatabase[yourChoice][computerChoice];
var computerScore= rpsDatabase[computerChoice][yourChoice];

return[yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore ===0) {
        return{'message':'You lost!','color':'red'};
    } else if(yourScore ===0.5) {
        return{'message':'You tied!','color':'yellow'};
    } else {
        return{'message':'You win!','color':'Green'};
    }

}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv= document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChoice]+ "'height=150 weight=150  style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML="<img src='"+imagesDatabase[botImageChoice]+ "'height=150 weight=150  style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    messageDiv.innerHTML ="<h1 style ='color: "+finalMessage['color']+ "; font-size:60px; padding=30px;'>"+finalMessage['message']+ "</h>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

//challange 4: change the color of all button
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons=[];
for (let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i] .classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value==='red'){
        buttonsRed();
    }else if(buttonThingy.value==='green'){
        buttonsGreen();
    }else if(buttonThingy.value==='reset'){
        buttonColorReset();
    }else if (buttonThingy.value==='random'){
        randomColors();
    }
}
function buttonsRed(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen(){
    for(let i=0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);

    }
}
function randomColors(){
    var choices= ['btn-primary','btn-danger','btn-success','btn-warning']

    for(let i=0; i<all_buttons.length; i++){
        var randomNumber= Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
}

}

//Challenge 5 black jack game
let blackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score': 0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
};

const YOU =blackjackGame['you']
const DEALER =blackjackGame['dealer']

const hitSound=new Audio('/blackJack_assets/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);


function blackjackHit(){
<<<<<<< HEAD
    alert('Ouch,You just clicked me!');
=======
    let card = randomCard();
    console.log(card);
    showcard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
    console.log(YOU['score']);
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showcard(card,activePlayer){
    if(activePlayer['score']<=21){
        let cardImage=document.createElement('img');
        cardImage.src=`/blackjack_assets/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}
function blackjackDeal(){
    let yourImages =document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages =document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(i=0; i< yourImages.length; i++){
        yourImages[i].remove();
    }
    for(i=0; i< dealerImages.length; i++){
        dealerImages[i].remove();
    }
    YOU['score']= 0;
    DEALER['score']= 0;
    document.querySelector('#your-blackjack-result').textContent= 0;
    document.querySelector('#dealer-blackjack-result').textContent= 0;

    document.querySelector('#your-blackjack-result').style.color= '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color= '#ffffff';


}
function updateScore(card,activePlayer){
    if(card ==='A'){
    // If adding 11 keeps me below 21,add 11.otherwise add 1
        if (activePlayer['score']+ blackjackGame['cardsMap'][card][1]<= 21){
            activePlayer['score']+= blackjackGame['cardsMap'][card][1];
        }else{
            activePlayer['score']+= blackjackGame['cardsMap'][card][0];
        }

    }else{
            activePlayer['score']+=blackjackGame['cardsMap'][card];
        }
}

function showScore(activePlayer){
    if(activePlayer['score'] >21){
        document.querySelector(activePlayer['scoreSpan']).textContent ='Bust!';
        document.querySelector(activePlayer['scoreSpan']).style.color ='red';

    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
>>>>>>> challenge-5
}





<<<<<<< HEAD
=======


>>>>>>> challenge-5

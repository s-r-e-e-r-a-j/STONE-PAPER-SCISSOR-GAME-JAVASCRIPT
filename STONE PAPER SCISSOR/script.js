let [cpu_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let speech=new SpeechSynthesisUtterance();
speech.lang="en-US"||"en-UK"||"en-GB";
speech.pitch=0.8;
speech.rate=0.8;
let choices_object = {
    'stone' : {
        'stone' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'stone' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'stone' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}



function checker(input){
    var choices = ["stone", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Cpu choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            speech.text=`you win `;
            window.speechSynthesis.speak(speech);
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            speech.text=`you lose `;
            window.speechSynthesis.speak(speech);
            cpu_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            speech.text="draw";
            window.speechSynthesis.speak(speech);
            break;
    }




if(cpu_score==20&&cpu_score>user_score){
    confirm(`CPU WINS YOUR SCORE IS LESSER THAN CPU \n MAXIMUM SCORE IS 20 \n REFRESH THE PAGE`);
    speech.text=`CPU WINS YOUR SCORE IS LESSER THAN CPU \n MAXIMUM SCORE IS 20 REFRESH THE PAGE`;
    window.speechSynthesis.speak(speech);
}



else if(user_score==20&&user_score>cpu_score){
    confirm(`YOU WINS YOUR SCORE IS HIGHER THAN CPU \n MAXIMUM SCORE IS 20 \n REFRESH THE PAGE`);
    speech.text=`YOU WINS YOUR SCORE IS HIGHER THAN CPU \n MAXIMUM SCORE IS 20 REFRESH THE PAGE`;
    window.speechSynthesis.speak(speech);
}




    document.getElementById("cpu_score").innerHTML = cpu_score;
    document.getElementById("user_score").innerHTML = user_score;
}

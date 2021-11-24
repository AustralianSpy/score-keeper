const p1sText = document.querySelector('#p1score');
const p2sText = document.querySelector('#p2score');

let p1Score = 0;
let p2Score = 0;
let gameOver = false;

const resetAll = () => {
    p1sText.innerText = '0', p2sText.innerText = '0';
    p1Score = 0, p2Score = 0;
    gameOver = false;
    document.getElementById('p1score').classList.remove('has-text-success', 'has-text-danger');
    document.getElementById('p2score').classList.remove('has-text-success', 'has-text-danger');
}

const checkWinner = () => {
    if (p1Score === winningScore){
        document.getElementById('p1score').classList = 'has-text-success';
        document.getElementById('p2score').classList = 'has-text-danger';
        return true;
    } else if (p2Score === winningScore){
        document.getElementById('p1score').classList = 'has-text-danger';
        document.getElementById('p2score').classList = 'has-text-success';
        return true;
    }
    return false;
}

const buttonToggle = () => {
    document.getElementById('p1Add').disabled = gameOver;
    document.getElementById('p2Add').disabled = gameOver;
}

const selectScore = document.querySelector('#limit');
let winningScore = Number(selectScore.value);
selectScore.addEventListener('change', function(){
    winningScore = Number(this.value);
    resetAll();
})

const buttonsContainer = document.querySelector('#buttons').childNodes;
for (let button of buttonsContainer) {
    button.addEventListener('click', function(){
        if (button.id === 'reset'){
            resetAll();
            buttonToggle();
        } else if (button.id === 'p1Add'){
            p1Score +=1;
            p1sText.innerHTML = p1Score;
        } else if (button.id === 'p2Add'){
            p2Score +=1;
            p2sText.innerHTML = p2Score;
        }
        
        gameOver = checkWinner();
        if (gameOver){
            buttonToggle();
        }
    })
};


    let score = JSON.parse(localStorage.getItem('score')) || {
        wins : 0,
        losses : 0,
        ties: 0
      };

    
    updateScoreElement();

      
    function playGame(playerMove) {

      const computerMove = pickComputerMove();
      console.log(computerMove);
      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'scissor') {
          result = 'Tie';
        } else if (computerMove === 'rock') {
          result = 'You lose';
        } else if (computerMove === 'paper') {
          result = 'You win';
        }
      } 
      
      else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win';
        } else if (computerMove === 'paper') {
          result = 'Tie';
        } else if (computerMove === 'scissor') {
          result = 'You lose';
        }
      }

      else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You lose';
        } else if (computerMove === 'scissor') {
          result = 'You win';
        }
      }

      if (result === 'You win') {
        score.wins += 1;
      } else if (result === 'You lose') {
        score.losses += 1;
      } else if (result === 'Tie') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      // instead of making a separate function to be executed outside of this function's scope, we can just type the result and moves here
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `
      You choose: 
      <img src="images/${playerMove}-emoji.png" class="move-icon">
       Computer choose:
      <img src="images/${computerMove}-emoji.png" class="move-icon">`;
    }


    function updateScoreElement() {
      // declare DOM object that targets js-score class with innerHTML to store the updated score data while also displaying it on the page, then put it inside a function so that this code will update the score each time this function run
      // it will run whenever the player choose a move, or the player clicked 'reset score'
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }


    function pickComputerMove () {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3 ) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }

  
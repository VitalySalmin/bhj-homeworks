

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    alert("Играем с таймеров.  Кол-во данных для введения слова секунд = кол-ву символов в слове")
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    
    //console.log("started registering")

        

    let currentKey;
    let currentSymbol = this.currentSymbol;console.log(currentSymbol)
    let getKey = (event) => {
      
   
  
       currentKey = event.key
       console.log(currentKey)
       console.log(currentSymbol)
       if (currentKey == this.currentSymbol.textContent) {
        this.success()
        //console.log("symbol_correct")
       } else {
        clearInterval(this.countDownInterval);
        document.getElementById("seconds").innerHTML = "";
        document.getElementById("timer").innerHTML = "";
        this.fail()
       }
    };
    

    document.addEventListener('keydown', getKey);  
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    //console.log(this.currentSymbol)
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    //console.log(this.currentSymbol)
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      document.getElementById("seconds").innerHTML = "";
      document.getElementById("timer").innerHTML = "";
      clearInterval(this.countDownInterval);
      this.reset();
    }
    document.getElementById("seconds").innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    clearInterval(this.countDownInterval);
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      document.getElementById("seconds").innerHTML = "";
      document.getElementById("timer").innerHTML = "";
      clearInterval(this.countDownInterval);
      alert('Вы проиграли!');
      this.reset();
    }
    document.getElementById("seconds").innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    clearInterval(this.countDownInterval);
    this.setNewWord();

  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    console.log(word.length)
    console.log(this.timer)
    let dateForTimer = new Date();
    dateForTimer.setHours(dateForTimer.getHours(), dateForTimer.getMinutes(), dateForTimer.getSeconds() + word.length + 2, dateForTimer.getMilliseconds());
    let timeToSubstract = dateForTimer.getTime();
    const countDown = () => {
      let now = new Date().getTime();
      let difference = timeToSubstract - now;
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        if (difference < 0) {
          document.getElementById("timer").innerHTML = "";
          document.getElementById("seconds").innerHTML = "";
          clearInterval(this.countDownInterval);
          alert("Время, отведенное для введения слова истекло");
          this.fail()
      } else if (difference <= 4000) {  
          document.getElementById("timer").innerHTML = "Время истекает " + hours + ":" + minutes + ":";
          document.getElementById("seconds").innerHTML = seconds;
          document.getElementById("seconds").style.color = "red";
          document.getElementById("seconds").style.fontSize = "26px";
      }  else if (difference <= 10000) {
          document.getElementById("timer").innerHTML = "Время почти истекло" + hours + ":" + minutes + ":" + seconds;
          document.getElementById("timer").style.color = "red";
          document.getElementById("timer").style.fontSize = "20px";
      } else {
          document.getElementById("timer").innerHTML = "осталось " + hours + ":" + minutes + ":" + seconds;
      }
    
      console.log(difference)
      
    }

     
      this.countDownInterval = setInterval(countDown, 1000);
      
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
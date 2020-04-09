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
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */

     /* я столкнулся с проблемой - я не могу вызвать this.success() 
     после сравнения текущего символа с введенным, т.к. всегда this.success()
     вызывается из функции,напрямую работает
     (не из функции, а допустим, просто из условной конструкции)
     я пробовал через промис/async даже, но я не знаю как запустить условие проверки
     только после нажатия и чтобы оно не было частью функции при этом. Пожалуйста, помогите/подскажите
    я также пробовал сделать переменную для вызова функции, 
    но при вызове переменной он не может получить this.currentSymbol через метод success() 

     */

    //console.log("started registering")


    let currentKey;
    let currentSymbol = this.currentSymbol;
    let getKey = (event) => {  
       currentKey = event.key
       console.log(currentKey)
       if (currentKey == currentSymbol.textContent) {
       	this.sucess()
       }
    };
    

    document.addEventListener('keydown', getKey);  
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
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
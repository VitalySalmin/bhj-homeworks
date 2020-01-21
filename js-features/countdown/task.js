const hrs = Number(prompt("введите кол-во часов для таймера"));
const minutes = Number(prompt("введите кол-во  минут для таймера"));
const seconds = Number(prompt("введите кол-во  секунд для таймера"));
let dateForTimer = new Date();
/* в следующей строчке, к секундам я добавил время, т.к. без этого до того момента как считатется и собственно отображается difference первый раз проходит две сек. - т.е. если без этого я поставлю таймер скажем на 10 сек. - он начнется с 8ми - я понимаю, что это не лучший способ - но, определенно, самый простой:)) */
dateForTimer.setHours(dateForTimer.getHours() + hrs, dateForTimer.getMinutes() + minutes, dateForTimer.getSeconds() + seconds + 2, dateForTimer.getMilliseconds());;
let timeToSubstract = dateForTimer.getTime();
const url = document.createElement('a');
function downloadFile(data, fileName, type="text/plain") {
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);
    a.href = window.URL.createObjectURL(
      new Blob([data], { type })
    );

    a.setAttribute("download", fileName);

    a.click();

    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
}

const countDown = function() {
    /* Оригинальная версия
    const startCountDownFrom = document.getElementById("timer");
    startCountDownFrom.textContent--;
    if (Number(startCountDownFrom.textContent) === 0) {
        clearInterval(countDownInterval);
        alert("Время вышло");
    }*/
    let now = new Date().getTime();
    let difference = timeToSubstract - now;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    if (difference <= 1000) {
        document.getElementById("timer").innerHTML = "";
        clearInterval(countDownInterval);
        downloadFile("Здесь мог быть ваш текст", "justDownloaded.txt");
        alert("Файл загружен");
    } else if (difference <= 4000) {  
        document.getElementById("timer").innerHTML = "Файл почти готов " + hours + ":" + minutes + ":";
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("seconds").style.color = "red";
        document.getElementById("seconds").style.fontSize = "26px";
    }  else if (difference <= 10000) {
        document.getElementById("timer").innerHTML = "Файл совсем скоро будет готов " + hours + ":" + minutes + ":" + seconds;
        document.getElementById("timer").style.color = "red";
        document.getElementById("timer").style.fontSize = "20px";
    } else {
        document.getElementById("timer").innerHTML = "Файл готовится, осталось " + hours + ":" + minutes + ":" + seconds;
    }
    
    console.log(difference)
    
}

let countDownInterval = setInterval(countDown, 1000);


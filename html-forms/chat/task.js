const botResponses = ["Понял. Хорошо", "Будет сделано", "Пришлю вам ответ скоро", "Хмм...Дайте подумать.."]
const noResponse = ["Жду ответа от вас", "Вы все еще тут?", "Аууу....", "Просто хотел узнать, есть ли ответ у вас"]
const openChat = document.getElementsByClassName("chat-widget__side-text")[0]
const chat =  document.getElementsByClassName("chat-widget")[0] 
openChat.addEventListener('click', e=> {
    chat.classList.add("chat-widget_active")
    const clientMessage = document.getElementById('chat-widget__input'); 
    const clientMessageText  = clientMessage.value;  
    let clientsTurn = true
    let waitingForClientsResponse = 0
    let clientResponded = false

    //console.log(waitingForClientsResponse)
    
    setInterval(function(){ 
      //console.log("sec")
      //console.log(clientsTurn)
      //console.log(waitingForClientsResponse)
      //console.log(waitingForClientsResponse%30)
      if(clientsTurn == true && ((waitingForClientsResponse%30) == 0) && waitingForClientsResponse >= 30) {
        //console.log("client hasn't responded for more than 30 sec")
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${dateTime.getHours()}:${dateTime.getMinutes()}</div>
              <div class="message__text">
                ${noResponse[Math.floor(Math.random() * noResponse.length)]}
              </div>
            </div>
           `;
        waitingForClientsResponse += 1

      } else if(clientsTurn == true && waitingForClientsResponse > 0) {
        //console.log("noresponseTime%30 != 0")
        waitingForClientsResponse += 1
      } else if (clientResponded == true) {
         //console.log("first bot's msg")
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${dateTime.getHours()}:${dateTime.getMinutes()}</div>
              <div class="message__text">
                ${botResponses[Math.floor(Math.random() * botResponses.length)]}
              </div>
            </div>
            `;
        clientResponded = false
        waitingForClientsResponse += 1
        clientsTurn = true
                
       } else if (clientsTurn == true) {
        waitingForClientsResponse += 1
       }     
     }, 1000)
     
     function submitMessage (event) {
       const clientMessage = document.getElementById('chat-widget__input'); 
       let clientMessageText  = clientMessage.value;
       if(event.key == "Enter" && clientMessageText !== "") {
         let d = new Date();
           messages.innerHTML += `
             <div class="message_client">
               <div class="message__time">${d.getHours()}:${d.getMinutes()}</div>
                 <div class="message__text">
                   ${clientMessageText}
                 </div>
             </div>
             `;
           document.getElementsByClassName("message_client")[document.querySelectorAll(".message_client").length - 1].scrollIntoView()
           document.getElementById('chat-widget__input').value = ''
           clientsTurn = false
           clientResponded = true
        }
    }
    document.addEventListener('keypress', submitMessage);
    
})

const messages = document.querySelector( '.chat-widget__messages' );
let dateTime = new Date();

messages.innerHTML += `
  <div class="message">
    <div class="message__time">${dateTime.getHours()}:${dateTime.getMinutes()}</div>
    <div class="message__text">
      Добрый день, меня зовут Бот (просто такое имя). Чем я могу вам помочь?
    </div>
  </div>
`;





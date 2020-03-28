const openChat = document.getElementsByClassName("chat-widget__side-text")[0]
const chat =  document.getElementsByClassName("chat-widget")[0] 
openChat.addEventListener('click', e=> {
    chat.classList.add("chat-widget_active")
    const clientMessage = document.getElementById('chat-widget__input'); 
    const clientMessageText  = clientMessage.value;

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

let clientsTurn = true



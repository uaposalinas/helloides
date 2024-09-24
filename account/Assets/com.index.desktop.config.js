const AccountInfo = document.querySelector('.AccountInfo');
const Renderer = document.querySelector('.Renderer');
const Dialog = document.querySelector('.Dialog');
const ReAuth = document.querySelector('.ReAuth');


AccountInfo.addEventListener('click',e =>{

    Renderer.style.display = "flex";
    
});


window.addEventListener('load', e=>{

    document.body.style.transition = "all 600ms";

})



var Control = false;


window.addEventListener('keydown', e=>{

    const KeyPressed = e.keyCode;

    if(e.shiftKey && KeyPressed == 84){

        e.preventDefault();

        if(Control === false){
    
            document.body.classList.add('theme');
            Control = true;
    
        }else if(Control === true){
    
            document.body.classList.remove('theme');
            Control = false;
    
        }

    }

})



function NewMessage(Message){

    

    
class Messages{

    constructor(Message, WorkType){

        this.Message = Message;
        this.WorkType = "WorkStation";

    }

}

const Notification = new Messages(Message);

const MessageData = document.querySelector('.MessageData');
const MessagesCont = document.querySelector('.Messages');
const MessageSon = document.querySelector('.MessageSon');

MessagesCont.style.display = "none";

setTimeout(() => {
    
    MessagesCont.style.display = "flex";

}, 20);

MessageSon.style.display = "flex";

MessageData.innerHTML = Notification.Message;

setTimeout(() => {
    
    MessageSon.classList.add('RemoveNotification');

    setTimeout(() => {
        
        MessageSon.style.display = "none";
        MessageSon.classList.remove('RemoveNotification');
        MessagesCont.style.display = "none";

    }, 300);

}, 4000);


}


ReAuth.addEventListener('click', e=>{

    window.location.reload()

})







const device = window;
const Loct = window.location;
const Storage = localStorage;

device.addEventListener('load', Init)

function Init(){

    const Connection = navigator.onLine;

}
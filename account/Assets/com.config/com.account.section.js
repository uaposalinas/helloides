
const BackAccountRender = document.querySelector('.BackAccountRender');
const AccountRender = document.querySelector('.Renderer');
const AccountMenuItem = document.querySelectorAll('.AccountMenuItem');
const AccountContent = document.querySelectorAll('.AccountContent');
const AccountMenuItemLength = AccountMenuItem.length;
const UnAuthSession = document.querySelector('.UnAuthSession');
const CloseSession = document.querySelector('.CloseSession');
const AccountMenuItem7 = document.querySelector('.AccountMenuItem7');
const AccountMenuItem4  = document.querySelector('.AccountMenuItem4');
const UnAuthSessionNow = document.querySelector('.UnAuthSessionNow');
const BackButtonMobile = document.querySelector('.BackButtonMobile');


BackAccountRender.addEventListener('click',e=>{

    AccountRender.classList.add('RemoveRenderer');

    setTimeout(() => {
        
        AccountRender.classList.remove('RemoveRenderer');
        AccountRender.style.display = "none";

    }, 300);

})


BackButtonMobile.addEventListener('click',e=>{

    AccountRender.classList.add('RemoveRenderer');

    setTimeout(() => {
        
        AccountRender.classList.remove('RemoveRenderer');
        AccountRender.style.display = "none";

    }, 300);

})


for (let Position = 0; Position < AccountMenuItemLength; Position++) {

    const Elements = AccountMenuItem[Position];

    Elements.addEventListener('click', SetThis);

    function SetThis(e){

        const Index = Array.from(AccountMenuItem).indexOf(e.currentTarget);
        localStorage.setItem('CurrentAccountPosition', Index);
   

        for(let Hide = 0;  Hide < AccountMenuItemLength; Hide++){

            if(Hide == Index){

                AccountMenuItem[Hide].classList.add('Selected');
                AccountContent[Hide].style.display = "flex";
                CloseSession.style.display = "none";

            }else{

                AccountMenuItem[Hide].classList.remove('Selected');
                AccountContent[Hide].style.display = "none";
                CloseSession.style.display = "none";

            }

        }

    }

}


UnAuthSession.addEventListener('click', e=>{

    for(let Delete = 0; Delete < AccountContent.length; Delete++){

        AccountContent[Delete].style.display = "none";
        CloseSession.style.display = "flex";      

    }

})


AccountMenuItem4.addEventListener('click', e=>{

    NewMessage("Para acceder necesitas datos biométricos, y este dispositivo es incompatible con esa característica")

})

AccountMenuItem7.addEventListener('click', e=>{

    NewMessage("Aqui tienes ayuda")

})

UnAuthSessionNow.addEventListener('click', e=>{

    NewMessage("Ok, se está cerrando sesión en este dispositivo");

    setTimeout(() => {
        
        document.querySelector('.IndexPage').classList.add('SignedOut');
        document.querySelector('.Renderer').classList.add('SignedOut');

        setTimeout(() => {
            
            document.querySelector('.IndexPage').style.display = "none";
            document.querySelector('.Renderer').style.display = "none";
            document.querySelector('.Preloader').classList.add("SignedOutNow");
            document.querySelector('.ReAuth').style.display = "flex";
            document.querySelector('.Preloader').style.display = "flex";
            
           // NewMessage("Listo, se cerró sesión.");


        }, 200);


    }, 4500);

})




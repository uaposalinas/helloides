//Declaración de Variables

const Preloader = document.querySelector('.Preloader');
const IndexPage = document.querySelector('.IndexPage');
const RightsInfo = document.querySelector('.RightsInfo');
const MobileRightsInfo = document.querySelector('.MobileRightsInfo');
const root = window;

//Análisis de la carga del documento

root.addEventListener('DOMContentLoaded', InitService)

function InitService(){

    const GetYear = new Date().getFullYear();

    MobileRightsInfo.innerHTML = `Copyright © ${GetYear} DevLabs Corporation LLC. Todos los derechos reservados.`;
    RightsInfo.innerHTML = `Copyright © ${GetYear} DevLabs Corporation LLC. Todos los derechos reservados.`;

    setTimeout(() => {
        
        Preloader.classList.add('HidePreloader');

        setTimeout(() => {
            
            Preloader.style.display = "none";
            IndexPage.style.display = "flex";
            document.body.style.transform = "all 600ms"

        }, 300);

    }, 1000);

}




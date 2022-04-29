const url = 'www.tibia.com'
const validador = 'tibia'

function InformaFakenwes(site) {

    let divNova = document.createElement("div");
    divNova.id = 'is_a_fake';
    divNova.innerHTML  =`
    <div style="text-align: center;">
        <p>CUIDADO! ESTE NÃO É O SITE OFICIAL DO <strong>TIBIA (${site})</strong>!</p>
    </div>
    `;
    divNova.style.position = 'fixed';
    divNova.style.padding = '5px';
    divNova.style.zIndex = '100000';
    divNova.style.left = '0';
    divNova.style.top = '0';
    divNova.style.right = '0';
    divNova.style.fontWeight = '800';
    divNova.style.boxShadow = '10px 10px 50px #ff6666';
    
    divNova.style.backgroundImage = 'linear-gradient(red, #990000)';
    divNova.style.color = '#FFF';
    return divNova;
}

function Aviso(site){
    let div = InformaFakenwes(site);
    let firstChild = document.body.firstChild;
    document.body.insertBefore(div, firstChild);
}

function Verifica(site){
    let site_atual = window.location.host
    console.log(site_atual)

    let re = new RegExp(validador);
    if ((re.test(site_atual)) && (site_atual != site)){
        Aviso(site)
    }else{
    }
}
console.log(window)
window.onload = () => { Verifica(url) }

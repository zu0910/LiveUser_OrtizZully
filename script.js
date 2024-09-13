var link = "https://66e45b7dd2405277ed1408c9.mockapi.io/live";
const information = document.getElementById("info_perso");
document.addEventListener( "keyup", e=> {
    if (e.target.matches("#input")){
        document.querySelectorAll("#info_person").forEach( name => {
            name.textContent.includes(e.target.value)
            ?name.classList.remove("filtro")
            :name.classList.add("filtro")
        })
    }
} )

mostrar(link);

function mostrar(link){
    fetch(link)
        .then( res => res.json())
        .then( data => {
            
            for (const i of data){
                
                information.innerHTML+=`
                <div id="info_person">
                    <div id="img"><img src="${i.avatar}"></div>
                    <div id="nombre" class="info">${i.name_full}</div>
                    <div id="descripcion" class="info">${i.description}</div>
                </div>
                
                `
            }
        })
}
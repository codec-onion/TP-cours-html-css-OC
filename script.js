const boutonVisu = document.getElementsByClassName("bouton_visu");

const div = document.createElement("div");

const img = document.createElement("img");

//Affichage de l'image avec fond noir transparent lors du click sur le lien 
for (let bouton of boutonVisu) {
bouton.addEventListener("click", function(event) {
  event.preventDefault();
  
  div.classList.add("fond_noir_transparent");

  img.setAttribute("src", "img/site_entier.png");
  img.setAttribute("alt", "Image maquette");
    
  document.body.appendChild(div);
  div.appendChild(img);
})}; 

//Suppression à l'écran de l'image et du fond noir lors du click  
div.addEventListener("click", function(event) {
  event.stopPropagation();
  
  div.classList.remove("fond_noir_transparent");
  
  div.removeChild(img);
  document.body.removeChild(div);
});


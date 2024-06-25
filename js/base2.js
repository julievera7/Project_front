const form = document.getElementById("formmain");
const email = document.getElementById("email");

form.addEventListener("submit", (e)=> {
    if(form.checkValidity()===false) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
      validateInput();
      return false;
    }
  });

const isValidEmail = email => {
    const correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return correo.test(String(email).toLowerCase());

}

if (typeof form !== "undefined") {
 
}

const API_SERVER = "http://openlibrary.org/search.json";
const headers = new Headers({
  "User-Agent": "projectfront/1.0 (julievera7@gmail.com)"
});
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        
    }
};

function getbooks(){
  document.getElementById("books").innerHTML="";
  fetch("http://openlibrary.org/search.json?q="+document.getElementById("booksearch").value)
  .then(a=>a.json())
  .then(Response=>{
      for(var i=0; i<6; i++) {
          document.getElementById("books").innerHTML+="<div class='col'>"+"<div class='card'>"+"<img class='card-img-top' src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg'>"+"<div class='card-body'>"+"<h5 class='card-title'>"+Response.docs[i].title+"</h5>"+"<p class='card-text'>"+Response.docs[i].author_name[0]+"</p>"+"</div>"+"</div>"+"</div>";

      }
  });
}

      
        
        
         
          
       
       
/*
for(var i=0; i<3; i++) {
          document.getElementById("books").innerHTML+="<img class='card' sizes='width: 5%' src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg'>"+Response.docs[i].title;
          */
function reiniciar(){
  fetch("https://julievera7.github.io/Project_front/index.html")
}
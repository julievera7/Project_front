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
          document.getElementById("books").innerHTML+="<br><div class='col'>"+"<div class='card'>"+"<img class='card-img-top' src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg'>"+"<div class='card-body'>"+"<h5 class='card-title'>"+Response.docs[i].title+"</h5>"+"<p class='card-text'>"+Response.docs[i].author_name[0]+"</p>"+"</div>"+"</div>"+"</div>";

      }
  });
}


const addForm = document.getElementById("login");

addForm.addEventListener("submit", (e)=> {
  if(addForm.checkValidity() ===false){
    e.preventDefault();
    e.stopPropagation();
    addForm.classList.add('was-validated');
    return false
  }
})

const addRegistro = document.getElementById("registro");
addRegistro.addEventListener("submit", (e)=> {
  if(addRegistro.checkValidity() ===false){
    e.preventDefault();
    e.stopPropagation();
    addRegistro.classList.add('was-validated');
    return false
  }
})

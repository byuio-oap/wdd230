const texto = document.querySelector('#favchap');
const listado = document.querySelector('#list');
const addChapterBoton = document.querySelector('button');

addChapterBoton.addEventListener('click', () =>{

if (texto.value !="") {
    const li = document.createElement('li');
    const deleteButon=document.createElement('button');
   
    li.textContent=texto.value;
    deleteButon.textContent='X';
    
   
    li.appendChild(deleteButon);
    listado.appendChild(li);
   
    deleteButon.addEventListener('click',()=>{
       listado.removeChild(li);
       texto.focus();
    })
       texto.focus();
       texto.value="";
    

}
 
    texto.focus();


});
const texto = document.querySelector('#favchap');
const listado = document.querySelector('#list');
const addChapterBoton = document.querySelector('button');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

addChapterBoton.addEventListener('click', () =>{

if (texto.value !="") {
    displayList(texto.value);
    chaptersArray.push(texto.value);
    setChapterList();/*A function*/
    texto.value="";
    texto.focus();
}

   /* const li = document.createElement('li');
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
 
    texto.focus();*/
    


});

function displayList(item){
    const li = document.createElement('li');
    const deleteButon=document.createElement('button');
   
    li.textContent=item;
    deleteButon.textContent='X';
    
   
    li.appendChild(deleteButon);
    listado.appendChild(li);
   
    deleteButon.addEventListener('click',()=>{
       listado.removeChild(li);
       deleteChapter(li.textContent);
       texto.focus();
    
});

}
function setChapterList(){
    localStorage.setItem('myFavBOMList',JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
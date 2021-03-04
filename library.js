let library=[];
let popUpForm = document.querySelector(".popupForm");

//book Constractor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages                   
    this.read = read
}

//upload to the page
var form = document.querySelector('.form').addEventListener('submit', (event)=>
{
    //prevent actual submit
    event.preventDefault();
    popUpForm.style.display="none";
    //Get form values
    const title = document.querySelector("#bName").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#isRead").checked;
    
    // Instantiate a book
    const newBook = new Book(title,author,pages,read);
    library.push(newBook);
    //createAbook(newBook);
   setData();
    render();
    form.reset();

});


//it deletes whats uploaded and then creates all the stored books plus new one from scratch
function render(){
    const display = document.getElementById('book-list');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
    for(let i=0; i<library.length; i++){
        createAbook(library[i]);
    }
}




function createAbook(newBook){
    const booksList= document.querySelector("#book-list");
    const row = document.createElement('tr');
    row.classList.add('book');
    row.innerHTML =`
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.pages}</td>
    <td><a href="#" class="btn delete ${library.indexOf(newBook)}">X</a></td>
    <td><a href="#" class="readBtn" id="${library.indexOf(newBook)}"></a></td> 
    `;
    booksList.appendChild(row);

function clearFields(){
    document.querySelector('#bName').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
}
clearFields();

const readBtn = document.querySelector(".readBtn");
function uploadBtn(){  
 
if(newBook.read===false){
   readBtn.innerHTML ="Not read";
   readBtn.classList.add('notDone');
}else{
  readBtn.innerHTML ="Read";
  readBtn.classList.add('doneReading');
}
}
uploadBtn();


function deleteBook(el){
    if(el.classList.contains('delete')){
       el.parentElement.parentElement.remove();
       library.splice(library.indexOf(newBook),1);
       setData();
    }
  }
  //Remove a Book
  document.querySelector('#book-list').addEventListener('click',(e)=>{
      deleteBook(e.target);
      setData();
  })

readBtn.addEventListener('click',()=>{
   if(readBtn.innerHTML === "Not read"){
       readBtn.innerHTML = "Read";
       readBtn.classList.remove("notDone");
       readBtn.classList.add("doneReading");
   }else{
       readBtn.innerHTML="Not read";
       readBtn.classList.remove("doneReading");
       readBtn.classList.add("notDone");
   }

  })

}



document.querySelector(".addNewBook").addEventListener('click', function(){
    popUpForm.style.display = 'block';
    } );
document.querySelector(".cancel").addEventListener('click', function(){
    popUpForm.style.display="none";
} );



function setData() {
    localStorage.setItem(`library`, JSON.stringify(library));
}

function restore() {
    if(!localStorage.library) {
        render();
    }else {
        let objects = localStorage.getItem('library')
        objects = JSON.parse(objects);
        library = objects;
        render();
    }
}

restore();
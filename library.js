let library=[];
//book Constractor
function Book(title, author, pages, readOrNot){
    this.title = title
    this.author = author
    this.pages = pages                   
    this.readOrNot = read
}
//Get the values, create a book, push to the library

var form = document.querySelector('.form').addEventListener('submit', (event)=>
{
    //prevent actual submit
    event.preventDefault();
   
    //Get form values
    const title = document.querySelector("#bName").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    let readOrNot = document.querySelector("#read").value;
    // Instantiate a book
    const newBook = new Book(title,author,pages,readOrNot);
    
    library.push(newBook);
    uploadOnThepage(newBook);

    popUpForm.style.display="none";

});



 function uploadOnThepage(newBook){
     
     const booksList= document.querySelector("#book-list");
     const row = document.createElement('tr');
     row.innerHTML =`
     <td>${newBook.title}</td>
     <td>${newBook.author}</td>
     <td>${newBook.pages}</td>
     <td><label class="switch">
     <input type="checkbox">
     <span class="slider round"></span>
   </label></td>
     <td><a href="#" id=${library.indexOf(newBook)} class="btn delete">X</a></td>
     `;
    booksList.appendChild(row);
 

 function clearFields(){
     document.querySelector('#bName').value = "";
     document.querySelector('#author').value = "";
     document.querySelector('#pages').value = "";
     document.querySelector('#read').value = "";
 }
 clearFields();
 }

document.querySelector(".addNewBook").addEventListener('click', function(){
    popUpForm.style.display = 'block';
    } );
document.querySelector(".cancel").addEventListener('click', function(){
    popUpForm.style.display="none";
} );



let popUpForm = document.querySelector(".popupForm");


function deleteBook(el){
  if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
  }
}


//Remove a Book
document.querySelector('#book-list').addEventListener('click',(e)=>{
    deleteBook(e.target);
})
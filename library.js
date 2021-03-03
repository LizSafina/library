let library=[];

//book Constractor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages                   
    this.read = read
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
    const read = document.querySelector("#isRead").checked;
    
    // Instantiate a book
    const newBook = new Book(title,author,pages,read);
    
    library.push(newBook);
    uploadOnThepage(newBook);
    popUpForm.style.display="none";

});

 function uploadOnThepage(newBook){
     const booksList= document.querySelector("#book-list");
     const btnHolder=document.querySelector(".btnHolder");
     const row = document.createElement('tr');
     const readBtn = document.createElement("div");
     readBtn.id="readBtn";
     btnHolder.appendChild(readBtn);
     if(newBook.read===false){
         readBtn.innerHTML ="Not read";
         readBtn.classList.add('notDone');
     }else{
        readBtn.innerHTML ="Read";
        readBtn.classList.add('doneReading');
     }
     row.innerHTML =`
     <td>${newBook.title}</td>
     <td>${newBook.author}</td>
     <td>${newBook.pages}</td>
     <td><a href="#" class="btn delete">X</a></td>
     `;
     
     
      booksList.appendChild(row);
     
 function clearFields(){
     document.querySelector('#bName').value = "";
     document.querySelector('#author').value = "";
     document.querySelector('#pages').value = "";
 }
 clearFields();
 //toggle read button
 document.querySelector("#readBtn").addEventListener('click',()=>{
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


// Step 2: Defining variables and functions
let books = [];

function clearInputs(){
    
}

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks(); // updates the display with the newly added book details. 
        clearInputs(); //resets all input fields
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Step 3: Defining function to show books
function showbooks() {
    const booksDiv = books.map((book, index) => 
    `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name:</strong> ${book.authorName} </p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>`).join('')

    document.getElementById('books').innerHTML = booksDiv;
}

// Step 4: Defining function to clear books
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';}

/*    
Two buttons, one for editing 
<button onclick="editbook(${index})">Edit</button> 
and another for deleting 
<button onclick="deletebook(${index})">Delete</button> 
a specific book. These buttons are configured to call the 
editbook() and deletebook() functions respectively, passing the 
index of the book as a parameter.
*/
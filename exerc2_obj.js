const books = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      pages: 300
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 250
    },
    {
      title: "1984",
      author: "George Orwell",
      pages: 400
    }
  ];

  for(let i = 0; i < books.length; i++){
    console.log("The book " + books[i].title + " by " + books[i].author + " is " + books[i].pages + " pages long.");
  }  
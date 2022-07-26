class Library {
    constructor(){
        this.books = [];
        this.favorites = [];
    }

    buy(book) {
        if (this.books.includes(book)) {
            console.log('Книга куплена');
        }
        return this.books.push(book);
    }
    sell(bookName) {
        this.books.forEach(({author}, index) => {
            if (author === bookName) {
              this.books.splice(index, 1)
            }
        })
        return this.books
    }
    addToFavourite(book) {
        this.favorites.push(
          this.books.find((elem) => {
            return elem.title === book;
          })
        );
      }
    removeFromFavorite(bookName) {
        this.favorites.forEach(({ author }, idx) => {
            if (author === bookName) {
                this.favorites.splice(idx, 1)
            }
        })
        return this.favourite
    }
    get countFavoriteBooks() {
        return this.favorites.length
    }

    get finishedBook() {
      return this.favorites.length + this.books.length
    }
    getTotalCost() {
      let total = 0
      for (const i of this.books) {
        total += i.price
      }
      for (const i of this.favorites) {
        total += i.price
      }
      return total;
    }
}
  
const myLibrary = new Library();

const kobzar = {
    author: "shevchenko",
    title: "kobzar",
    price: 100,
    totalPages: 500,
  };
  
  const azbuka = {
    author: "noname",
    title: "azbuka",
    price: 200,
    totalPages: 10,
  };
  
  const green = {
    author: "green",
    title: "green",
    price: 400,
    totalPages: 450,
  };

myLibrary.buy(kobzar)
myLibrary.buy(azbuka)
myLibrary.buy(green)
myLibrary.sell("noname")
myLibrary.addToFavourite("kobzar")
myLibrary.addToFavourite("green")
myLibrary.removeFromFavorite("green")
myLibrary.countFavoriteBooks
myLibrary.finishedBook
console.log(myLibrary.getTotalCost()); 
console.log(myLibrary);

class Book {
    constructor({ author, title, price, totalPages, currentPage = 0 }) {
      this.author = author;
      this.title = title;
      this.price = price;
      this.totalPages = totalPages;
      this.currentPage = currentPage;
    }
    read(page) {
        this.currentPage += page;
      }
      get bookProgress() {
        return Math.round(this.currentPage * 100/ this.totalPages) 
      }
      set bookProgress(value) {
        this.currentPage = Math.round(this.totalPages * value / 100)
    
      }

}

const book = new Book({
  author: "Repeta", title: "JS", price: 2000, totalPages: 234, currentPage: 123})

book.read(10)
book.read(50)
book.bookProgress
book.bookProgress = 80
console.log(book);



// let a = (book) => {
//     let books = []
//     if(!books.includes(book)) {
//         books.push(book)
//     }
//     else{
//         console.log('no');
//     }
//     return books
// }
// const bAzbuka = {
//     author: "noname",
//     title: "azbuka",
//     price: 200,
//     totalPages: 10,
//   };
// console.log(a(bAzbuka));



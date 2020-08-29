'use strict';

// задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    };

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    };

    set state(state) {
        if (state > 100) {
            this._state = 100;
        } 
        else if (state == 0) {
            this._state = 0;
        }
        else {
            this._state = state;
        };
        return this._state;
    };

    get state() {
        return this._state;
    };
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
  };
};

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = type;
  };
};

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  };
};

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  };
};

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  };
};


// задача 2

class Library {
  constructor(name, books = []) {
    this.name = String(name);
    this.books = books;
  };

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    };
  };

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      };
    };
    return null;
  };

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        let giveBook = this.books[i]
        this.books.splice(i, 1)[0];
        return giveBook;
      };
    };
    return null;
  };

};
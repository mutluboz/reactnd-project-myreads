import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBook from './SearchBook'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books.filter(b => b.shelf !== 'none') })
    })
  }

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((res) => {
      this.setState(function (prevState) {
        let newBooks = [];
        const prevBooks = prevState.books;

        if (prevBooks.find(b => b.id === book.id)) {//update existing book
          //Create a new array from state with map and update the record
          newBooks = prevBooks.map((b) => (
            b.id === book.id ? Object.assign({}, b, { "shelf": newShelf }) : b
          ));
        } else { //add a new book to state
          newBooks = prevBooks.concat([
            Object.assign({}, book, { "shelf": newShelf })
          ]);
        }

        return {
          books: newBooks.filter(b => b.shelf !== 'none')
        }
      });
    })
  }

  searchBooks = (searchCriteria) => {
    return BooksAPI.search(searchCriteria, 10000);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBook onSearchBooks={this.searchBooks} onUpdateBook={this.updateBook} currentBookList={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp

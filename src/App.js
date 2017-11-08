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
  //todo: sort books by shelf -->asc

  updateBook = (book, newShelf) => {
    //todo:consider api errors
    BooksAPI.update(book, newShelf);

    //state should be immutable. Create a new array from state with map and update the record
    const newBooks = this.state.books.map((b) => (
      b.id === book.id ? Object.assign({}, b, { "shelf": newShelf }) : b
    ));

    this.setState({
      books: newBooks.filter(b => b.shelf !== 'none')
    })
  }

  searchBooks = (searchCriteria) =>{
    //todo: perform Api Call
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBook onSearchBooks={this.searchBooks} onUpdateBook={this.updateBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp

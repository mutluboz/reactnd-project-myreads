import React, { Component } from 'react'
import Book from './book'
import PropTypes from 'prop-types'

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
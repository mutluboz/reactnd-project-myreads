import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as  Helpers from '../Helpers'

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        const shelfs = Helpers.GroupBy(this.props.books, 'shelf')

        return (
            <div>
                {Object.keys(shelfs).map((shelf) => (
                    <div className="bookshelf" key={shelf}>
                        <h2 className="bookshelf-title">{Helpers.InitCap(Helpers.SplitCamelCaseText(shelf))}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {shelfs[shelf].map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} onUpdateBook={this.props.onUpdateBook} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Shelf
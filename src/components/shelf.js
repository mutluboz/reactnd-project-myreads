import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as  Helpers from '../Helpers'

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                <div className="bookshelf" key={this.props.shelfName}>
                    {(this.props.shelfName && (<h2 className="bookshelf-title">{Helpers.InitCap(Helpers.SplitCamelCaseText(this.props.shelfName))}</h2>))}
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} onUpdateBook={this.props.onUpdateBook} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf
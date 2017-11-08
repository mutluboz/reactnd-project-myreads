import React, { Component } from 'react'
import Shelf from './components/Shelf'
import PropTypes from 'prop-types'
import { GroupBy } from './Helpers'
import { Link } from 'react-router-dom'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        const shelfs = GroupBy(this.props.books, 'shelf')

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(shelfs).map((shelf) => (
                            <Shelf key={shelf} books={shelfs[shelf]} shelfName={shelf} onUpdateBook={this.props.onUpdateBook} />
                        ))}
                    </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList
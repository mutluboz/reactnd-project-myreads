import React, { Component } from 'react'
import Shelf from './components/shelf'
import PropTypes from 'prop-types'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf books={this.props.books}/>
                    </div>
                    <div className="open-search">
                        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList
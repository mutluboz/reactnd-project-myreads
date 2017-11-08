import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './components/Shelf'

class SearchBook extends Component {
    state = {
        query: '',
        searchResult: []
    }

    Search = (criteria) => {
        if (criteria) {
            this.props.onSearchBooks(criteria).then((searchResult) => (
                this.setState({ searchResult })
            ))
        }
    }

    render() {
        return (
            <div className="search-books" >
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            onKeyDown={(event) => this.Search(event.target.value)}
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <Shelf books={this.state.searchResult} onUpdateBook={this.props.onUpdateBook} />
            </div>
        )
    }
}

export default SearchBook
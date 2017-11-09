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
            this.props.onSearchBooks(criteria).then((searchResult) => {
                //if no matching books found then return an empty array
                if (searchResult.error) {
                    this.setState({ searchResult: [] })
                } else {
                    //set shelf info of search results by comparing the list with props.books
                    const resWithShelfInfo = searchResult.map((res) => {
                        var myBook = this.props.currentBookList.find(b => b.id === res.id);
                        if (myBook) {
                            return Object.assign({}, res, { "shelf": myBook.shelf });
                        } else
                            return res;
                    });
                    this.setState({ searchResult: resWithShelfInfo });
                }
            });
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
                            onChange={(event) => this.Search(event.target.value)}
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <Shelf books={this.props.currentBookList.slice()} onUpdateBook={this.props.onUpdateBook} /> 
            </div>
        )
    }
}

export default SearchBook
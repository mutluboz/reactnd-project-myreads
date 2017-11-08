import React, { Component } from 'react'
import ShelfPicker from '../components/ShelfPicker'

//todo: add onUpdateBook to jsProps
class Book extends Component {
    render() {

        const { book, onUpdateBook } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <ShelfPicker onUpdateBook={onUpdateBook} book={book} />
                </div>
                <div className="book-title">{book.title}</div>
                {/*check book.authors for null to prevent errors*/}
                {(book.authors) && (<div className="book-authors">{book.authors.join('&')}</div>)}
            </div>
        )
    }
}

export default Book
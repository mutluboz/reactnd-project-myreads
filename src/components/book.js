import React, { Component } from 'react'
import ShelfPicker from '../components/ShelfPicker'

//todo: add onUpdateBook to jsProps
class Book extends Component {

    state = {
        updating: false
    }

    updateShelf = (book, newShelf) => {
        this.setState({ updating: true });
        this.props.onUpdateBook(book, newShelf);
    }

    render() {

        const { book } = this.props;
        const { updating } = this.state;

        return (
            <div className="book">
                <div className="book-top">
                    {(updating) && <div className="loading"></div>}
                    <div className={`book-cover${(updating) && ' faded'}`} style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${(book.imageLinks) && (book.imageLinks.thumbnail)})`
                    }}>
                    </div>
                    <ShelfPicker onUpdateBook={this.updateShelf} book={book} updating={this.state.updating} />
                </div>
                <div className="book-title">{book.title}</div>
                {/*check book.authors for null to prevent errors*/}
                {(book.authors) && (<div className="book-authors">{book.authors.join('&')}</div>)}
            </div>
        )
    }
}

export default Book
import React from 'react';

const ShelfPicker = function (props) {
  const options = [
    { "value": "", "text": "Move to...", "disabled": true },
    { "value": "currentlyReading", "text": "Currently Reading", "disabled": false },
    { "value": "wantToRead", "text": "Want to Read", "disabled": false },
    { "value": "read", "text": "Read", "disabled": false },
    { "value": "none", "text": "None", "disabled": false }
  ];

  return (
    <div className="book-shelf-changer">
      <select onChange={(event) => (props.onUpdateBook(props.book, event.target.value))} defaultValue={props.book.shelf ? props.book.shelf : 'none'}>
        {options.map((option) => (
          <option key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.text}</option>
        ))}
      </select>
    </div>
  )
}

export default ShelfPicker;
import React from 'react';
import BookmarkList from '../BookmarkList/BookmarkList'
import Fab from '../Fab/Fab'
// import './BookmarkApp.css'

class BookmarkApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="bookmarkApp">
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks={this.props.bookmarks}/>
                <Fab showForm={this.props.showForm} />
            </div>
         )
    }
}
 
export default BookmarkApp;
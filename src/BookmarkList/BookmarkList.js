import React from 'react';
import BookmarkApp from '../BookmarkApp/BookmarkApp';
import Bookmark from '../Bookmark/Bookmark'

class BookmarkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const bookmarks = this
            .props
            .bookmarks
            .map((bookmark, i) => <Bookmark { ...bookmark } key={i} />)
        return ( 
            <div className="bookmarkList">
                {bookmarks}
            </div>
         );
    }
}

BookmarkList.defaultProps = {
    bookmarks: []
}
 
export default BookmarkList;
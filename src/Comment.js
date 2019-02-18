import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList.js';
import DeleteButton from './DeleteButton.js';
import {ListItem} from 'material-ui/List';
import './comment.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      comments: [],
    };

  }

  render() {
    return (
      <ListItem key={this.props.comment.id} className="comment">
        <div className="UserInfo-name">
            {this.props.comment.name} :
        </div>
        <div className="Comment-text">
          {this.props.comment.comment}
        </div>
        <DeleteButton comment={this.props.comment} username={this.props.username} deleteAction={this.props.deleteComment} commentId={this.props.comment.id}/>
        <CommentList {...this.props} noCommentText="" ids={this.props.comment.children} parent={this.props.comment.id}/>
      </ListItem>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}


export default Comment;


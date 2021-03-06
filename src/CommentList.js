import React from 'react';
import PropTypes from 'prop-types';
import AddComment from './AddComment.js';
import Comment from './Comment.js';
import {List} from 'material-ui/List';


class CommentList extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      comments: [],
    };

  }

  render() {
    return (
      <List>
        {this.props.ids.length?
        this.props.ids.map((id) => 
              <Comment key={id} {...this.props} comment={this.props.comments.byId[id]} />
            ): this.props.noCommentText &&this.props.newCommentsPossible && <b>{this.props.noCommentText}</b>} 
        <AddComment add={(comment)=>{this.props.addComment(comment)}} username={this.props.username} parent={this.props.parent} handleToggleComments={this.props.handleToggleComments} newCommentsPossible={this.props.newCommentsPossible}/>
			</List>
    )
  }
}

CommentList.propTypes = {
  ids: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired,
  parent: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  noCommentText: PropTypes.string.isRequired,
  handleToggleComments: PropTypes.func.isRequired,
  newCommentsPossible: PropTypes.bool.isRequired,
  addComment: PropTypes.func.isRequired,
}


export default CommentList;

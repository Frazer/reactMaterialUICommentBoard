import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './deleteButton.css';
export class DeleteButton extends Component {
  
  render() {
    return (
      <div className="deleteButton">
        {this.props.comment.name === this.props.username?
          <button onClick={()=>{this.props.deleteAction(this.props.commentId)}}>Delete</button>:''}
      </div>
    )
  }
}

DeleteButton.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteAction: PropTypes.func.isRequired,
  commentId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}


export default DeleteButton
import React, { Component } from 'react'
import './deleteButton.css'
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

export default DeleteButton
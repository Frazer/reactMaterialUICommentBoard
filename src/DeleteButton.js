import React, { Component } from 'react'
import './deleteButton.css'
export class DeleteButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  
  render() {
    return (
      <div className="deleteButton">
        {this.props.comment.name === this.props.username? <button onClick={()=>{this.props.deleteAction(this.props.commentId)}}>Delete</button>:''}
      </div>
    )
  }
}

export default DeleteButton
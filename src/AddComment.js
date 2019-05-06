import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {CardActions} from 'material-ui/Card';
import './addComment.css';

export default class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => {
    this.props.handleToggleComments();
    this.setState({
      open: !this.state.open,
    });
  };

  submit = ()=>{
    var comment = {
      comment: this.state.comment,
      children: [],
      parent: this.props.parent
    }
    this.props.add(comment);
    this.handleToggle();
  }

  handleSubmitKey = event => {
    //on shift+enter, submit
    const keyCode = event.keyCode || event.which;
    if(keyCode === 13) {
      this.submit();
    }
  };

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value});
  }


	render(){
    if(this.props.username){
      if(!this.state.open){
        return (
          <span>{this.props.newCommentsPossible&&<RaisedButton className="commentButton" label="+Add comment" onClick={this.handleToggle} />}</span>
        )
      }else{
        return (
          <CardActions>
            <TextField
              hintText="Comment"
              autoFocus="true"
              fullWidth={true}
              onKeyUp={this.handleSubmitKey}
              onChange={this.handleCommentChange}
              ref={(input) => { this.commentSection = input; }}
            />
            <RaisedButton style={{float:"right"}} label="+Submit" onClick={this.submit}/>
          </CardActions>
        )
      }
    }else{
      return (<span><RaisedButton className="commentButton" label="Log in to comment" onClick={()=>{}} /></span>);
    }
	}
}

AddComment.propTypes = {
  handleToggleComments: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  parent: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  newCommentsPossible: PropTypes.bool.isRequired,
}

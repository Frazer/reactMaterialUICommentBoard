import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MainPost from './MainPost.js';
import UserLogIn from './UserLogIn.js';
import CommentsSection from './CommentsSection.js';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      comments:{
        byId:{},
        allRootIds:[]
      },
      commentCounter:0,
      username:'',
      newCommentsPossible:true
    }
    this.usernameUpdate = this.usernameUpdate.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleToggleComments = this.handleToggleComments.bind(this);
  }

  usernameUpdate = (username) =>{
    this.setState({username});
  }
  handleToggleComments = () => {
    this.setState({
      newCommentsPossible: !this.state.newCommentsPossible,
    });
  };

  addComment = (comment)=>{
    let commentObj = {
      ...comment,
      id: this.state.commentCounter,
      name: this.state.username
    }
    let updatedComments = {...this.state.comments};
    //find parent comment
    // if parent,  add to list of child comments
    if(!isNaN(comment.parent)){
      updatedComments.byId[comment.parent].children.push(this.state.commentCounter);
    }else{
      //store commentId in to rootIds
      updatedComments.allRootIds.push(this.state.commentCounter);
    }

    //store comment byId
    updatedComments.byId[this.state.commentCounter] = commentObj;
    this.setState({
      comments:updatedComments,
      commentCounter: this.state.commentCounter+1
    })
    
  }

  deleteComment = (commentId)=>{
    const comment = this.state.comments.byId[commentId];
    const children = this.findChildrenIds(commentId);
    let updatedComments = {...this.state.comments};

    //if comment was in rootIds, remove its id from there
    //else remove it from parents children

    // if has parent,  delete commentId from parents children
    let parentsChildren;
    if(!isNaN(comment.parent)){
      parentsChildren = [...updatedComments.byId[comment.parent].children];
      parentsChildren.splice(parentsChildren.indexOf(commentId),1);
      updatedComments.byId[comment.parent].children = parentsChildren

    }else{
      //else delete from rootIds
      parentsChildren = [...updatedComments.allRootIds];
      parentsChildren.splice(parentsChildren.indexOf(commentId),1);
      updatedComments.allRootIds = parentsChildren
    }
    

    //remove this comment and all children from comments.byIds
    delete updatedComments.byId[commentId];
    children.forEach(child=>{delete updatedComments.byId[child]});

    this.setState({
      comments:updatedComments,
    })
    
  }

  childrenArrayConcat = (acc,current)=>{return acc.concat(this.findChildrenIds(current))};
  findChildrenIds = (commentId)=>{
    const comment = this.state.comments.byId[commentId];
    let children = comment.children.concat(comment.children.reduce(this.childrenArrayConcat,[]));
    return children;
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Forum</h2>
            <UserLogIn name={this.state.username} usernameUpdate={this.usernameUpdate}/>
          </div>
          <MainPost/>
    			<CommentsSection {...this.state} addComment={this.addComment} deleteComment={this.deleteComment} handleToggleComments={this.handleToggleComments}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions} from 'material-ui/Card';
import CommentList from './CommentList.js';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      comments: [],
    };

  }

  render() {
    return (
			<CardActions>
				<Card containerStyle={{margin: "40px"}}>
					<CommentList {...this.props} ids={this.props.comments.allRootIds} noCommentText="No comments yet"/>
				</Card>
			</CardActions>
		);
  }
}

CommentsSection.propTypes = {
  comments: PropTypes.object.isRequired,
}


export default CommentsSection;
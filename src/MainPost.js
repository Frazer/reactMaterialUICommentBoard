import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import './mainPost.css';

const MainPost = () => (
	<Card className="mainPost">
		<CardHeader
				title="Forum"
				subtitle="Multilevel threading"
				avatar="https://upload.wikimedia.org/wikipedia/commons/7/78/UltraVNC_Icon_green.png"/>
		<CardText>
			<h3>Article</h3>
			<p>I have an opinion, and everyone should comment on it.</p>
		</CardText>
  </Card>
);
 
export default MainPost;
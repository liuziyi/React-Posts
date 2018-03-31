import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			post: props.item
		}
	}

	render(){
		return(
			<li className="list-group-item">
				<Link to={`/posts/${this.state.post.id}`}>{this.state.post.title}</Link>
			</li>
		)
	}
}

export default PostItem;
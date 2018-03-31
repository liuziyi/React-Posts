import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component{
	
	constructor(){
		super();
		this.state = {
			title: '',
			body: ''
		}
	}

	inputChange(e){
		// console.log(e.target.value)
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	submitPost(e){
		e.preventDefault();
		// console.log('TITLE ', this.state.title)
		const newPost = {
			title: this.state.title,
			body: this.state.body
		}
		// console.log('NEW POST ', newPost)
		this.addPost(newPost)
	}

	addPost(newPost){
		axios.request({
			method: 'post',
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: newPost
		})
		.then(res => {
			this.props.history.push('/')
		})
		.catch(err => console.log(err))
	}

	render(){
		return(
			<div>
				<h1>Add Post</h1>
				<form>
					<div className="form-group">
						<label>Title</label>
    					<input onChange={this.inputChange.bind(this)} type="text" className="form-control" id="title"/>
					</div>
					<div className="form-group">
						<label>Body</label>
    					<textarea onChange={this.inputChange.bind(this)} className="form-control" id="body" rows="3"></textarea>
					</div>
					<button type="submit" className="btn btn-lg btn-primary"
					onClick={this.submitPost.bind(this)}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default AddPost;
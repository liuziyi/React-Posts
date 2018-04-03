import React, { Component } from 'react';
import axios from 'axios';

class EditPost extends Component {
	
	constructor(){
		super();
		this.state = {
			details: '',
			title: '',
			body: ''
		}
	}

	componentWillMount(){
  		this.getPost();
  	}

  	getPost(){
  		let postId = this.props.match.params.id; 

  		axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  		.then(res => {
  			this.setState({ details: res.data })
  		})
  		.catch(err => console.log(err));
  	}

  	inputChange(e){
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	submitEdit(e){
		e.preventDefault();

		const editPost = {
			title: this.state.title || this.state.details.title,
			body: this.state.body || this.state.details.body
		}

		this.editPost(editPost)
	}

	editPost(editPost){
		let postId = this.props.match.params.id; 

  		axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(res => {
			this.props.history.push('/')
		})
		.catch(err => console.log(err))
	}

	render(){
		return(
			<div>
				<h1>Edit Post</h1>
				<form>
					<div className="form-group">
						<label>Title</label>
    					<input onChange={this.inputChange.bind(this)} 
    						type="text" className="form-control" id="title"
    						placeholder={this.state.details.title}/>
					</div>
					<div className="form-group">
						<label>Body</label>
    					<textarea onChange={this.inputChange.bind(this)} 
    						className="form-control" id="body" rows="3"
    						placeholder={this.state.details.body}>
    					</textarea>
					</div>
					<button type="submit" className="btn btn-lg btn-primary"
					onClick={this.submitEdit.bind(this)}>
						Edit
					</button>
				</form>
			</div>
		)
	}
}

export default EditPost;
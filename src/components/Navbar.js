import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
		<h5 className="my-0 mr-md-auto font-weight-normal">
			<Link className="p-2 text-dark" to="/">POSTS</Link>
		</h5>
		<nav className="my-2 my-md-0 mr-md-3">
			<Link className="p-2 text-dark" to="/about">About</Link>
		</nav>
		<Link className="btn btn-outline-primary" to="/posts/add">Add Post</Link>
	</div>
)

export default Navbar;
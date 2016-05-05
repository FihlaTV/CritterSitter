import React from 'react';
import {Link, browserHistory} from 'react-router';
import user from '../models/user';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			console.log('Component did mount');
			this.setState({
				user: user
			});
		});
	},
	render: function() {	
		if(this.state.user.get('id')){
			console.log('the user IS logged in. Should see only HOME, MY PROFILE, MY CRITTERS, MY MESSAGES, LOG OUT');
			return (
				<nav>
					<Link className="nav-link" to='/'>Home</Link>	
					<Link className="nav-link" to='/profile'>My Profile</Link>	
					<Link className="nav-link" to='/mycritters'>My Critters</Link>
					<Link className="nav-link" to='/sitters'>Browse Sitters</Link>
					{/*<Link className="nav-link" to='/message'>Message Sitter</Link>*/}
					<Link className="nav-link" to='/messages'>My Messages</Link>
					<a href="#" className="nav-links" onClick={this.logout}>Logout</a>
				</nav>);
		}else{
			console.log('the user is NOT logged in. Should see only HOME, REGISTER, SIGN IN. and be sure to THANK AARON LARNER--THE BEST LARNER EVER!!!');
			return (
				<nav>
					<Link className="nav-link" to='/'>Home</Link>
					<Link className="nav-link" to='/register'>Register</Link>	
					<Link className="nav-link" to='/login'>Sign in</Link>
				</nav>);
		}
	},
	logout: function(e) {
		e.preventDefault();
		console.log('user is loggedOUT');
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/');
	}
});









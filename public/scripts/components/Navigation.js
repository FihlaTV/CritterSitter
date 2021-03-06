import React from 'react';
import {Link} from 'react-router';
import user from '../models/user';


export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},
	render: function() {
		if(this.state.user.get('id')){
			return (
				<div className="navdiv">
					<Link className="nav-link" to='/browse'>Browse</Link>
					<Link className="nav-link" to='/messages'>Messages</Link>
					<Link className="nav-link" to='/critters'>Edit Critters</Link>
					<Link className="nav-link" to='/profile'>Edit Profile</Link>
					<Link className="nav-link" to='/dashboard'>Dashboard</Link>
						
					{/*<Link className="nav-link" to={'/browse/:recipientId/message'}></Link>*/}
				</div>);
		}else{
			return (
				<div className="empty-navdiv">
				</div>);
		}
	}
});


// to={`/${this.state.user.get('id')}/dashboard`}
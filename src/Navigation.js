import './Navigation.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
	const location = useLocation();
	const isRegularRoute = location.pathname === '/regular';
	const isHotRoute = location.pathname === '/hot';

	return (
		<nav className="nav flex-column">
			<ul>
				<li>
					<Link to='/regular' className={isRegularRoute ? 'active' : ''}>
						Regular Memes
					</Link>
				</li>
				<li>
					<Link to='/hot' className={isHotRoute ? 'active' : ''}>
						Hot Memes
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;

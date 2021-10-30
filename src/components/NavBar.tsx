import React from "react";
import { Link } from "react-router-dom";
function NavBar({ isAuth }: { isAuth: boolean }) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					{isAuth ? (
						<>
							<li>
								<Link to='/orders'>Ordini</Link>
							</li>
							<li>
								<Link to='/cart'>Carrello</Link>
							</li>
						</>
					) : (
						<>
							<li>
								<Link to='/login'>Accedi</Link>
							</li>
							<li>
								<Link to='/signup'>Registrati</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;

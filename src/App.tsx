// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
// 	return <div className='App'></div>;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Orders from "./screens/Orders";
export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/users'>Users</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					{/* <Route path='/about'>
						< />
					</Route> */}
					<Route path='/users'>
						<Orders />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

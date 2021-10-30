import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Orders from "./screens/Orders";
import Product from "./screens/Product";
import Signup from "./screens/Signup";
export default function App() {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user") as string);

		if (user && user.token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	});
	return (
		<Router>
			<div>
				<NavBar isAuth={isAuth} />
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					{/* <Route path='/about'>
						< />
					</Route> */}

					<Route path='/cart'>
						<Cart />
					</Route>
					<Route path='/orders'>
						<Orders />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/product/:id'>
						<Product />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

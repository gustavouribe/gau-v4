import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

import HeaderMenu from "./components/HeaderMenu";
import MenuBtn from "./components/MenuBtn";


import Home from "./components/Home";
import About from "./components/About";
import Music from "./components/Music";
import Writings from "./components/Writings";
import WebDev from "./components/WebDev";
import Video from "./components/Video";
import Footer from "./components/Footer";
import { Switch, Route, withRouter } from "react-router-dom";
// npm start

const App = () => {
		return (
			<div className='container'>
				<HeaderMenu/>
				<MenuBtn/>


				<div className='wrapper'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/music' component={Music} />
						<Route
							path='/writings'
							component={Writings}
						/>
						<Route
							path='/web development'
							component={WebDev}
						/>
						<Route path='/video' component={Video} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}

export default withRouter(App);

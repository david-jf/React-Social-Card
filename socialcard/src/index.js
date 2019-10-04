import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


/**function Card(props)
{
	return(
		<div className="card">
			<img scr={props.featureImage} alt="image"
				src = "https://via.placeholder.com/600x250.png"
				alt = "cap_image" />
		<div>
			<h5 >{props.title}</h5>
			<p >{props.description}</p>
			<a href={props.link} >Learn more</a>
		</div>
		</div>
		);
}

function CardList()
{
	return(
		<div >
			<div >
				<Card 	featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
					title="how to make an interactive reactjs form"
					description="let's write soem interactive form with react"
					link="https://sebhastian.som/interactive-react-form"
					/>
			</div>
			<div >
				<Card />
			</div>
			<div >
				<Card />
			</div>
		);
}**/

function CardList()
{
	return "hello world";
}

ReactDOM.render(<CardList />, document.getElementById("root"));
serviceWorker.unregister();
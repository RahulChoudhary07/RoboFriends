import React, {Component} from 'react';
import Robotsarray from '../components/Robotsarray';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield :'',
		};
		// console.log('constructor');
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{this.setState({robots:users})});
		// console.log('componentDidMount');
	}

	onSearchChange=(event)=>{
		this.setState({ searchfield:event.target.value });
		// console.log('onSearchChange');
		
	}

	render(){
		
		const filterArray=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		// console.log('render');
		if(this.state.robots.length===0){
			return(

				<div className='tc'>
					<h1>Loading...</h1>

				</div>
			);
			
		}
		else{
			return(
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<Robotsarray robots={filterArray}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
		}
		
	}
	
}

export default App;
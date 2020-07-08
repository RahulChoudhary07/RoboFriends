import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(){
		super();
		this.state={
			isError:false
		}
	}

	componentDidCatch(){
		this.setState({isError:true});
	}
	render(){
		if(this.state.isError){
			return <h1>Opps something went wrong!!!</h1>
		}
		else{
			return this.props.children
		}
	}
}

export default ErrorBoundary;
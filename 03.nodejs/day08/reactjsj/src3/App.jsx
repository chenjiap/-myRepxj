import React, {Component} from 'react';

import './index.css'

import Search from './components/search'

import List from './components/list'

export default class App extends Component {
	state = {
		name:''
	}

	passData = (searchName) => {
		this.setState({
			name:searchName
		})
	}


  render () {
    return <div className="container">
		  <Search passData={this.passData}/>
		  <List name={this.state.name}/>
		</div>


  }
}


import React, {Component} from 'react';


import {publish} from 'pubsub-js'

export default class Search extends Component {
  state = {
    searchName:''
  }




	searchName = () => {
	  const {searchName} = this.state
    if(searchName){
	    publish('SEARCH_NAME',searchName)
    }

  }

	collectName = (e) => {
	  this.setState({
      searchName:e.target.value
    })
  }

  render () {
    return 	<section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" onChange={this.collectName}/>
        <button onClick={this.searchName}>Search</button>
      </div>
    </section>
      
    
  }
}


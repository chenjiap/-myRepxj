import React, {Component} from 'react';

import PropTypes from 'prop-types'

export default class Search extends Component {
  state = {
    searchName:''
  }

  static propTypes = {
		passData:PropTypes.func.isRequired
  }


	searchName = () => {
	  const {searchName} = this.state
    if(searchName){
	    this.props.passData(searchName)
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


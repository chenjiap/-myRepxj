import React, {Component} from 'react';

import {Link,Route } from 'react-router-dom'

import MessageDetail from '../message-detail'

export default class Message extends Component {
	state = {
		messages:[]
	}

	componentDidMount(){
		setTimeout(()=>{
     this.setState({
			 messages:[
				 {id:1,content:'message1~'},
				 {id:2,content:'message2~'},
				 {id:3,content:'message3~'}
			 ]
		 })

		},1000)


	}

	push = (id) => {
		return () => {
			this.props.history.push(`/home/message/${id}`)
		}

	}


	replace = (id) => {
		return () => {
			this.props.history.replace(`/home/message/${id}`)
		}

	}


  render () {
    return <div>
			<ul>
				{
					this.state.messages.map((item,index)=>{
						return <li key={item.id}>
							<Link to={`/home/message/${item.id}`}>{item.content}</Link>
							<button onClick={this.push(item.id)}>push</button>
							<button onClick={this.replace(item.id)}>replace</button>
						</li>

					})
				}
			</ul>
      <Route path='/home/message/:id' component={MessageDetail}/>
		</div>
      
    
  }
}


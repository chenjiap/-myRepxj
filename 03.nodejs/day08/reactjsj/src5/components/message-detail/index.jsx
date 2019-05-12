import React, {Component} from 'react';

export default class MessageDetail extends Component {

		messages = [
			{id:1,title:'message1',content:'message001'},
			{id:2,title:'message2',content:'message002'},
			{id:3,title:'message3',content:'message003'}
		]



  render () {
		const {id} = this.props.match.params
		const message=this.messages.find((item)=>item.id === +id)
    return <ul>
			<li>id:{message.id}</li>
			<li>title:{message.title}</li>
			<li>content:{message.content}</li>
    </ul>
      
    
  }
}




import React from 'react'


import './index.css'

/*
export default class CommentItem extends Component {
	static propTypes = {
		comment:PropsTypes.object.isRequired,
		deleteData:PropsTypes.func.isRequired
	}

	deleteData = () => {
		const {comment:{id,name},deleteData} = this.props
		if(window.confirm(`您确定要删除${name}吗？`))
		deleteData(id)

	}

	render(){
		const {name,content} = this.props.comment
		return  	<li className="list-group-item">
			<div className="handle">
				<button onClick={this.deleteData} className="delete-style">删除</button>
			</div>
			<p className="user"><span >{name}</span><span>说:</span></p>
			<p className="centence">{content}</p>
		</li>

	}



}



*/
export default function CommentItem(props) {
	const {comment:{id,name,content},deleteData} = props
	const deleteDatae = () => {

		if(window.confirm(`您确定要删除${name}吗？`))
			deleteData(id)

	}


		//const {name,content} = this.props.comment
		return  	<li className="list-group-item">
			<div className="handle">
				<button onClick={deleteDatae} className="delete-style">删除</button>
			</div>
			<p className="user"><span >{name}</span><span>说:</span></p>
			<p className="centence">{content}</p>
		</li>






}










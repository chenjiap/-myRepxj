
import React from 'react'


import './index.css'

/*
export default class CommentItem extends Component {
	static propTypes = {
		comment:PropTypes.object.isRequired,
		delComment:PropTypes.func.isRequired
	}

	delComment = () => {
    const {comment:{name,id},delComment} = this.props
		if(window.confirm(`您确定要删除${name}的评论吗？`)){
    	delComment(id)
		}

	}

	render() {
		const {name,content} = this.props.comment
		return  <li className="list-group-item">
			<div className="handle">
				<button onClick={this.delComment} className='my-button'>删除</button>
			</div>
			<p className="user"><span >{name}</span><span>说:</span></p>
			<p className="centence">{content}</p>
		</li>


	}

}
*/

export default function CommentItem({delComment,comment}) {
	const {name,content,id} = comment
	const deleteComment = () => {
		if(window.confirm(`您确定要删除${name}的评论吗？`)){
			delComment(id)
		}

	}



		return  <li className="list-group-item">
			<div className="handle">
				<button onClick={deleteComment} className='my-button'>删除</button>
			</div>
			<p className="user"><span >{name}</span><span>说:</span></p>
			<p className="centence">{content}</p>
		</li>





}
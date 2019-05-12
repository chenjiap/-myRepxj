
import React from 'react'


import CommentItem from '../comment-item'

/*
export default class CommentList extends Component {
	static propTypes = {
		comments:PropTypes.array.isRequired,
		deleteData:PropTypes.func.isRequired
	}

	render(){
		const {comments,deleteData} = this.props
		return <div className="col-md-8">
			<h3 className="reply">评论回复：</h3>
			<h2 style={{display:comments.length?'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
			<ul className="list-group">
				{comments.map((comment,index) => {return <CommentItem comment={comment} key={comment.id} deleteData={deleteData}/> })

				}

			</ul>
		</div>

	}



}
*/


export default function CommentList(props) {
	const {comments,deleteData} = props
	return <div className="col-md-8">
		<h3 className="reply">评论回复：</h3>
		<h2 style={{display:comments.length?'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
		<ul className="list-group">
			{comments.map((comment,index) => {return <CommentItem comment={comment} key={comment.id} deleteData={deleteData}/> })

			}

		</ul>
	</div>
}











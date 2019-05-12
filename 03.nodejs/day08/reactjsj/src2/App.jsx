


import React,{Component} from 'react'

import AddComment from './components/add-comment'

import CommentList from './components/comment-list'

export default class App extends Component {
  state = {
  	comments:[
			{name:'jack',content:'i love rose',id:1},
			{name:'rose',content:'i love jack',id:2}
		]
	}

	collectData = (comment) => {
  	this.setState({
			comments:[comment,...this.state.comments]
		})

	}

	deleteData = (id) => {
  	this.setState({
			comments:this.state.comments.filter((item)=>{return item.id !== id})
		})
	}


	render(){
  	const {comments} = this.state
		return <div>
			<header className="site-header jumbotron">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1>请发表对React的评论</h1>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<AddComment collectData={this.collectData}/>
				<CommentList comments={comments} deleteData={this.deleteData}/>
			</div>
		</div>

	}


}




















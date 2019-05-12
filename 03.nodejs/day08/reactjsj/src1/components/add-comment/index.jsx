
import React,{Component} from 'react'

import PropTypes from 'prop-types'

export default class AddComment extends Component {
	state = {
		name:'',
		content:''
	}
   static propTypes = {addComment:PropTypes.func.isRequired}

   id = 3

	addComment = (e)=> {
   e.preventDefault()
   const {name,content} = this.state
		this.props.addComment({name,content,id:this.id++})
		this.setState({
			name:'',
			content:''
		})
	}

	handleChange = (stateName)=> {
   	return (e) => {
   	this.setState({
			[stateName]:e.target.value
		})
		}
	}

   render(){
		const {name,content} = this.state
   	return <div className="col-md-4" onSubmit={this.addComment}>
			<form className="form-horizontal">
				<div className="form-group">
					<label>用户名</label>
					<input type="text" value={name} className="form-control" placeholder="用户名" onChange={this.handleChange('name')}/>
				</div>
				<div className="form-group">
					<label>评论内容</label>
					<textarea className="form-control" value={content} rows="6" placeholder="评论内容" onChange={this.handleChange('content')}></textarea>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<button type="submit" className="btn btn-default pull-right">提交</button>
					</div>
				</div>
			</form>
		</div>
	 }


}




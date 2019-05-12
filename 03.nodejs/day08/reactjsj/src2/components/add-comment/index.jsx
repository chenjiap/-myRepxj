

import React,{Component} from 'react'

import PropTypes from 'prop-types'

export default class AddComment extends Component {
	static propTypes = {
		collectData:PropTypes.func.isRequired
	}
	
  state = {
  		name:'',
			content:''
	}

	id=3

	submitData = (e) => {
		e.preventDefault()

		const {name,content} = this.state
		this.props.collectData({name,content,id:this.id++})
		this.setState({
			name:'',
			content:''
		})
	}

	collectData = (stateName) => {
		return (e) => {
			this.setState({
				[stateName]:e.target.value

			})
		}

	}


	render(){
		const {name,content} = this.state
		return <div className="col-md-4">
			<form className="form-horizontal" onSubmit={this.submitData}>
				<div className="form-group">
					<label>用户名</label>
					<input type="text" value={name} className="form-control" placeholder="用户名" onChange={this.collectData('name')}/>
				</div>
				<div className="form-group">
					<label>评论内容</label>
					<textarea value={content}   className="form-control" rows="6" placeholder="评论内容" onChange={this.collectData('content') }></textarea>
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















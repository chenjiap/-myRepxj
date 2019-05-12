import React, {Component} from 'react';


import axios from 'axios'

import {subscribe} from 'pubsub-js'

export default class List extends Component {


  state = {
    isDefault:true,
    isLoading:false,
    success:[],
    error:''
  }

  componentDidMount(){
  	subscribe('SEARCH_NAME',(msg,data)=>{
  		console.log(data)
			this.setState({
				isDefault:false,
				isLoading:true
			})
			axios.get(`https://api.github.com/search/users?q=${data}`)
				.then((response) => {
					this.setState({
						isLoading:false,
						success:response.data.items.map((item,index)=>({name:item.login,pic:item.avatar_url,url:item.html_url}))
					})
					console.log(response)

				})
				.catch((error) => {
					this.setState({
						isDefault:false,
						isLoading:false,
						success:[],
						error:'网络错误请刷新试试'
					})
				})
		})
	}

 /* componentWillReceiveProps(nextprops){

   this.setState({
		 isDefault:false,
		 isLoading:true
   })
		axios.get(`https://api.github.com/search/users?q=${nextprops.name}`)
			.then((response) => {
				this.setState({
					isLoading:false,
					success:response.data.items.map((item,index)=>({name:item.login,pic:item.avatar_url,url:item.html_url}))
				})
     console.log(response)

		})
			.catch((error) => {
     this.setState({
			 isDefault:false,
			 isLoading:false,
			 success:[],
       error:'网络错误请刷新试试'
     })
     })

	}*/



  render () {
		const {isDefault,isLoading,success,error}=this.state
		if(isDefault){
			return <h1>enter to search</h1>
		}else if(isLoading){
			return <h1>Loading...</h1>
		}else if(success.length){
			return <div className="row" >
        {
          success.map((item,index)=>{
      return  <div className="card" key={index}>
          <a href={item.url}>
            <img src={item.pic} style={{width: 100}} alt={item.name}/>
          </a>
          <p className="card-text">{item.name}</p>
        </div>
          })
        }
      </div>
		}else {
			return <h1>{error}</h1>
		}



  }}
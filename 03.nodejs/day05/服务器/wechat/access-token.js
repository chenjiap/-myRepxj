
const rp = require('request-promise-native')

const {readFile} = require('fs')
const {writeFileAsync,readFileAsync,isValid} = require('../utils/tools')


class  AccessToken {
   constructor(){
    this.accessToken = null
	 }
	 async getAccessToken(){
		 try {
			 const url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx976338a1a2869f3d&secret=8d9f043d3007baa32bb6c5d572a9e29c'
			 const result = await rp({url,json:true,method:'GET'})
			 result.expires_in = Date.now()+7200000-300000
			 await writeFileAsync('./accessToken.txt',result)
			 /*new Promise((resolve,reject) => {
				writeFile('./accessToken.txt',JSON.stringify(result),(err) => {
				if(!err){
				resolve()
				}else {
				reject()
				}

				})

				})*/

			 return result


		 }catch (err){
			 console.log('getAccessToken方法出问题了：',err)
		 }
	 }

	fetchAccessToken(){
		if(this.accessToken && isValid(accessToken)){
			return promise.resolve(accessToken)
		}

//readFileAsync('../wechat/accessToken.txt')
		return new Promise((resolve,reject) => {
			readFile('../wechat/accessToken.txt',(err,data)=>{
				if(!err){
					resolve(JSON.parse(data.toString()))
				}else {
					reject(err)
				}
			})})
			.then(async (res)=>{
				if(isValid(res)){
					return res
				}else {
					return  await  this.getAccessToken()
				}
			})
			.catch(async (err)=>{
				return await this.getAccessToken()
			})
			.finally((res)=>{
					return this.accessToken = res
				}
			)




	}


}



/*async function getAccessToken() {
  try {
  	const url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx976338a1a2869f3d&secret=8d9f043d3007baa32bb6c5d572a9e29c'
    const result = await rp({url,json:true,method:'GET'})
		result.expires_in = Date.now()+7200000-300000
    await writeFileAsync('../wechat/accessToken.txt',result)
		/!*new Promise((resolve,reject) => {
  		writeFile('./accessToken.txt',JSON.stringify(result),(err) => {
  			if(!err){
  				resolve()
				}else {
  				reject()
				}

			})

		})*!/

    return result


	}catch (err){
  	console.log('getAccessToken方法出问题了：',err)
	}



}*/


function fetchAccessToken() {
	if(accessToken && isValid(accessToken)){
		return promise.resolve(accessToken)
	}

//readFileAsync('../wechat/accessToken.txt')
	return new Promise((resolve,reject) => {
    readFile('../wechat/accessToken.txt',(err,data)=>{
    	if(!err){
    		resolve(JSON.parse(data.toString()))
			}else {
        reject(err)
			}
		})})
			.then(async (res)=>{
				if(isValid(res)){
					return res
				}else {
					return  await  getAccessToken()
				}
			})
			.catch(async (err)=>{
				return await getAccessToken()
			})
		  .finally((res)=>{
				return accessToken = res
			}
		)



}


//module.exports = fetchAccessToken
/*!(async()=>{
	const result = await fetchAccessToken()
  console.log(result)
})()*/
module.exports = AccessToken

const rp = require('request-promise-native')
const AccessToken = require('./access-token')


const {readFile} = require('fs')
const {writeFileAsync,readFileAsync,isValid} = require('../utils/tools')


let ticket = null

async function getTicket() {
  try {

    const {access_token} = await new AccessToken().fetchAccessToken()
		const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
		const result = await rp({url, json: true, method: 'GET'})

		result.expires_in = Date.now()+7200000-300000

		delete result.errcode
		delete result.errmsg

    await writeFileAsync('./ticket.txt',result)
		/*new Promise((resolve,reject) => {
  		writeFile('./ticket.txt',JSON.stringify(result),(err) => {
  			if(!err){
  				resolve()
				}else {
  				reject()
				}

			})

		})*/

    return result


	}catch (err){
  	console.log('getTicket方法出问题了：',err)
	}



}


function fetchTicket() {
	if(ticket && isValid(ticket)){
		return Promise.resolve(ticket)
	}

//readFileAsync('../wechat/ticket.txt')
	return new Promise((resolve,reject) => {
    readFile('./ticket.txt',(err,data)=>{
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
					return  await  getTicket()
				}
			})
			.catch(async (err)=>{
				return await getTicket()
			})
		  .finally((res)=>{
				return ticket = res
		 	}
		 )
		/*.then()
		.catch(err => console.log(err))*/



}
module.exports = fetchTicket
/*
!(async()=>{
	const result = await fetchTicket()
  console.log(result)
})()
*/

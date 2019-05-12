const {writeFile,readFile} = require('fs')

function writeFileAsync(filename,data) {
	new Promise((resolve,reject) => {
		writeFile(filename,JSON.stringify(data),(err) => {
			if(!err){
				resolve()
			}else {
				reject()
			}

		})

	})
}




function readFileAsync(filename) {
	new Promise((resolve,reject) => {
		readFile(filename,(err,data)=>{
			if(!err){
				resolve(JSON.parse(data.toString()))
			}else {
				reject(err)
			}
		})})
}


function isValid(data) {
	return data.expires_in > Date.now()
}


module.exports = {
	writeFileAsync,
  readFileAsync,
	isValid
}


























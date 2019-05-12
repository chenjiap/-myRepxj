
const http = require('http')

module.exports = class Applicatin {
   constructor(){
   	this.middleware = []
	 }

	 use(fn){
   	this.middleware.push(fn)
		 return this
	 }

	 listen(...args){
	 	const server = http.createServer(this.callback())

		 server.listen(...args)
	 }

	 callback(){
	 	const fn = compose(this.middleware)

		const handleRequest = (res,req) => {
	 		fn()

		}

	 }



}































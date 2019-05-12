
const  http = require('http')


module.exports = class Application {
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
		const handleRequest = (req,res) => {
			//this.middleware.forEach((fn) => fn(res,req))
			//fn
			const context = this.createContext(req,res)
			this.handleRequest(context,fn)
		}

		return  handleRequest
	}

	handleRequest(context,middlewareFn){
   const handleResponse = () => {respond(context)}
		middlewareFn(context).then(handleResponse)

	}

	createContext(req,res){
		const context = {}
		context.req = req
    context.res = res
		return context

	}


}

function compose(middleware) {

	return (context) => {

		return dispatch(0)

		function dispatch(i) {
     const fn = middleware[i]
    if(!fn)return Promise.resolve()
			return Promise.resolve(fn(context,dispatch.bind(null,i+1)))
		}


	}

}


function respond(context) {
	let body = context.body
	let res = context.res
	if('string' == typeof body) return res.end(body)
	if('object' == typeof body) return res.end(JSON.stringify(body))

	res.end(body)
}
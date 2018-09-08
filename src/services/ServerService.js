

const BASE_URL = '';

export class ServerService {    
    
	getServerHealth(targetUrl){
		return new Promise((resolve, reject) => {
		 var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		  var request = require('request');
		request.get({url:proxyUrl + targetUrl,json:true}, function(err,response,body){ 
			 if (!err && response.statusCode === 200){
//				 console.log(response.headers);
				// var results = JSON.parse(body);
				 resolve({results:body,headers:response.headers});
				// return results;
			 }else{
				 reject(err);
			 }
		});	
		
		});
	}

}
import baseServices from "./baseServices";

let getProductServices = ()=>{
	return new Promise( (resolve,reject)=>{
		baseServices("http://datainfo.duapp.com/shopdata/getGoods.php","jsonp").then(data=>{
			resolve(data);
		}).catch( error=>{
			reject(error);
		})
	}) 
} 

export default getProductServices;
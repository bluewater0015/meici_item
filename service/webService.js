import baseService from "./baseService";

let getProductService = () =>{
	return new Promise((resolve,reject)=>{
		baseService("http://datainfo.duapp.com/shopdata/getGoods.php","jsonp").then(res=>{
			resolve(res);
		}).catch(error=>{
			reject(error);
		})
	})
}
let postProductService = () => {

}

export {
	getProductService,
	postProductService
}

let get = (url,dataType) =>{
	return new Promise( (resolve,reject)=>{
		$.ajax({
			url,
			type: "get",
			dataType,
			success: (data)=>{
				resolve(data);
			},
			fail : (e)=>{
				console.log(e);
			}
		})
	})
}

let post = (url,dataType) =>{
	return new Promise( (resolve,reject) =>{
		$.ajax({
			url,
			type: "get",
			dataType,
			success: (data)=>{
				console.log(data);
			},
			fail : (e)=>{
				console.log(e);
			}
		})
	})
}
export default get;
export {
	get,
	post
}
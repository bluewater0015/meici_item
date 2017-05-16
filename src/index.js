//index.js
import "./css/reset.css";
import "./css/common.css";
//import "./css/index.less";
require('./css/index.less');
//require('./img/img.jpg');
//import BaseService from "../service/baseService";

//import { getProductService } from "../service/webService";
import getProductServices from "../services/webServices";
$(function(){
	$(".follow_us").mouseenter(function(){
		$(".follow_menu").show();
	}).mouseleave(()=>{
		$(".follow_menu").hide();
	})
	
	// $('.follow_us').hover(function() {
	// 	$(this).find('.follow_menu').css('display', 'block'); 
	// }, function() { 
	// 	$(this).find('.follow_menu').css('display', 'none'); 
	// });
	/*---最近单品---*/
	// $(".nav_ul .recent").mouseenter( () => {
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// /*---女士---*/
	// $(".lady").mouseenter( () => {
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// /*---男仕---*/
	// $(".man").mouseenter( ()=>{
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// /*---童装---*/
	// $(".child").mouseenter( ()=>{
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// ---腕表---
	// $(".wrist_watch").mouseenter( ()=>{
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// /*---品牌---*/
	// $(".brand").mouseenter( ()=>{
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// /*---特惠区---*/
	// $(".benefit").mouseenter( ()=>{
	// 	$("li .nav_com").show();
	// }).mouseleave( ()=>{
	// 	$("li .nav_com").hide();
	// })
	// /*---M潮流---*/
	// $(".nav_ul .tide").mouseenter(()=>{
	// 	$("li .nav_com").show();
	// }).mouseleave(()=>{
	// 	$("li .nav_com").hide();
	// })
	// $(".nav_ul li").mouseenter( ()=>{
	// 	$(".nav_com").show();
	// }).mouseleave( ()=>{
	// 	$(".nav_com").hide();
	// })

	// $(".nav_ul li").mouseenter(function(){
	// 	$(".nav_com").show();
	// }).mouseleave( function(){
	// 	$(".nav_com").hide();
	// })

	// $(".nav_li li").mouseenter( ()=>{
	// 	$(".nav_com").show();
	// }).mouseleave( ()=>{
	// 	$(".nav_com").hide();
	// })

	$(".recent").mouseenter( ()=>{
		$(".recent_product").show();
	}).mouseleave( ()=>{
		$(".recent_product").hide();
	})
	// BaseService("http://datainfo.duapp.com/shopdata/getGoods.php","jsonp").then(res => {
	// 	console.log(res);

	// })
	// getProductService().then(res=>{
	// 	console.log(res);
	// })
	getProductServices().then( data=>{
		console.log("==="+data);
		for(var i=0;i<data.length;i++){
				// oLi += '<div class="recent_product nav_com"><ul><li><h3>' 
				// + data[0].className + '</h3></ul></div>';
				// $(".recent").append(oLi);
				//console.log("data[0]"+ data[0]);
			$(".recent").append(`
				<div class="recent_product nav_com">
					<ul class="ul_recent">
						<li class="line_list">
							<h3>${data[0].className}</h3>
							<h3>${data[0].className}</h3>
							<h3>${data[0].className}</h3>
						</li>
						<li class="man_list">
							<h3>男仕Man</h3>
							<ul class="ul_list">
								<li>${data[1].goodsName}</li>
								<li>${data[1].goodsName}</li>
								<li>${data[1].goodsName}</li>
								<li>${data[1].goodsName}</li>
							</ul>
						</li>
						<li class="woman_list">
							<h3>女士Woman</h3>
							<ul class="ul_list">
								<li>${data[2].goodsName}</li>
								<li>${data[2].goodsName}</li>
								<li>${data[2].goodsName}</li>
								<li>${data[2].goodsName}</li>
							</ul>
						</li>
						<li class="recoment_list">
							<h3>今日推荐品</h3>
							<dl class="dl">
								<dt>
									<img src="${data[0].goodsListImg}" />
								</dt>
								<dd>
									Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
								</dd>
							</dl>
							<dl class="dl">
								<dt>
									<img src="${data[0].goodsListImg}" />
								</dt>
								<dd>
									Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
								</dd>
							</dl>
							<dl class="dl">
								<dt>
									<img src="${data[0].goodsListImg}" />
								</dt>
								<dd>
									Moschino 莫斯奇诺小牛皮 女士迷你双肩包
								</dd>
							</dl>
						</li>
					</ul>
				</div>
			`)
		}
	})
	// $.ajax({
	// 	//type: "get",
	// 	url: "http://datainfo.duapp.com/shopdata/getGoods.php",
	// 	//jsonp: "callback",
	// 	dataType: "jsonp",
	// 	success: function(data){
	// 		console.log(data);
	// 		//JSON.parse() 把字符串转化成对象
	// 		//JSON.stringfy()把对象转化成字符串
	// 		//console.log(data[0].className);
	// 		//var oLi = "";
	// 		console.log(data[0].goodsListImg);
	// 		for(var i=0;i<data.length;i++){
	// 			// oLi += '<div class="recent_product nav_com"><ul><li><h3>' 
	// 			// + data[0].className + '</h3></ul></div>';
	// 			// $(".recent").append(oLi);
	// 			$(".recent").append(`
	// 				<div class="recent_product nav_com">
	// 					<ul class="ul_recent">
	// 						<li class="line_list">
	// 							<h3>${data[0].className}</h3>
	// 							<h3>${data[0].className}</h3>
	// 							<h3>${data[0].className}</h3>
	// 						</li>
	// 						<li class="man_list">
	// 							<h3>男仕Man</h3>
	// 							<ul class="ul_list">
	// 								<li>${data[1].goodsName}</li>
	// 								<li>${data[1].goodsName}</li>
	// 								<li>${data[1].goodsName}</li>
	// 								<li>${data[1].goodsName}</li>
	// 							</ul>
	// 						</li>
	// 						<li class="woman_list">
	// 							<h3>女士Woman</h3>
	// 							<ul class="ul_list">
	// 								<li>${data[2].goodsName}</li>
	// 								<li>${data[2].goodsName}</li>
	// 								<li>${data[2].goodsName}</li>
	// 								<li>${data[2].goodsName}</li>
	// 							</ul>
	// 						</li>
	// 						<li class="recoment_list">
	// 							<h3>今日推荐品</h3>
	// 							<dl class="dl">
	// 								<dt>
	// 									<img src="${data[0].goodsListImg}" />
	// 								</dt>
	// 								<dd>
	// 									Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
	// 								</dd>
	// 							</dl>
	// 							<dl class="dl">
	// 								<dt>
	// 									<img src="${data[0].goodsListImg}" />
	// 								</dt>
	// 								<dd>
	// 									Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
	// 								</dd>
	// 							</dl>
	// 							<dl class="dl">
	// 								<dt>
	// 									<img src="${data[0].goodsListImg}" />
	// 								</dt>
	// 								<dd>
	// 									Moschino 莫斯奇诺小牛皮 女士迷你双肩包
	// 								</dd>
	// 							</dl>
	// 						</li>
	// 					</ul>
	// 				</div>
	// 			`)
	// 		}
	// 	}
	// })
})



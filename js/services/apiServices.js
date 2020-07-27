var CHApiServices = (function(){
    var options = {
//  	"url":"", //	请求的URL
//  	"method":"", //请求的HTTP方法，例如：'GET', 'POST'或其他HTTP方法
    	//"body":"", //request body
    	//"params":"", //请求的URL参数对象
//  	"headers":"", //request header
    	"timeout":10000, //单位为毫秒的请求超时时间 (0 表示无超时时间)
    	"before":"", //请求发送前的处理函数，类似于jQuery的beforeSend函数
    	"progress":"", //ProgressEvent回调处理函数
    	"headers":{'content-type': 'application/json'},
    	"credientials":"",//表示跨域请求时是否需要使用凭证
    	"emulateHTTP":true,//发送PUT, PATCH, DELETE请求时以HTTP POST的方式发送，并设置请求头的X-HTTP-Method-Overrid
    	"emulateJSON":false //将request body以application/x-www-form-urlencoded content type发送
    }
    var uplaod_options = {
    	"timeout":10000, //单位为毫秒的请求超时时间 (0 表示无超时时间)
    	"before":"", //请求发送前的处理函数，类似于jQuery的beforeSend函数
    	"progress":"", //ProgressEvent回调处理函数
    	//"headers":{'content-type': 'application/json'},
    	"credientials":"",//表示跨域请求时是否需要使用凭证
    	"emulateHTTP":true,//发送PUT, PATCH, DELETE请求时以HTTP POST的方式发送，并设置请求头的X-HTTP-Method-Overrid
    	"emulateJSON":false //将request body以application/x-www-form-urlencoded content type发送
    }
	var default_ops = {"success_handler":null,"error_handler":null};
	//封装请求头
	var request_data=function (data,method) {
		_cache_checkin.dev_info.serviceId = null != _cache_checkin.dev_info.serviceId && "" != _cache_checkin.dev_info.serviceId ? _cache_checkin.dev_info.serviceId : CHUtil.get_unit_sn();
		data=JSON.stringify(data).replace(/\"/g, "\\\"");
        var command = '{"serviceId": "'+_cache_checkin.dev_info.serviceId+'","data":"'+ data +'","devUniqueNo": "'+_cache_checkin.dev_info.devUniqueNo+'","devModel": "'+_cache_checkin.dev_info.devModel
        +'","platform": "android","method": "'+method+'","devOsVer": "'+_cache_checkin.dev_info.devOsVer+'","appVer": "'+_cache_checkin.dev_info.appVer+'","echostr": "7891",'
        +'"timestamp": "'+new Date().format("yyyyMMddhhmmss")+'","sign": "2c1b416dd0942bdc8291615d176b7f34","retryKey": "'+_cache_checkin.dev_info.retryKey+'","language":"'+_cache_checkin.current_page_language+'"}';
        return command;
   }
	//封装请求头
	var request_data_2=function (data) {
		data=JSON.stringify(data).replace(/\"/g, "\\\"");
        var command = '{"serviceId": "'+_cache_checkin.dev_info.serviceId+'","data":"'+ data +'","devUniqueNo": "'+_cache_checkin.dev_info.devUniqueNo+'","devModel": "'+_cache_checkin.dev_info.devModel
        +'","platform": "android","devOsVer": "'+_cache_checkin.dev_info.devOsVer+'","appVer": "'+_cache_checkin.dev_info.appVer+'","echostr": "7891","wiredMac":"'+_cache_checkin.dev_info.ethMac+'","wiredIp":"'+_cache_checkin.dev_info.ethIp
        +'","timestamp": "'+new Date().format("yyyyMMddhhmmss")+'","sign": "2c1b416dd0942bdc8291615d176b7f34","retryKey": "'+_cache_checkin.dev_info.retryKey+'","wirelessIp":"'+_cache_checkin.dev_info.wifiIp+'","wirelessMac":"'+_cache_checkin.dev_info.wifiMac+'"}';
        return command;
   }
	//解析响应
	var response_parse=function (response){
		response=response.body;
		return response;
	}
	//发送请求头
	var api_send_post = function(req,method,successCallback,errorFnc) {
		default_ops.success_handler = successCallback;
		default_ops.error_handler = errorFnc;
		
		var req = this.request_data(req,method);
        var url = _cache_checkin.dev_info.pmsBizUrl;
		//记录本队日志
		if(method != server_infaces.heartBeat){
			//记录非心跳接口日志
			CHUtil.local_log("=======api "+method+" request:" + req);
		}
		
		Vue.http.post(url, req,options).then(function(response){
			if(null != default_ops.success_handler && CHUtil.isFunc(default_ops.success_handler)){
				
				default_ops.success_handler(response);
				//记录本队日志
				if(method != server_infaces.heartBeat){
					CHUtil.local_log("============api response:" + response);
				}
			}
		}, function(response){
			CHUtil.local_log("api"+method+"error response:" + response);
			if(null != errorFnc && CHUtil.isFunc(errorFnc)){
				errorFnc(response);
			}else{
				var status = undefined == response.status ? "" : "【" +response.status +"】";
				//请求错误,弹窗提示
				var msg = _locate_message.common_tip.net_time_out;
				CHUtil.common_pop_v2("",msg,_constants.lock_time_out,null,null,"",status);
			}
	        
		});
		
	};
	//发送请求头
	var api_ws_send_post = function(req,url,successCallback,errorFnc) {
		req = this.request_data_2(req);
		url = "" != url && null != url ? url : _cache_checkin.dev_info.pmsBizUrl;
		//记录本队日志
		CHUtil.local_log("api"+url+" request:" + req);
		Vue.http.post(url, req,options).then(successCallback, errorFnc);
	};
	//发送请求头
	var api_normal_send_post = function(req,url,successCallback,errorFnc) {
		//记录本队日志
		CHUtil.local_log("api"+url+" request:" + req);
		Vue.http.post(url, req,options).then(successCallback, errorFnc);
	};
	//发送请求头
	var api_formdata_send_post = function(req,url,successCallback,errorFnc) {
		//记录本队日志
		CHUtil.local_log("api "+url+" request:" + req);
		Vue.http.post(url, req,uplaod_options).then(successCallback, errorFnc);
	};
	
	return {
		"api_normal_send_post":api_normal_send_post,
		"api_ws_send_post":api_ws_send_post,
		"api_send_post":api_send_post,
		"response_parse":response_parse,
		"request_data_2":request_data_2,
		"request_data":request_data,
		"api_formdata_send_post":api_formdata_send_post
	}
})();

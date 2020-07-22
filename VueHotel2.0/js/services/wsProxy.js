var CHWsProxy = (function(){
	var cash_msg_map = new Map();
	cash_msg_map.set(_web_socket_code.CMD_PRINTER,{"msgId":"etsst","handler":null});//打印
	cash_msg_map.set(_web_socket_code.CMD_CARD_MACHINE,{"msgId":null,"handler":null});//卡机
	cash_msg_map.set(_web_socket_code.CMD_IDCARD,{"msgId":null,"handler":null});//身份证
	cash_msg_map.set(_web_socket_code.CMD_FLASH,{"msgId":null,"handler":null});//闪光灯
	cash_msg_map.set(_web_socket_code.CMD_CONFIG_MACHINE,{"msgId":null,"handler":null});//闪光灯
	//封装请求头
	var request_data=function (type,method,data,msgId) {
		msgId = type+"_"+msgId+"_"+(new Date().getTime());
        var command = '{"type":"'+type+'","method":"'+method+'","data":"'+data+'","msgId":"'+msgId+'"}';
        return command;
    }
	
	var reset_flag = function(cmd){
		//发送身份证指令
		if(cmd == _web_socket_code.CMD_IDCARD){
			driver_proxy_flags.ID_FLAG = 1;//可发送
		}
		//发送卡机指令
		if(cmd == _web_socket_code.CMD_CARD_MACHINE){
			driver_proxy_flags.CARD_FLAG = 1;//可发送
			
		}
		//发送打印指令
		if(cmd == _web_socket_code.CMD_PRINTER){
			driver_proxy_flags.PRINT_FLAG = 1;//可发送
		}
		//发送闪光灯指令
		if(cmd == _web_socket_code.CMD_FLASH){
			driver_proxy_flags.FLESH_FLAG = 1;//可发送
		}
		//发送设置指令指令
		if(cmd == _web_socket_code.CMD_CONFIG_MACHINE){
			driver_proxy_flags.CONFIG_FLAG = 1;//可发送
		}
		if(null == cmd){
			driver_proxy_flags.ID_FLAG = 1;
			driver_proxy_flags.CARD_FLAG = 1;
			driver_proxy_flags.PRINT_FLAG = 1;
			driver_proxy_flags.FLESH_FLAG = 1;
			driver_proxy_flags.CONFIG_FLAG = 1;
		}
	}
	
	var can_send_cmd = function(cmd,handler,msgId,method){
		var res = false;
		if(null == handler || undefined == handler){
			//处理函数不存在，不发送指令
			return false;
		}
	    //发送身份证指令
		if(cmd == _web_socket_code.CMD_IDCARD){
			if(driver_proxy_flags.ID_FLAG == 1 || method==_web_socket_code.METHOD_STOP){//可发送
				res = true;
				driver_proxy_flags.ID_FLAG = 0;//置为不可发送
			}
		}
		//发送卡机指令
		if(cmd == _web_socket_code.CMD_CARD_MACHINE){
			if(driver_proxy_flags.CARD_FLAG == 1){//可发送
				res = true;
				driver_proxy_flags.CARD_FLAG = 0;//置为不可发送
			}
		}
		//发送打印指令
		if(cmd == _web_socket_code.CMD_PRINTER){
			if(driver_proxy_flags.PRINT_FLAG == 1){//可发送
				res = true;
				driver_proxy_flags.PRINT_FLAG = 0;//置为不可发送
			}
		}
		//发送闪光灯指令
		if(cmd == _web_socket_code.CMD_FLASH){
			if(driver_proxy_flags.FLESH_FLAG == 1){//可发送
				res = true;
				driver_proxy_flags.FLESH_FLAG = 0;//置为不可发送
			}
		}
		//发送设置指令
		if(cmd == _web_socket_code.CMD_CONFIG_MACHINE){
			if(driver_proxy_flags.CONFIG_FLAG == 1){//可发送
				res = true;
				driver_proxy_flags.CONFIG_FLAG = 0;//置为不可发送
			}
		}

		return res;
	}
	/**
	 * ================设置指令map数据====================
	 */
	var set_cache_map_data = function(cmd,handler,msgId){//可以发送指令，
		if(undefined == cash_msg_map.get(cmd)) {
			//不存在，设置消息信息
			cash_msg_map.set(cmd,{"msgId":msgId,"handler":handler})
		}else{
			cash_msg_map.get(cmd).msgId=msgId;
			cash_msg_map.get(cmd).handler=handler;
		}
		
	}
	
	//解析响应
	var response_parse_normal=function (response){
		var data = eval('(' + response + ')');
		return data;
	}
	
	var ws_data_callback = function(response){
		//记录日志
		//CHUtil.local_log("【websocket】reponse data :" + response);
		
		var data = CHWsService.response_parse_normal(response);
		var type=data.type;
		var code = data.code;
		var method=data.method;
		var msgId = data.msgId;
		
		var isLog = true;
		//是否记日志
		if(type == _web_socket_code.CMD_CARD_MACHINE && method == _web_socket_code.METHOD_STATUS){
			//获取卡机状态不记日志
			//isLog = false;
		}
		
		var msgInfo = cash_msg_map.get(type);
		if(undefined != msgInfo && msgInfo.msgId == msgId){
			
			//websocket返回的msgid相等，则处理
			if(null != msgInfo.handler && CHUtil.isFunc(msgInfo.handler)){
				msgInfo.handler(response);
			}else{
				//记录日志
				if(isLog){
					CHUtil.local_log("response no handler");
				}
			}
		}else{
			//记录日志
			if(isLog){
				var log_info = "==================send cmd response to different message===============";
				CHUtil.local_log("response: " + log_info);
			}
		}
	}
	/**
	 * ====================发送指令==============
	 */
	var ws_send=function (request_data,received_msg,connect_callbak,error_callback,close_callback,cmd) {
		//console.log(request_data);
		//log info
		var req = eval('(' + request_data + ')');
		var msgId = req.msgId;
		var method = req.method;
		var type = req.type;
		var can_send = false;
		if(type == _web_socket_code.CMD_IDCARD && method == _web_socket_code.METHOD_STOP){
		  //终止身份扫描，直接执行
		  can_send = true;
		} else {
			can_send = can_send_cmd(cmd,received_msg,msgId,method);
		}
		var isLog = true;//是否记日志
		if(type == _web_socket_code.CMD_CARD_MACHINE && method == _web_socket_code.METHOD_STATUS){
			//获取卡机状态不记日志
			//isLog = false;
		}else{
			CHUtil.local_log(_cache_checkin.dev_info.devDriverUrl);
		    CHUtil.local_log("send data:" + request_data);
		}
		
		if(can_send){//可以发送指令
		    //设置指令map数据，存储指令信息
		    set_cache_map_data(cmd,received_msg,msgId);
			if(isLog){
				var ws_log_info= "==================send cmd to driver===============<hr/>";
				//记录日志
				CHUtil.local_log(ws_log_info);
			}
			 
			CHWsService.ws_send(request_data,_cache_checkin.dev_info.devDriverUrl,ws_data_callback,function(response){
				//记录日志
				if(isLog){
					CHUtil.local_log("driver connect callbak" + response);
				}
				if(connect_callbak && CHUtil.isFunc(connect_callbak)){
					connect_callbak(response);
				}
			},function(response){
				//记录日志
				if(isLog){
					CHUtil.local_log("driver error callbak" + response);
				}
				if(error_callback && CHUtil.isFunc(error_callback)){
					error_callback(response);
				}
			},function(response){
				//记录日志
				if(isLog){
				//CHUtil.local_log("【websocket】close callbak" + response);
				}
				if(close_callback && CHUtil.isFunc(close_callback)){
					close_callback(response);
				}
			});
		}else{
			if(isLog){
				//不可以发送指令
				var ws_log_info = "==================not allown send cmd to driver===============<hr/>";
				//记录日志
				CHUtil.local_log(ws_log_info);
			}
		}
		
		return can_send;
	}
	
	/**
	 * =============清理消息存储对象的信息==================
	 */
	var clear_cache_msg_info = function(){
		cash_msg_map.set(_web_socket_code.CMD_PRINTER,{"msgId":null,"handler":null});//打印
		cash_msg_map.set(_web_socket_code.CMD_CARD_MACHINE,{"msgId":null,"handler":null});//卡机
		cash_msg_map.set(_web_socket_code.CMD_IDCARD,{"msgId":null,"handler":null});//身份证
		cash_msg_map.set(_web_socket_code.CMD_FLASH,{"msgId":null,"handler":null});//闪光灯
		reset_flag(null);
	}
	
	var get_cache_map = function(){
		return cash_msg_map;
	}
	
	var set_cache_map = function(cmd,msgid){
		cash_msg_map.get(cmd).msgId = msgid;
	}
	
	return {
		"ws_send":ws_send,
		"reset_flag":reset_flag,
		"request_data":request_data,
		"get_cache_map":get_cache_map,
		"set_cache_map":set_cache_map,
		"clear_cache_msg_info" : clear_cache_msg_info,
		"response_parse_normal":response_parse_normal
	}
})();
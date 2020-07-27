var CHWsService = (function(){
	//封装请求头
	var request_data=function (type,method,data,msgId) {
        var command = '{"type":"'+type+'","method":"'+method+'","data":"'+data+'","msgId":"'+msgId+'"}';
        return command;
    }
	
	//封装xml
	var request_printXml=function (isStr,msg){
		var printRs = "";
		if(!isStr) {
			var printXml = "<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\" ?>";
			printXml += '<lines>';
			printXml += ' <line bold=\\\"true\\\" doubleSize=\\\"true\\\" center=\\\"true\\\" newLine=\\\"3\\\" tag=\\\"hotelName\\\">';
		    printXml += '<text>Millennium Plaza Hotel</text>';
			printXml += '</line>';
			printXml += '<line center=\\\"true\\\"><text>Dubai</text></line>';
			printXml += '<line restoreSize=\\\"true\\\" bold=\\\"true\\\" center=\\\"true\\\" newLine=\\\"3\\\">';
			printXml += '<text>Room No</text>';
			printXml += '</line>';
			printXml += '<line doubleSize=\\\"true\\\" tag=\\\"roomNo\\\" newLine=\\\"3\\\">';
			printXml += '<text>8001</text>';
			printXml += '</line>';
			printXml += '<line restoreSize=\\\"true\\\" newLine=\\\"5\\\">';
			printXml += '<text>Arrival Date</text>';
			printXml += '</line>';
			printXml += '<line tag=\\\"arrivalDate\\\" newLine=\\\"1\\\">';
			printXml += '<text>2017/03/21 17:21</text>';
			printXml += '</line>';
			printXml += '<line newLine=\\\"1\\\">';
			printXml += '<text>Departure Date</text>';
			printXml += '</line>';
			printXml += '<line tag=\\\"departureDate\\\" newLine=\\\"1\\\">';
			printXml += '<text>2017/03/21 17:21</text>';
			printXml += '</line>';
			//printXml += '<line newLine=\\\"5\\\" restoreSize=\\\"true\\\">';
			//printXml += '<text>有效期:'+cache_data.checkinTime+"~"+cache_data.checkoutTime+'</text>';
			//printXml += '</line>';
			printXml += '<line newLine=\\\"1\\\" underLineHeight=\\\"0\\\">';
			printXml += '<text>Signature:_____________________</text>';
			printXml += '</line>';
			//printXml += '<line newLine=\\\"1\\\" tag=\\\"currentDate\\\">';
			//printXml += '<text>打印时间 Print Time '+nowTime+'</text>';
			//printXml += '</line>';
			printXml += '<line newLine=\\\"10\\\" />';
			printXml += '</lines>';
			printRs = printXml;
		}else{
			printRs = msg;
		}
		return printRs;
	}
	
	//封装xml
	var request_print_real_Xml=function (hotelName,roomNo,checkinDate,checkoutDate,name){
		var printRs = "";
		name = name ? name : "";
		var nowTime = new Date().format("yyyy/MM/dd");
			var printXml = "<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\" ?>";
			printXml += '<lines>';
			printXml += ' <line bold=\\\"true\\\" doubleSize=\\\"true\\\" center=\\\"true\\\" newLine=\\\"1\\\" tag=\\\"hotelName\\\">';
		    printXml += '<text>'+hotelName+'</text>';
			printXml += '</line>';
			printXml += '<line restoreSize=\\\"true\\\" bold=\\\"true\\\" center=\\\"true\\\" newLine=\\\"1\\\">';
			printXml += '<text>Room No</text>';
			printXml += '</line>';
			printXml += '<line doubleSize=\\\"true\\\" tag=\\\"roomNo\\\" newLine=\\\"1\\\">';
			printXml += '<text>'+roomNo+'</text>';
			printXml += '</line>';
			printXml += '<line doubleSize=\\\"true\\\" tag=\\\"name\\\" newLine=\\\"1\\\">';
			printXml += '<text>'+name+'</text>';
			printXml += '</line>';
			printXml += '<line restoreSize=\\\"true\\\" newLine=\\\"1\\\">';
			printXml += '<text>Arrival Date</text>';
			printXml += '</line>';
			printXml += '<line tag=\\\"arrivalDate\\\" newLine=\\\"1\\\">';
			printXml += '<text>'+checkinDate+'</text>';
			printXml += '</line>';
			printXml += '<line newLine=\\\"1\\\">';
			printXml += '<text>Departure Date</text>';
			printXml += '</line>';
			printXml += '<line tag=\\\"departureDate\\\" newLine=\\\"1\\\">';
			printXml += '<text>'+checkoutDate+'</text>';
			printXml += '</line>';
			//printXml += '<line newLine=\\\"5\\\" restoreSize=\\\"true\\\">';
			//printXml += '<text>有效期:'+cache_data.checkinTime+"~"+cache_data.checkoutTime+'</text>';
			//printXml += '</line>';
			printXml += '<line newLine=\\\"1\\\" underLineHeight=\\\"0\\\">';
			printXml += '<text>Signature:_______________</text>';
			printXml += '</line>';
			// printXml += '<line newLine=\\\"1\\\" underLineHeight=\\\"0\\\">';
			// printXml += '<text>_______________________________</text>';
			// printXml += '</line>';
			printXml += '<line newLine=\\\"1\\\" tag=\\\"currentDate\\\">';
			printXml += '<text>Print Time '+nowTime+'</text>';
			printXml += '</line>';
			printXml += '<line newLine=\\\"6\\\" />';
			printXml += '</lines>';
			printRs = printXml;
		
		return printRs;
	}
	var getBrowserInfo = function(){
		var s = "<div>"; 
		s += " 网页可见区域宽："+ document.body.clientWidth+"<br />"; 
		s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)"+"<br />";  
		s += " 屏幕分辨率的高："+ window.screen.height+"<br />"; 
		s += " 屏幕分辨率的宽："+ window.screen.width+"<br />"; 
		s += " 屏幕可用工作区高度："+ window.screen.availHeight+"<br />"; 
		s += " 屏幕可用工作区宽度："+ window.screen.availWidth+"<br />"; 
		s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色"+"<br />"; 
		s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+"<br /></div>"; 
		return s;
	}
	var request_send_card = function () {
		var lockType = common_getLocalStorage("lockType");
		if(!lockType){
			lockType = 2;
		}
		//创佳
		//var cardInfo = '{\\"lockType\\":2,\\"writeKey\\":\\"5F01015F0101\\",\\"systemPw\\":\\"8B07628B0762\\",\\"room\\":\\"44\\",\\"startTime\\":\\"2018-10-30 14:11\\",\\"endTime\\":\\"2018-10-31 12:00:00\\",\\"inmate\\":\\"false\\",\\"batchNo\\":\\"105\\",\\"waterNo\\":\\"12\\",\\"roomNo\\":\\"A044\\",\\"expectedDate\\":\\"2018-10-31 12:00:00\\"}';
		var cardInfo = '{\\"lockType\\":'+lockType+',\\"writeKey\\":\\"5F01015F0101\\",\\"systemPw\\":\\"8B07628B0762\\",\\"room\\":\\"44\\",\\"startTime\\":\\"2018-10-30 14:11\\",\\"endTime\\":\\"2018-10-31 12:00:00\\",\\"inmate\\":\\"false\\",\\"batchNo\\":\\"105\\",\\"waterNo\\":\\"12\\",\\"roomNo\\":\\"A044\\",\\"expectedDate\\":\\"2018-10-31 12:00:00\\",\\"holder\\":\\"张三\\",\\"mobile\\":\\"18723232323\\",\\"idNo\\":\\"450422178576876888\\",\\"breakfast\\":1,\\"lockNo\\":\\"44\\",\\"reservation\\":\\"R1928377443737\\",\\"accessList\\":\\"0001,0002\\",\\"liftList\\":\\"0001\\"}';
	    return cardInfo;
	}
	var request_send_card_data = function (data) {
		var cardInfo = '{\\"lockType\\":'+data.lockType+',\\"writeKey\\":\\"'+data.writeKey+'\\",\\"systemPw\\":\\"'+data.systemPw+'\\",\\"room\\":\\"'+data.room+'\\",\\"startTime\\":\\"'+data.startTime+'\\",\\"endTime\\":\\"'+data.endTime+'\\",\\"inmate\\":\\"'+data.inmate+'\\",\\"batchNo\\":\\"'+data.batchNo+'\\",\\"waterNo\\":\\"'+data.waterNo+'\\",\\"roomNo\\":\\"'+data.roomNo+'\\",\\"expectedDate\\":\\"'+data.expectedDate+'\\"}';
	    return cardInfo;
	}
	var request_normal_send_card_data = function (data) {
		var cardInfo = '{\\"lockType\\":'+data.lockType+',\\"writeKey\\":\\"'+data.writeKey+'\\",\\"systemPw\\":\\"'+data.systemPw+'\\",\\"room\\":\\"'+data.room+'\\",\\"startTime\\":\\"'+data.startTime+'\\",\\"endTime\\":\\"'+data.endTime+'\\",\\"inmate\\":\\"'+data.inmate+'\\",\\"batchNo\\":\\"'+data.batchNo+'\\",\\"waterNo\\":\\"'+data.waterNo+'\\",\\"roomNo\\":\\"'+data.roomNo+'\\",\\"holder\\":\\"'+data.holder+'\\",\\"mobile\\":\\"'+data.mobile+'\\",\\"idNo\\":\\"'+data.idNo+'\\",\\"breakfast\\":\\"'+data.breakfast+'\\",\\"lockNo\\":\\"'+data.lockNo+'\\",\\"accessList\\":\\"'+data.accessList+'\\",\\"liftList\\":\\"'+data.liftList+'\\",\\"reservation\\":\\"'+data.reservation+'\\"}';
	    return cardInfo;
	}
//	var request_show=function (request_data,startTime) {
//      var request_show_str = "<div>请求:"+startTime.format("yyyy-MM-dd hh:mm:ss.S")+" ,<br/> params:"+request_data+"</div>";
//      return request_show_str;
//  }
	//展示身份证信息
	var response_idCardInfo=function (userInfo){
		var _html = "<div>姓名:"+userInfo.strName+"</div>";
		_html += "<div>性别:"+userInfo.strSex+"</div>";
		_html += "<div>民族:"+userInfo.strNation+"</div>";
		_html += "<div>民族代码:"+userInfo.strNationCode+"</div>";
		_html += "<div>出生日期:"+userInfo.strBirth+"</div>";
		_html += "<div>身份证号:"+userInfo.strIdCode+"</div>";
		_html += "<div>地址:"+userInfo.strAddr+"</div>";
		_html += "<div>签发机关:"+userInfo.strIssue+"</div>";
		_html += "<div>有效期:"+userInfo.strBeginDate+"~"+userInfo.strEndDate+"</div>";
		_html += "<img style='width:25%;margin:0 auto;' src='data:image/gif;base64,"+userInfo.encodeBitmapStr+"'/>";
		return _html;
	}
	//解析响应
	var response_parse_normal=function (response){
		var data = eval('(' + response + ')');
		return data;
	}
	//解析响应
	var response_parse=function (response){
		var resStr = "";
		var data = eval('(' + response + ')');
        var type=data.type;
        var method=data.method;
		
		if (type == "IDCARD" && method == "scan") {
	       var userInfo = data.identityCardEntity;
		   if(userInfo){
			   resStr = this.response_idCardInfo(userInfo);
		   }else{
			 resStr = response;  
		   }
	       
		} else {
			resStr = response;
		}
		return resStr;
	}
	var response_show=function (resStr,startTime,endTime) {
		var spantime = endTime.getTime() - startTime.getTime();
        var response_show_str = "<div>响应："+endTime.format("yyyy-MM-dd hh:mm:ss.S")+ "，耗时："+spantime
			+"毫秒<div>result: "+resStr+"</div>";
        return response_show_str;
    }
	
	var ws=null;
	var wsIp = "";
	
	var close=function (){
		 if(ws!=null){
		 	ws.close();
		 }
		 ws = null;
	}
	var retry = function(){
		
	}
	var ws_reConnect = function(wsIp){
		ws = new ReconnectingWebSocket(wsIp);
	}
	var ws_initialize=function (request_data,wsIp,received_msg,connect_callbak,error_callback,close_callback) {
		this.wsIp = wsIp;
       if(ws==null || ws.readyState === WebSocket.CLOSED){
		  ws = new ReconnectingWebSocket(wsIp);
	   }
	   
       ws.onopen = function(){
		   _cache_checkin.ws_error_counter == 0;
		   CHUtil.local_log("建立驱动连接...");
		  if(ws.readyState === WebSocket.OPEN){
		 
			  CHUtil.common_msg_pop_V2("",_locate_message.common_tip.WS_CONNECT_SUCCESD,_constants.toast_time_out,null);
		   CHUtil.local_log("建立驱动连接成功");
		  	 ws.send(request_data);
		  }
		  if(connect_callbak)
		     connect_callbak(ws);
       };
       ws.onmessage = function (evt) {
		   CHUtil.local_log("驱动返回结果");
		   
		  var data = CHWsService.response_parse_normal(evt.data);
		  var type=data.type;
		  var code = data.code;
		  //重置发送指令标志
		  CHWsProxy.reset_flag(type);
		  if(_web_socket_code.sucess != code && data.msg && data.error) {
		  	//指令发送失败，提示信息加上error信息
			data.msg=data.msg+":"+data.error;
		  }
		  var dataStr = evt.data;
		  if(JSON){
			  dataStr = JSON.stringify(data);
		  }
		  CHUtil.local_log(dataStr);
		  received_msg(dataStr);
       };
       ws.onerror = function(e){
		   //重置发送指令标志
		  CHWsProxy.reset_flag(null);
          if(error_callback){
          	error_callback(e);
          }else{
       	    if(_cache_checkin.ws_error_counter == 0 || _cache_checkin.ws_error_counter > _cache_checkin.ws_error_limit_counter) {
       	    	CHUtil.common_msg_pop_V2("",_locate_message.common_tip.WS_CONNECT_FAIL,5,null,null);
       	    }
       	    if(_cache_checkin.ws_error_counter == 0){
       	    	_cache_checkin.ws_error_limit_counter =  1 * _cache_checkin.ws_error_counter_scal;
       	    }
       	    if(_cache_checkin.ws_error_counter > _cache_checkin.ws_error_limit_counter){
       	        _cache_checkin.ws_error_limit_counter = _cache_checkin.ws_error_limit_counter * _cache_checkin.ws_error_counter_scal;
       	    }
       	    _cache_checkin.ws_error_counter++;
          }
		  CHUtil.local_log("驱动连接发生错误");
          
          ws.close();
       }
       ws.onclose = function(e){
		   //重置发送指令标志
		  CHWsProxy.reset_flag(null);

          if(close_callback){
          	close_callback(e);
          }else{
       	
       	    if(_cache_checkin.ws_error_counter == 0 || _cache_checkin.ws_error_counter > _cache_checkin.ws_error_limit_counter) {
       	    	CHUtil.common_msg_pop_V2("",_locate_message.common_tip.WS_CONNECT_CLOSE,3,null,null);
       	    	
       	    }
       	    if(_cache_checkin.ws_error_counter == 0){
       	    	_cache_checkin.ws_error_limit_counter =  1 * _cache_checkin.ws_error_counter_scal;
       	    }
       	    if(_cache_checkin.ws_error_counter > _cache_checkin.ws_error_limit_counter){
       	        _cache_checkin.ws_error_limit_counter = _cache_checkin.ws_error_limit_counter * _cache_checkin.ws_error_counter_scal;
       	    }
       	    _cache_checkin.ws_error_counter++;
          }
		  CHUtil.local_log("关闭驱动连接");
             
       }
    }
	
	var ws_send=function (request_data,wsIp,received_msg,connect_callbak,error_callback,close_callback) {
	   _cache_checkin.webSocketError = "";
	   _cache_checkin.webSocketResultCode = "";
		CHUtil.local_log("向驱动发送数据...");
	  // if(ws==null || ws.readyState === WebSocket.CLOSED)
	  // {
		 ws_initialize(request_data,wsIp,received_msg,connect_callbak,error_callback,close_callback);
	  // }

       if(ws.readyState === WebSocket.OPEN){
		  	 ws.send(request_data);
	   }
	}
	
	return {
		"ws_send":ws_send,
		"ws_reConnect":ws_reConnect,
		"response_idCardInfo":response_idCardInfo,
		"response_parse_normal":response_parse_normal,
		"response_parse":response_parse,
		"request_send_card_data":request_send_card_data,
		"request_send_card":request_send_card,
		"getBrowserInfo":getBrowserInfo,
		"request_print_real_Xml":request_print_real_Xml,
		"request_printXml":request_printXml,
		"request_data":request_data,
		"request_normal_send_card_data":request_normal_send_card_data
	}
})();
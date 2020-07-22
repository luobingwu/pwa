var SK_INDEX = (function(){
	var dk_index_info = "";
	/**
	 * ================================调动app接口获取设备信息====================
	 * @param {Object} res
	 */
	var get_sys_device_info_success = function(res){
		CHUtil.local_log("================调用app获取设备配置信息=============")
		CHUtil.local_log(res);
		
		dk_index_info += "读出设备信息返回结果<br/>"+res;
		document.getElementById("dk-index-info").innerHTML=dk_index_info;
		var data = eval('(' + res + ')');
		if(data && null != data){
			dk_index_info += "<br/>读出设备信息成功";
			document.getElementById("dk-index-info").innerHTML=dk_index_info;
			_cache_checkin.dev_info.devUniqueNo = data.deviceSn;
			_cache_checkin.dev_info.ethIp = data.ethIp;
			_cache_checkin.dev_info.ethMac = data.ethMac;
			_cache_checkin.dev_info.androidModel = data.androidModel;
			_cache_checkin.dev_info.androidVersion = data.androidVersion;
			_cache_checkin.dev_info.wifiIp = data.wifiIp;
			_cache_checkin.dev_info.wifiMac = data.wifiMac;
			
			_cache_checkin.hotelInfo.hotelName = data.hotelName;
			_cache_checkin.hotelInfo.hotelId = data.hotelId;
			app.$router.push({"path":"/home"});
			
		}else{
			dk_index_info += "<br/>读出设备信息失败";
			document.getElementById("dk-index-info").innerHTML=dk_index_info;
			CHUtil.common_msg_pop_V2("", _locate_message.common_tip.COMMON_MSG_008, _constants.toast_time_out, null, null);
		}
		
	}

	/**
	 * =========================调用app js 获取设备信息 ================================
	 */
	var get_sys_device_info = function() {
		dk_index_info += "开始读出设备信息......<br/>";
		document.getElementById("dk-index-info").innerHTML=dk_index_info;
		myPlugin.sysDevMethod(get_sys_device_info_success, function(error) {
			dk_index_info += "<br/>读出设备信息失败";
			document.getElementById("dk-index-info").innerHTML=dk_index_info;
		});
	}
	
	var to_setting_page = function(){
	    document.getElementById("dk-index").style.display="none";
		app.$router.push({"path":"/setting"});
	}
	/**
	 * ===================初始化信息====================
	 */
	var init = function(){
		//启动页面timer
		CHUtil._g_page_timer_start();
	}
	
	return {
		"get_sys_device_info":get_sys_device_info,
		"to_setting_page":to_setting_page,
		"init": init
	}
})();


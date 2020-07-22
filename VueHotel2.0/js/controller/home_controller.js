var HomeController = (function() {
	var $scope = {};
	$scope.localeTime = getLocaleDate(new Date());
	var touch_timer = null; //长按timerout事件
	$scope.to_idscan = function() {
		//扫描身份证
		_cache_checkin.process_tag = server_infaces.scanId;
		app.$router.push({"path": "/index"});
	};
	$scope.checkOut = function() {
		app.$router.push({
			"path": "/index"
		});
	};
	$scope.retry = function() {
		CHUtil.start_init_dev($scope.retry);
	};

	$scope.page_time_count = _g_page_timer_count; //当前页面计数

    /**
	 * ===================页面计时显示时间==================
	 */
	$scope.locale_time_timer = function() {
		if(null != _cache_checkin.locate_timer && undefined != _cache_checkin.locate_timer){
			clearInterval(_cache_checkin.locate_timer);
		}
		_cache_checkin.locate_timer = setInterval(function() {
			$scope.localeTime = getLocaleDate(new Date());
		}, 1000);
	}
	/**
	 * ======================触摸结束事件-===============
	 */
	$scope.touch_start_cl = function() {
		touch_timer = setTimeout(function() {
			clearInterval(touch_timer);
			app.$router.push({
				"path": "/index"
			});
		}, _constants.on_hold_time_out);
		return false;
	}
	/**
	 * ======================触摸开始事件-===============
	 */
	$scope.touch_end_cl = function() {
		clearInterval(touch_timer);
	}

	/**
	 * ==============页面显示文字=====================
	 */
	$scope.set_page_static_info = function(){
		$scope.BTN_MSG_005 = _locate_message.btn_name.BTN_MSG_005;
		$scope.BTN_MSG_006 = _locate_message.btn_name.BTN_MSG_006;
		$scope.BTN_MSG_007 = _locate_message.btn_name.BTN_MSG_007;
		$scope.COMMON_MSG_012 = _locate_message.common_tip.COMMON_MSG_012;
		$scope.COMMON_MSG_013 = _locate_message.common_tip.COMMON_MSG_013;
		$scope.COMMON_MSG_022 = _locate_message.common_tip.COMMON_MSG_022;
		$scope.COMMON_MSG_021 = _locate_message.common_tip.COMMON_MSG_021;
		
		$scope.HOTEL_NAME = _cache_checkin.hotelInfo.hotelName;
	}
	
	$scope.change_language = function(language){
		$scope.current_language = language;
		CHUtil.change_page_language(language);
		$scope.set_page_static_info();
	}


	/**
	 * ===========================页面离开事件===================
	 */
	$scope.page_leve_event = function() {
		//下页面的于本页面
		_cache_checkin.from_page = _pages_view.home_page;
		_cache_checkin.page_process_tag = "HOME_LEAVE";
			CHUtil.local_log("beforeDestroy:离开首页");
			
	}

	$scope.before_update = function(){
		CHUtil.local_log("before_update:首页");
	}

	$scope.updated_p = function(){
		CHUtil.local_log("updated:首页");
	}
	
	$scope.destroyed_p = function(){
		CHUtil.local_log("destroyed:首页");
	}
		
	/**
	 * =====================进入页面前事件================================
	 */
	$scope.page_before_enter_event = function(){
		CHUtil.local_log("beforeCreate:进入首页前");
		$scope.SHOW_WS_LOG = false;
		$scope.ws_log_info_str = _cache_checkin.ws_log_info;
		
		//显示app版本
		$scope.appVersion = _cache_checkin.dev_info.appVer;
		$scope.set_page_static_info();
	
		$scope.current_language = "cn";         
		//时间显示
		//$scope.locale_time_timer();
	}
	
	$scope.before_mount = function(){
		CHUtil.local_log("before_mount:首页");
	}
	$scope.mounted_p = function(){
		CHUtil.local_log("mounted:首页");
	}
	/**
	 * ==================进入页面后事件处理====================
	 */
	$scope.inital = function() {
	
		console.log(_cache_checkin.current_page);
		//页面离开前事件
		CHUtil.g_stop_page_timer();

		$scope.card_timer = null;
		//默认开启读取卡机状态
		$scope.read_card_status_open = true;
		_cache_checkin.process_tag = "0"; //重置业务流程标志，当流程标志不为0时，心跳调用pms心跳接口
		_cache_checkin.page_process_tag = "HOME_ENTER";//重置页面页面流程标志为0
		
		//关闭统一页面计时
		CHUtil.is_open_page_timout_timer(false);
		
		//当前页面标志
		_cache_checkin.current_page = _pages_view.home_page;
	
		CHUtil.local_log("created:进入首页");
	}
	return $scope;
})();

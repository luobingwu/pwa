var IndexController = (function() {
	var $scope = {};
	$scope.localeTime = getLocaleDate(new Date());
	var touch_timer = null; //长按timerout事件
	
	/**
	 * ==============跳转首页=============
	 */
	$scope.to_home = function() {
		app.$router.push({
			"path": "/home"
		});
	};
	/**
	 * ======================触摸结束事件-===============
	 */
	$scope.touch_start_cl = function() {
		
		touch_timer = setTimeout(function() {
			clearInterval(touch_timer);
			app.$router.push({
				"path": "/setting"
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
	 * =============初始化页面数据===================
	 */
	$scope.initalPage = function() {
		$scope.page_time_count = 5; //当前页面计数
		$scope.sys_dev_info = "设备开始启动......<br/>";
        $scope.jump_timer = null;
		$scope.bizurl= _cache_checkin.dev_info.pmsBizUrl ? CHUtil.get_ip_and_port_for_url(_cache_checkin.dev_info.pmsBizUrl) : "";
		$scope.hotelName=_cache_checkin.hotelInfo.hotelName ? _cache_checkin.hotelInfo.hotelName : "";
		$scope.hotelId=_cache_checkin.hotelInfo.hotelId ? _cache_checkin.hotelInfo.hotelId : "";
		
	}
	
    /**
	 * ===================页面跳转计时==================
	 */
	$scope.jump_time_timer = function() {
		
		$scope.jump_timer = setInterval(function() {
			if($scope.page_time_count == 0){
				clearInterval($scope.jump_timer);
				$scope.to_home();
			}else{
				$scope.page_time_count--;
			}
			
		}, 1000);
	}


	/**
	 * ===========================页面离开事件===================
	 */
	$scope.page_leve_event = function() {
		if($scope.jump_timer){
			clearInterval($scope.jump_timer);
		}
		//下页面的于本页面
		_cache_checkin.from_page = _pages_view.index_page;
			
			CHUtil.local_log("beforeDestroy：离开欢迎页面");
	}


	/**
	 * =====================进入页面前事件================================
	 */
	$scope.page_before_enter_event = function(){
	
	    CHUtil.local_log("beforeCreate:引导页");
		$scope.initalPage();
	}
	
	$scope.before_mount = function(){
		CHUtil.local_log("before_mount:引导页");
	}
	$scope.mounted_p = function(){
		CHUtil.local_log("mounted:引导页");
	}

	$scope.before_update = function(){
		CHUtil.local_log("before_update:引导页");
	}

	$scope.updated_p = function(){
		CHUtil.local_log("updated:引导页");
	}
	
	$scope.destroyed_p = function(){
		CHUtil.local_log("destroyed:引导页");
	}
	/**
	 * ==================进入页面后事件处理====================
	 */
	$scope.inital = function() {
		//当前页面标志
		_cache_checkin.current_page = _pages_view.index_page;
		_cache_checkin.process_tag = "0"; //重置业务流程标志，当流程标志不为0时，心跳调用pms心跳接口
		_cache_checkin.page_process_tag = "0";//重置页面页面流程标志为0
		$scope.jump_time_timer();//启动跳转页面计时
		
			
			CHUtil.local_log("created：进入欢迎页面");
		
			
	}
	return $scope;
})();

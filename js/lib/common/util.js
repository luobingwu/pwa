function common_setLocalStorage(key, val) {
	if (window.localStorage) {
		localStorage.setItem(key, val);
	} else {
		Cookie.write(key, val);
	}
}

function common_getLocalStorage(key) {
	var val = window.localStorage ? localStorage.getItem(key) : Cookie.read(key);
	return val;
}

var _g_page_timer_count = _constants.page_time_out; //页面计时
var _g_page_timer_count_1 = _constants.page_time_out; //第一种页面计时
var CHUtil = (function() {
	var _g_page_timer = null; //页面计时器

	var _g_is_popup_open = false; //当前是否有弹窗
	var _g_is_popup_toast_open = false; //当前是否有toast弹窗
	var _g_page_current_timeout_count = _constants.page_time_out;
	var is_start_page_timer = false; //是否开启页面超时计时

	/**
	 * ================当前是否有弹窗===============
	 */
	var is_popup_open = function() {
		return _g_is_popup_open;
	}

	/**
	 * ========================重置全局页面timer====================
	 */
	var g_restart_page_timer = function() {
		if (_g_is_popup_open) { //页面有弹窗，不开启页面计时器
			return;
		}
		CHUtil.local_log("restart page timer");
		_g_page_timer_count = _g_page_current_timeout_count;
		_g_page_timer_count_1 = _g_page_current_timeout_count;

	}

	/**
	 * =================获取随机八位数=============
	 */
	var get_random_8 = function() {
		var oD = parseInt(Math.random() * (99999999 - 10000000 + 1) + 100000, 10);
		return oD;
	}

	/**
	 * ========================停止全局页面timer====================
	 * @param {Object} endFn 计时结束处理函数
	 */
	var g_stop_page_timer = function(endFn) {
		if (null != _g_page_timer) {
			clearInterval(_g_page_timer);
		}
		if (null != endFn && isFunc(endFn)) {
			endFn();
		}

	}

	/**
	 * ========================全局页面timer====================
	 * @param {Object} timecount 页面定时时间长度，秒
	 * @param {Object} proFn 计时中处理函数
	 * @param {Object} endFn 计时结束处理函数
	 */
	var g_start_page_timer = function(timecount, proFn, endFn, btnName) {
		_g_page_current_timeout_count = timecount;
		_g_page_timer_count_1 = timecount;
		if (_g_is_popup_open) { //页面有弹窗，不开启页面计时器
			g_stop_page_timer(null);
			return;
		}
		g_stop_page_timer(null);
		btnName = !btnName || "" == btnName ? _locate_message.btn_name.BTN_MSG_013 : btnName;
		_g_page_timer = setInterval(function() {
			if (_g_page_timer_count_1 == 0) {
				//计时时间到
				if (null != _g_page_timer) {
					//关闭定时器
					clearInterval(_g_page_timer);
					common_pop_v2("", _locate_message.common_tip.COMMON_MSG_035, _constants.lock_time_out, function() {
						_g_is_popup_open = false;
						if (isFunc(endFn)) {
							endFn();
						}
					}, function() {
						if (isFunc(endFn)) {
							endFn();
						} else {
							//默认退出页面返回首页
							app.$router.push({
								"path": "/home"
							});
						}

					}, btnName, "");

				}
			} else {
				_g_page_timer_count_1 = _g_page_timer_count_1 - 1;
				//计时中处理
				if (isFunc(proFn)) {
					proFn();
				}
			}
		}, 1000);
	}

	/**
	 * =====================是否开启页面超时计时======================
	 * @param {Object} opened true:开启，false：关闭
	 */
	var is_open_page_timout_timer = function(opened) {
		is_start_page_timer = opened;
		_g_page_timer_count = _constants.page_time_out; //还原页面超时秒数
	}

	/**
	 * =======================总体控制页面超时计时=====================
	 */
	var _g_page_timer_start = function() {
		_g_page_current_timeout_count = _constants.page_time_out;
		_g_page_timer_count = _constants.page_time_out;
		if (_g_is_popup_open) { //页面有弹窗，不开启页面计时器
			g_stop_page_timer(null);
			return;
		}
		var btnName = _locate_message.btn_name.BTN_MSG_013;
		_g_page_timer_new = setInterval(function() {
			var nowTime = new Date().getTime();
			var timeConsuming = 0;
			var pageLastReportTime = _constants.pageLastReportTime;
			if (pageLastReportTime > 0) {
				//非重新启动页面
				timeConsuming = nowTime - pageLastReportTime;
			}
			
			if(timeConsuming < 500 && timeConsuming > 0){
				//页面计时时间间隔小于1秒刷新页面
				 _constants.pageLastReportTime = 0;
				window.location.reload();
			}
			
			_constants.pageLastReportTime = nowTime;
			if (!is_start_page_timer || _g_is_popup_open) { //停止页面timer计数，包括有弹窗
				_g_page_timer_count = _constants.page_time_out; //还原页面超时秒数
			} else {
				if (_g_page_timer_count == 0) {
					//计时时间到
					is_start_page_timer = false; //停止计时
					common_pop_v2("", _locate_message.common_tip.COMMON_MSG_035, _constants.lock_time_out, function() {
						_g_page_timer_count = _constants.page_time_out; //还原页面超时秒数
						is_start_page_timer = true; //重新计时
					}, function() {
						//默认退出页面返回首页
						app.$router.push({
							"path": "/home"
						});

					}, btnName, "");
				} else {
					_g_page_timer_count = _g_page_timer_count - 1;
				}
			}
			
		}, 1000);

	}
	/**
	 * =====================获取名称的姓氏==============================
	 * @param {Object} fullname 全名
	 */
	var get_first_name = function(fullname) {
		//复姓
		var hyphenated = ['欧阳', '太史', '端木', '上官', '司马', '东方', '独孤', '南宫', '万俟', '闻人',
			'夏侯', '诸葛', '尉迟', '公羊', '赫连', '澹台', '皇甫', '宗政', '濮阳', '公冶',
			'太叔', '申屠', '公孙', '慕容', '仲孙', '钟离', '长孙', '宇文', '城池', '司徒',
			'鲜于', '司空', '汝嫣', '闾丘', '子车', '亓官', '司寇', '巫马', '公西', '颛孙',
			'壤驷', '公良', '漆雕', '乐正', '宰父', '谷梁', '拓跋', '夹谷', '轩辕', '令狐',
			'段干', '百里', '呼延', '东郭', '南门', '羊舌', '微生', '公户', '公玉', '公仪',
			'梁丘', '公仲', '公上', '公门', '公山', '公坚', '左丘', '公伯', '西门', '公祖',
			'第五', '公乘', '贯丘', '公皙', '南荣', '东里', '东宫', '仲长', '子书', '子桑',
			'即墨', '达奚', '褚师'
		];
		var hyset = new Set(hyphenated);
		var vLength = fullname.length;
		// 前为姓,后为名  
		var lastname = '',
			firstname = '';
		if (vLength > 2) {
			var preTwoWords = fullname.substr(0, 2);
			// 取命名的前两个字,看是否在复姓库中    
			if (hyset.has(preTwoWords)) {
				firstname = preTwoWords;
				lastname = fullname.substr(2);
			} else {
				firstname = fullname.substr(0, 1);
				lastname = fullname.substr(1);
			}
		} else if (vLength === 2) {
			// 全名只有两个字时,以前一个为姓,后一下为名    
			firstname = fullname.substr(0, 1);
			lastname = fullname.substr(1);
		} else {
			firstname = fullname;
		}
		return [firstname, lastname];
	}
	/**
	 *  =====================业务心跳==================
	 * @param {Object} url
	 * @param {Object} req
	 */
	var biz_heartbeat = function(req) {
		if (_cache_checkin.current_page != _pages_view.home_page) {
			//非首页不发送心跳
			return;
		}
		try{
			CHBizServices.start_heartbeat_timer(req, function(response) {
				var body = CHApiServices.response_parse(response);
				var data = body ? body.data : null;
				if (data && body.code == _constants.sucess && null != data.opendedSelection) {
					_cache_checkin.dev_info.isEmployeeCardSkipFaceRecognize = data.isEmployeeCardSkipFaceRecognize;
					_cache_checkin.dev_info.isIca = data.isIca;
					_cache_checkin.dev_info.isOpenSound = data.isOpenSound;
					_cache_checkin.dev_info.isPosUseEmployeeCard = data.isPosUseEmployeeCard;
					_cache_checkin.dev_info.isShowPassportInfo = data.isShowPassportInfo;
					_cache_checkin.dev_info.isUploadFaceToMiniFcs = data.isUploadFaceToMiniFcs;
					_cache_checkin.dev_info.opendedCardAck = data.opendedCardAck;
					_cache_checkin.dev_info.localPoliceUpload = data.localPoliceUpload;
					_cache_checkin.dev_info.logoLocation = data.logoLocation;
					_cache_checkin.dev_info.opendedCardAck = data.opendedCardAck;
					_cache_checkin.dev_info.opendedSelection = data.opendedSelection;
					_cache_checkin.dev_info.openedFaceDetect = data.openedFaceDetect;
					_cache_checkin.dev_info.openedPassport = data.openedPassport;
					_cache_checkin.dev_info.openedUploadPolice = data.openedUploadPolice;
					_cache_checkin.dev_info.payType = data.payType;
					_cache_checkin.dev_info.popup = data.popup;
					_cache_checkin.dev_info.popupUrl = data.popupUrl;
					_cache_checkin.dev_info.posType = data.posType;
					_cache_checkin.dev_info.receivePoliceKeyUrl = data.receivePoliceKeyUrl;
					_cache_checkin.dev_info.uploadPoliceUrl = data.uploadPoliceUrl;
					_cache_checkin.dev_info.remoteSettingUrl = data.remotePoliceUploadUrl;
					_cache_checkin.open_key_config.appKey = data.appLockKey;
					_cache_checkin.open_key_config.appSecret = data.appLockSecret;
					_cache_checkin.hotelInfo.lockType = data.lockType;
					_cache_checkin.hotelInfo.psbId = data.psbId;
					_cache_checkin.hotelInfo.uploadPoliceUrl = data.uploadPoliceUrl;
					// if (null != data.hotelName && "" != data.hotelName) {
					// 	_cache_checkin.hotelInfo.hotelName = data.hotelName;
					// 	common_setLocalStorage("hotelName", data.hotelName);
					// }
					// if (null != data.lockType && "" != data.lockType) {
					// 	common_setLocalStorage("lockType", data.lockType);
					// }
				}
			}, null);
		}catch (err){
		}finally {
		}
	}
	/**
	 *  =====================监控心跳==================
	 * @param {Object} url
	 * @param {Object} req
	 */
	var monitor_heartbeat = function(url, req, mApiService) {
		mApiService.api_ws_send(req, url, function(response, status) {

			if (status != "200") {
				var msg = "【" + status + "】" + _locate_message.common_tip.net_time_out;

			} else {
				var res = mApiService.response_parse(response);
			}
		}, function(data, status, headers, config, statusText) {
			//请求错误,弹窗提示
			//			var msg = "【" +status +"】"+_locate_message.common_tip.net_time_out;
			//			CHUtil.common_pop(layui,msg,_constants.lock_time_out,null,null);

		});
	}

	/**
	 * 心跳接口,间隔30秒触发一次
	 * @param {Object} mApiService
	 */
	var start_heartbeat_timer = function() {
		var count = 0;
		setInterval(function() {
			count++;
			var url = _cache_checkin.dev_info.pmsBizUrl;
			var hotelId = null != _cache_checkin.hotelInfo ? _cache_checkin.hotelInfo.hotelId : "";
			var hotelName = null != _cache_checkin.hotelInfo ? _cache_checkin.hotelInfo.hotelName : "";
			var nowTime = Math.ceil(new Date().getTime() / 1000);
			var timeConsuming = 0;
			var lastReportTime = _constants.lastReportTime;
			if (lastReportTime > 0) {
				//非重新启动页面
				timeConsuming = nowTime - lastReportTime;
			}
			_constants.lastReportTime = nowTime;
			var req = BizModel.ClientHeartBeatReq(hotelId, lastReportTime, timeConsuming);
			req.hotelName = hotelName;
			req.lockType = 0;
			//if(url && ""!=url) {
			biz_heartbeat(req);
			//}
			//监控心跳
			var m_url = _cache_checkin.dev_info.pmsMonitorUrl;;
			if (m_url && "" != m_url) {
				//monitor_heartbeat(m_url,req,mApiService);
			}

		}, _constants.heartbeat_time_out);
	}

	/**
	 * 清理业务页面缓存信息
	 */
	var clear_biz_cache_info = function() {
		//清理除会员信息
		_cache_checkin.userInfo = null;

		_cache_checkin.checkin_guests = null;
		_cache_checkin.identy_info = null;
		//清楚订单信息
		_cache_checkin.order = order();
		_cache_checkin.orderList = [];
	}

	//生成唯key
	var get_unit_sn = function() {
		var nowtime = new Date().getTime();
		var sn = _cache_checkin.hotelInfo.hotelId + nowtime;
		return sn;
	}

	/**
	 * app初始化接口
	 * @param {Object} mApiService
	 * @param {Object} layui
	 * @param {Object} fn --重试业务函数
	 */
	var start_init_dev = function(fn) {
		var hotelId = null != _cache_checkin.hotelInfo ? _cache_checkin.hotelInfo.hotelId : "";
		if (!_cache_checkin.is_first_open_pages && null != hotelId && "" != hotelId) {
			//非首次打开页面，不请求初始化方法
			return;
		}
		var url = _cache_checkin.dev_info.pmsBizUrl;
		if (url && "" != url) {
			var hotelName = null != _cache_checkin.hotelInfo ? _cache_checkin.hotelInfo.hotelName : "";
			var req = {
				"hotelId": hotelId,
				"hotelName": hotelName,
				"lockType": 0
			};
			CHBizServices.start_init_dev(req, function(response) {
				//console.log(response);
				var body = CHApiServices.response_parse(response);
				var data = body ? body.data : null;

				if (_constants.sucess == body.code) {
					if (data) {
						_cache_checkin.hotelInfo.hotelName = data.hotelName;
						_cache_checkin.hotelInfo.lockType = data.lockType;
						_cache_checkin.hotelInfo.psbId = data.psbId;
						_cache_checkin.hotelInfo.uploadPoliceUrl = data.uploadPoliceUrl;
						_cache_checkin.dev_info.isEmployeeCardSkipFaceRecognize = data.isEmployeeCardSkipFaceRecognize;
						_cache_checkin.dev_info.isIca = data.isIca;
						_cache_checkin.dev_info.isOpenSound = data.isOpenSound;
						_cache_checkin.dev_info.isPosUseEmployeeCard = data.isPosUseEmployeeCard;
						_cache_checkin.dev_info.isShowPassportInfo = data.isShowPassportInfo;
						_cache_checkin.dev_info.isUploadFaceToMiniFcs = data.isUploadFaceToMiniFcs;
						_cache_checkin.dev_info.localPoliceUpload = data.localPoliceUpload;
						_cache_checkin.dev_info.logoLocation = data.logoLocation;
						_cache_checkin.dev_info.opendedCardAck = data.opendedCardAck;
						_cache_checkin.dev_info.opendedSelection = data.opendedSelection;
						_cache_checkin.dev_info.openedFaceDetect = data.openedFaceDetect;
						_cache_checkin.dev_info.openedPassport = data.openedPassport;
						_cache_checkin.dev_info.openedUploadPolice = data.openedUploadPolice;
						_cache_checkin.dev_info.payType = data.payType;
						_cache_checkin.dev_info.popup = data.popup;
						_cache_checkin.dev_info.popupUrl = data.popupUrl;
						_cache_checkin.dev_info.posType = data.posType;
						if (data.receivePoliceKeyUrl && null != data.receivePoliceKeyUrl && "null" != data.receivePoliceKeyUrl) {
							_cache_checkin.dev_info.receivePoliceKeyUrl = data.receivePoliceKeyUrl;
						}
						if (data.remotePoliceUploadUrl && null != data.remotePoliceUploadUrl && "null" != data.remotePoliceUploadUrl) {
							_cache_checkin.dev_info.remotePoliceUploadUrl = data.remotePoliceUploadUrl;
						}
						if (data.uploadPoliceUrl && null != data.uploadPoliceUrl && "null" != data.uploadPoliceUrl) {
							_cache_checkin.dev_info.uploadPoliceUrl = data.uploadPoliceUrl;
						}
						if (data.uploadPoliceUrl && null != data.uploadPoliceUrl && "null" != data.uploadPoliceUrl) {
							_cache_checkin.dev_info.uploadPoliceUrl = data.uploadPoliceUrl;
						}

						if (data.lockType && null != data.lockType && "null" != data.lockType) {
							common_setLocalStorage("lockType", data.lockType);
						}

						_cache_checkin.is_first_open_pages = false; //非首次调用
					}
					//开启心跳
					CHUtil.start_heartbeat_timer();
				}

			}, fn);
		}
	}
	/**
	 * =============vue obj 元素添加样式============
	 */
	var vue_add_class = function(targetObj, cls) {
		targetObj.className += " " + cls;
	}
	/**
	 * =============vue obj 元素删除样式============
	 */
	var vue_remove_class = function(targetObj, cls) {
		var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		targetObj.className = targetObj.className.replace(reg, " ");
	}

	/**
	 * ===============vue 元素是否包括样式============
	 */
	var vue_has_class = function(targetObj, cls) {
		var isExist = false;
		isExist = (' ' + targetObj.className + ' ').indexOf(' ' + cls + ' ') > -1;
		return isExist;
	}
	//为指定的dom元素添加样式
	var addClass = function(targetCls, cls) {
		if (document.getElementsByClassName) {
			var elementsTarget = document.getElementsByClassName(targetCls);
			var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
			if (elementsTarget.length > 0 && elementsTarget.length > 0) {
				for (var i = 0, len = elementsTarget.length; i < len; i++) {
					elementsTarget[i].className += " " + cls;
				}
			}
		}
	}
	//判断dom元素是否存在样式
	var hasClass = function(targetCls, cls) {
		var isExist = false;
		if (document.getElementsByClassName) {
			var elementsTarget = document.getElementsByClassName(targetCls);

			if (elementsTarget.length > 0 && elementsTarget.length > 0) {
				for (var i = 0, len = elementsTarget.length; i < len; i++) {
					isExist = (' ' + elementsTarget[i].className + ' ').indexOf(' ' + cls + ' ') > -1;
					if (isExist) {
						return isExist;
					}
				}
			}
		}
		return isExist;
	}
	//删除指定dom元素的样式
	var removeClass = function(targetCls, cls) {
		if (document.getElementsByClassName) {
			var elementsTarget = document.getElementsByClassName(targetCls);
			var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
			if (elementsTarget.length > 0 && elementsTarget.length > 0) {
				for (var i = 0, len = elementsTarget.length; i < len; i++) {
					elementsTarget[i].className = elementsTarget[i].className.replace(reg, " ");
				}
			}
		}
	}

	//获取指定dom元素的样式
	var getElementsByClassName = function(cls) {
		if (document.getElementsByClassName) //支持这个函数 
		{
			return document.getElementsByClassName(cls);
		}
	}
	//判断是否是函数
	var isFunc = function(fnName) {
		return typeof fnName == 'function';
	}

	/**
	 * 生成二维码
	 * @param {Object} val 二维码内容
	 * @param {Object} eid dom id
	 */
	var make_qrcode = function(val, eid) {
		if (!val) {
			return;
		}
		var ele = document.getElementById(eid);
		ele.innerHTML = "";
		var wh = ele.clientWidth;
		var qrcode = new QRCode(document.getElementById(eid), {
			width: wh,
			height: wh
		});
		qrcode.makeCode(val);
	}

	var common_set_order_to_cache = function(orderList) {
		if (!_cache_checkin.orderList || _cache_checkin.orderList == null) {
			_cache_checkin.orderList = new Array();
		}
		if (orderList && orderList != null && orderList.length > 0) {
			for (var i = 0, len = orderList.length; i < len; i++) {
				var od = order();
				od = common_set_single_order(orderList[i]);

				//将order存入自定义缓存中
				_cache_checkin.orderList.push(od);
			}
		}
	}

	var common_set_single_order = function(resOrder) {
		var od = order();
		od.baseRate = resOrder.baseRate;
		var checkinTime = resOrder.checkInTime && resOrder.checkInTime != "" ? new Date(resOrder.checkInTime).format(
			"yyyy/MM/dd") : "";
		var checkOutTime = resOrder.checkOutTime && resOrder.checkOutTime != "" ? new Date(resOrder.checkOutTime).format(
			"yyyy/MM/dd") : ""
		od.checkInTime = checkinTime;
		od.checkOutTime = checkOutTime;
		od.confirmationNo = resOrder.confirmationNo;
		od.currencyCode = resOrder.currencyCode;
		od.currency = resOrder.currency;
		od.firstName = resOrder.firstName;
		od.fullName = resOrder.fullName;
		od.daysCnt = resOrder.daysCnt;
		od.hotelId = resOrder.hotelId;
		od.isChooseRoom = resOrder.isChooseRoom;
		od.isDeposit = resOrder.isDeposit;
		od.lastName = resOrder.lastName;
		od.linkMobile = resOrder.linkMobile;
		od.payOk = resOrder.payOk;
		od.rateCode = resOrder.rateCode;
		od.rateSecret = resOrder.rateSecret;
		od.reservationId = resOrder.reservationId;
		od.reservationStatus = resOrder.reservationStatus;
		od.accountNo = resOrder.accountNo;
		var assignInfos = resOrder.assignInfos;
		var rooms = [];
		var roomCnt = 0;
		if (assignInfos && assignInfos.length > 0) {
			for (var j = 0, len2 = assignInfos.length; j < len2; j++) {
				rooms.push(assignInfos[j].roomNo);
				roomCnt++;
			}
		}
		var totalPrice = resOrder.totalPrice && null != resOrder.totalPrice ? resOrder.totalPrice : 0;
		od.totalPrice = totalPrice;
		var totalNeedToPayPrice = resOrder.totalNeedToPayPrice && null != resOrder.totalNeedToPayPrice ? resOrder.totalNeedToPayPrice :
			0;
		od.totalNeedToPayPrice = totalNeedToPayPrice;
		od.roomCnt = resOrder.roomCnt;
		od.roomNos = rooms;
		od.roomTypeId = resOrder.roomTypeId;
		od.roomTypeName = resOrder.roomTypeName;
		od.liveGuests = resOrder.liveGuests;
		return od;
	}

	/**
	 * 
	 * @param {Object} layui layui对象
	 * @param {Object} content 弹窗显示内容
	 * @param {Object} second 弹窗超时毫秒数
	 * @param {Object} endFn 弹窗结束函数
	 */
	var common_msg_pop = function(layui, content, timeout, endFn) {
		//		if (_cache_checkin.is_show_ws_close_tips) {
		//			return;
		//		}
		//
		//		layui.use('layer', function() {
		//			var layer = layui.layer;
		//			layer.msg(content, {
		//				time: timeout //2秒关闭（如果不配置，默认是3秒）
		//			}, function() {
		//				_cache_checkin.is_show_ws_close_tips = false;
		//				if (isFunc(endFn)) {
		//					endFn();
		//				}
		//			});
		//		});
	}

	/**
	 * 
	 * @param {Object} selector 弹窗位置id
	 * @param {Object} content 弹窗显示内容
	 * @param {Object} second 弹窗超时秒数
	 * @param {Object} endFn 弹窗结束函数
	 */
	var common_msg_pop_V2 = function(selector, content, timeout, endFn) {
		var timer = null,
			pdom;
		selector = "" == selector || null == selector ? "dk-popup-spanel2" : selector;

		var popup_html = tpl_msg_popup_html.replace("[POPUP_INFO]", content);
		pdom = document.getElementById(selector);
		//关闭弹窗
		function close() {
			pdom.innerHTML = "";
			pdom.style.display = "none";
			_g_is_popup_toast_open = false;
		}

		if (pdom.style.display == "block") {
			//此时正在弹窗
			return;
			//clearInterval(timer);
		} else {
			pdom.style.display = "block";
		}
		_g_is_popup_toast_open = true;
		pdom.innerHTML = popup_html;
		var counter = timeout;

		function start_counter() {
			if (counter <= 0) {
				close();
				clearInterval(timer);
				timer = null;
				if (isFunc(endFn)) {
					//执行自定逻辑
					endFn();
				}

			}
			counter--;
		}
		//重新计算弹窗样式
		reset_popup_style();

		//开始计时
		timer = setInterval(start_counter, 1000);

	}

	/**
	 * ===============弹窗====================
	 */
	var common_pop_v2 = function(selector, content, second, btnFn, timeoutFn, btnName, error_code) {

		var timer = null;
		var counter = second;
		if (!btnName || null == btnName || "" == btnName) {
			btnName = _locate_message.btn_name.ok;
		}
		if (!error_code || null == error_code) {
			error_code = "";
		}
		var btnNameF = btnName + "(" + counter + "s)";

		selector = "" == selector || null == selector ? "dk-popup-spanel" : selector;
		var popup_html = tpl_popup_html.replace("[POPUP_INFO]", content);
		popup_html = popup_html.replace("[POPUP_OK]", btnNameF);
		popup_html = popup_html.replace("[POPUP_ERROR_CODE]", error_code);
		var pdom = document.getElementById(selector);
		pdom.style.display = "block";
		pdom.innerHTML = popup_html;
		//弹窗按钮
		var pbtn = CHUtil.getElementsByClassName("dk-popup-ok")[0];

		function close() {
			pdom.innerHTML = "";
			pdom.style.display = "none";
			_g_is_popup_open = false;
		}
		_g_is_popup_open = true;

		function start_counter() {
			counter--;
			pbtn.innerText = btnName + "(" + counter + "s)";
			if (counter <= 0) {
				close();
				clearInterval(timer);
				timer = null;
				if (isFunc(timeoutFn)) {
					//执行自定逻辑
					timeoutFn();
				}

			}
		}

		function popup_ok_eve() {
			//执行自定逻辑
			if (isFunc(btnFn)) {
				btnFn();
			}
			if (timer != null) {
				clearInterval(timer);
				timer = null;
			}
			close();
		}
		//动态添加事件
		if (undefined == pdom.attachEvent) {
			pbtn.addEventListener("click", popup_ok_eve, "");
		} else {
			pbtn.attachEvent("onclick", popup_ok_eve);
		}
		//重新计算弹窗样式
		reset_popup_style();
		//开始计时
		timer = setInterval(start_counter, 1000);

	}

	/**
	 * =====================关闭弹窗======================
	 */
	var common_popup_close = function() {
		var pdom = document.getElementById("dk-popup-spanel");
		pdom.innerHTML = "";
		pdom.style.display = "none";
		_g_is_popup_open = false;
	}

	/**
	 * ===============确认弹窗====================
	 */
	var common_confirm_pop = function(selector, content, noFn, okFn, btnNoName, btnOkName, closeFn) {
		// 		if (!btnNoName || null == btnNoName || "" == btnNoName) {
		// 			btnNoName = _locate_message.btn_name.no;
		// 		}
		// 		if (!btnOkName || null == btnOkName || "" == btnOkName) {
		// 			btnOkName = _locate_message.btn_name.ok;
		// 		}

		selector = "" == selector || null == selector ? "dk-popup-spanel" : selector;
		var popup_html = tpl_confirm_popup_html.replace("[POPUP_INFO]", content);
		popup_html = popup_html.replace("[POPUP_OK]", btnOkName);
		popup_html = popup_html.replace("[POPUP_NO]", btnNoName);
		var pdom = document.getElementById(selector);
		pdom.style.display = "block";
		pdom.innerHTML = popup_html;
		//弹窗按钮
		var pbtnNo = CHUtil.getElementsByClassName("dk-popup-no")[0];
		var pbtn = CHUtil.getElementsByClassName("dk-popup-ok")[0];
		var closebtn = CHUtil.getElementsByClassName("dk-popup-close")[0];


		function close() {
			pdom.innerHTML = "";
			pdom.style.display = "none";
			_g_is_popup_open = false;
		}
		function close_eve() {
			close();
			//执行自定逻辑
			if (isFunc(closeFn)) {
				closeFn();
			}
		}
		_g_is_popup_open = true;

		function popup_ok_eve() {
			//执行自定逻辑
			if (isFunc(okFn)) {
				okFn();
			}
			close();
		}

		if (null == btnNoName || "" == btnNoName) {
			pbtnNo.style.display = "none";
		}

		if (null == btnOkName || "" == btnOkName) {
			pbtn.style.display = "none";
		}

		function popup_no_eve() {
			//执行自定逻辑
			if (isFunc(noFn)) {
				noFn();
			}
			close();
		}
		//动态添加事件
		if (undefined == pbtn.attachEvent) {
			pbtn.addEventListener("click", popup_ok_eve, "");
		} else {
			pbtn.attachEvent("onclick", popup_ok_eve);
		}
		if (undefined == pbtnNo.attachEvent) {
			pbtnNo.addEventListener("click", popup_no_eve, "");
		} else {
			pbtnNo.attachEvent("onclick", popup_no_eve);
		}
		if (undefined == closebtn.attachEvent) {
			closebtn.addEventListener("click", close_eve, "");
		} else {
			closebtn.attachEvent("onclick", close_eve);
		}

		reset_popup_style();
	}
	/***
	 * 
	 * @param {Object} layui layui对象
	 * @param {Object} content 弹窗显示内容
	 * @param {Object} second 弹窗计时秒数
	 * @param {Object} btnFn 点击弹窗按钮执行的方法(根据不同业务定义不同的方法)
	 * @param {Object} timeoutFn 弹窗打开执行的方法(根据不同业务定义不同的方法)
	 */
	var common_pop = function(layui, content, second, btnFn, timeoutFn, btnName) {
		//		if (_cache_checkin.is_show_ws_close_tips) {
		//			return;
		//		}
		//		var timer = null;
		//		if (!btnName || "" == btnName || null == btnName) {
		//			btnName = _locate_message.btn_name.retry;
		//		}
		//		try {
		//			layui.use('layer', function() {
		//				var layer = layui.layer;
		//				layer.open({
		//					content: content,
		//					closeBtn: 0,
		//					title: "",
		//					btn: [btnName],
		//					area: ['21.33rem', '12rem'],
		//					yes: function(index, layero) {
		//						//执行自定逻辑
		//						if (isFunc(btnFn)) {
		//							btnFn();
		//						}
		//						if (timer != null) {
		//							clearInterval(timer);
		//							timer = null;
		//						}
		//						layer.closeAll();
		//						//layer.close(index); //如果设定了yes回调，需进行手工关闭
		//						_cache_checkin.is_show_ws_close_tips = false;
		//					},
		//					success: function(layero, index) {
		//						_cache_checkin.is_show_ws_close_tips = true;
		//						var msg = layero.text();
		//						var i = second;
		//						var fn = function() {
		//							//提示文字内容文字不超过14个文字
		//							var str = content + "(" + i + "秒)";
		//							layero.find(".layui-layer-content").text(str);
		//
		//							if (!i) {
		//								layer.closeAll();
		//								_cache_checkin.is_show_ws_close_tips = false;
		//								//layer.close(index);
		//								clearInterval(timer);
		//								timer = null;
		//								if (isFunc(timeoutFn)) {
		//									//执行自定逻辑
		//									timeoutFn();
		//								}
		//
		//							}
		//							i--;
		//						};
		//						timer = setInterval(fn, 1000);
		//						fn();
		//					}
		//				});
		//			});
		//		} catch (err) {
		//			console.log(err) // 可执行
		//		}

	}
	/**
	 * ====================获取不同时段的问候语
	 */
	var get_time_hello = function() {
		var hello = "";
		var now = new Date(),
			hour;

		var localTime = now.getTime();
		var localOffset = now.getTimezoneOffset() * 60000; //getTimezoneOffset()返回是以分钟为单位，需要转化成ms
		var utc = localTime + localOffset;
		offset = 9; //以韩国时间为例，东9区
		korean = utc + (3600000 * offset) - 3600000;
		now = new Date(korean);
		hour = now.getHours();
		if (hour < 9) {
			hello = _locate_message.common_tip.HELLO_01;
		} else if (hour < 12) {
			hello = _locate_message.common_tip.HELLO_02;
		} else if (hour < 14) {
			hello = _locate_message.common_tip.HELLO_03;
		} else if (hour < 19) {
			hello = _locate_message.common_tip.HELLO_04;
		} else if (hour < 23) {
			hello = _locate_message.common_tip.HELLO_06;
		} else {
			hello = _locate_message.common_tip.HELLO_01;
		}
		return hello;
	}

	var get_ip_and_port_for_url = function(url) {
		var ipp = "";
		if (null != url && "" != url) {
			var sip = url.split("://");
			if (sip && sip.length > 1) {
				ipp = sip[1].split("/")[0];
			}
		}
		return ipp;
	}
	//encode to UTF8
	function encodeUTF8(s) {
		var i, r = [],
			c, x;
		for (i = 0; i < s.length; i++)
			if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
			else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
		else {
			if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
				c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
				r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
			else r.push(0xE0 + (c >> 12 & 0xF));
			r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
		};
		return r;
	}

	// 字符串加密成 hex 字符串
	function sha1(s) {
		var data = new Uint8Array(encodeUTF8(s))
		var i, j, t;
		var l = ((data.length + 8) >>> 6 << 4) + 16,
			s = new Uint8Array(l << 2);
		s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
		for (t = new DataView(s.buffer), i = 0; i < l; i++) s[i] = t.getUint32(i << 2);
		s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
		s[l - 1] = data.length << 3;
		var w = [],
			f = [
				function() {
					return m[1] & m[2] | ~m[1] & m[3];
				},
				function() {
					return m[1] ^ m[2] ^ m[3];
				},
				function() {
					return m[1] & m[2] | m[1] & m[3] | m[2] & m[3];
				},
				function() {
					return m[1] ^ m[2] ^ m[3];
				}
			],
			rol = function(n, c) {
				return n << c | n >>> (32 - c);
			},
			k = [1518500249, 1859775393, -1894007588, -899497514],
			m = [1732584193, -271733879, null, null, -1009589776];
		m[2] = ~m[0], m[3] = ~m[1];
		for (i = 0; i < s.length; i += 16) {
			var o = m.slice(0);
			for (j = 0; j < 80; j++)
				w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
				t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
				m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
			for (j = 0; j < 5; j++) m[j] = m[j] + o[j] | 0;
		};
		t = new DataView(new Uint32Array(m).buffer);
		for (var i = 0; i < 5; i++) m[i] = t.getUint32(i << 2);

		var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function(e) {
			return (e < 16 ? "0" : "") + e.toString(16);
		}).join("");
		return hex.toUpperCase();
	}
	/**
	 * 获取openkey 签名信息
	 * @param {Object} key
	 * @param {Object} securite
	 * @param {Object} hotelId
	 */
	var get_open_key_sign = function(key, securite, hotelId) {
		var sign_info = "appKey" + key + "appSecret" + securite + "hotelId" + hotelId;
		return sha1(sign_info);
	}

	/**
	 * 判断是否为手机号
	 * @param {Object} pone
	 */
	var is_mobile_available = function(pone) {
		var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
		if (!myreg.test(pone)) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * ========================发卡======================
	 * @param req   发卡参数
	 * @param successFn 发卡成功处理函数
	 * @param errorFn   发卡失败处理函数
	 * @param msgId   消息ID
	 */
	var send_card = function(req, successFn, errorFn, msgId) {
		//socket返回
		function ws_callback(response) {
			var data = CHWsProxy.response_parse_normal(response);
			var type = data.type;
			var code = data.code;
			var method = data.method;
			var msg = data.msg;
			var msgId = data.msgId;
			if (isFunc(successFn)) {
				successFn(data);
			}
		}
		//socket连接返回
		function ws_connect_callback(e) {

		}
		//socket错误返回
		function ws_error_callback(e) {
			if (isFunc(errorFn)) {
				errorFn(data);
			}

		}
		//socket断开返回
		function close_callback(e) {
			if (isFunc(errorFn)) {
				errorFn(data);
			}
		}
		//获取卡机状态
		function get_card_status() {
			var request_data = CHWsProxy.request_data(_web_socket_code.CMD_CARD_MACHINE, _web_socket_code.METHOD_STATUS, '',
				msgId);
			CHWsProxy.ws_send(request_data, ws_callback, ws_connect_callback, ws_error_callback, close_callback,
				_web_socket_code.CMD_CARD_MACHINE);
		}

		function do_send_card() {
			var request_data = CHWsProxy.request_data(_web_socket_code.CMD_CARD_MACHINE, _web_socket_code.METHOD_SEND_CARD,
				'', msgId);
			CHWsProxy.ws_send(request_data, ws_callback, ws_connect_callback, ws_error_callback, close_callback,
				_web_socket_code.CMD_CARD_MACHINE);

		}
	}
	/**
	 * ============修改页面语言===============
	 */
	var change_page_language = function(language) {
		_cache_checkin.current_page_language = language;
		if ("en" == language) {
			_locate_message = _locate_message_en;
		} else {
			_locate_message = _locate_message_cn;
		}

	}


	/**  
	 * 将以base64的图片url数据转换为Blob  
	 * @param urlData  
	 *            用url方式表示的base64图片数据  
	 */
	var convertBase64UrlToBlob = function(urlData) {
		// 将base64转为Unicode规则编码
		
		bstr = atob(urlData, 'image/png'),
		//bstr = atob(urlData, 'image/jpeg'),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n); // 转换编码后才可以使用charCodeAt 找到Unicode编码
		}
		return new Blob([u8arr], {
			type: 'image/png'
			//type: 'image/jpeg'
		});
		//return new Blob( [ab] , {type : 'image/png'});  
	}
	
	//判断变量是否为空  空返回TRUE 否则返回 FALSE
	function isEmpty(value)
	{	
		if (!value && typeof(value)!="undefined" && value!=0) 
		{ 
		  return true;
		}　
		else{
		  return false;
		}
    }
	
	/**
	 * =============重新计算弹窗的高度和位置===============
	 */
	var reset_popup_style = function(){
		//计算弹窗的高度和位置
		var popMainArr = document.getElementsByClassName("dk-popup-main");
		
		if(popMainArr && popMainArr.length >0){
		    var pop_width = popMainArr[0].clientWidth;
			var pop_height = pop_width*9/16;
			var pop_top = (_g_client_height - pop_height) /2;
			for(var i=0,len=popMainArr.length;i<len;i++){
				popMainArr[i].style.top=pop_top+"px";
				popMainArr[i].style.height=pop_height+"px";
			}
		}
		//计算toast的高度和位置
		var toastMainArr = document.getElementsByClassName("dk-popup-msg-main");
		
		if(toastMainArr && toastMainArr.length >0){
			var pageMainArr = document.getElementsByClassName("dk-page-main");
			if(isEmpty(pageMainArr) || pageMainArr.length == 0){
				return;
			}
			var pageMaiHeight = pageMainArr[0].clientHeight;//主页面内容的高度
			var _t_bottom = (_g_client_height - pageMaiHeight)/2 + pageMaiHeight * 0.15;
			for(var i=0,len=toastMainArr.length;i<len;i++){
				toastMainArr[i].style.bottom=_t_bottom+"px";
			}
		}
		
	}
	
	/**
	 * =============重置页面样式，重新计算页面的限制的位置==============
	 */
	var reset_page_style = function(){
		//计算主界面的高度
		var pageMainArr = document.getElementsByClassName("dk-page-main");
		if(pageMainArr && pageMainArr.length >0){
			var pageHeight =  _g_client_width*9/16;
			// if(_g_is_v_screen){
			// 	//竖屏
			// 	pageHeight = _g_client_height*0.618;
			// }
			
			var _g_top = (_g_client_height - pageHeight) /2;
			for(var i=0,len=pageMainArr.length;i<len;i++){
				pageMainArr[i].style.top=_g_top+"px";
				// pageMainArr[i].style.height=pageHeight+"px";
			}
		}
		
	}
	
	/**
	 * =============重置页面样式，重新计算页面的限制的位置==============
	 */
	var reset_page_new_style = function(){
		var pageMainArr = document.getElementsByClassName("dk-page-main");
		if(pageMainArr && pageMainArr.length >0){
			var pageHeight =  _g_client_width*9/16;
			if(_g_is_v_screen){
				//竖屏
				pageHeight = _g_client_height*0.618;
			}
			
			var _g_top = (_g_client_height - pageHeight) /2;
			for(var i=0,len=pageMainArr.length;i<len;i++){
				pageMainArr[i].style.top=_g_top+"px";
				pageMainArr[i].style.height=pageHeight+"px";
				pageMainArr[i].style.paddingBottom="0px";
				//pageMainArr[i].style.backgroundColor="rgba(16, 25, 33, 0.52)";
			}
		}
	}

	/**
	 * ===================记录本地日志=================
	 */
	var local_log = function(content) {
		var time = new Date().format("dd hh:mm:ss.S");
		if (JSON) {
			content = JSON.stringify(content);
		}
		if(_cache_checkin.dev_info.debugPage == "1"){
			content = time + " " + content+"<br/>";
			var debugDom = document.getElementById("show-debug-info");
			debugDom.innerHTML = debugDom.innerHTML + content;
		}
		console.log(content);
	}
	/**
	 * ===========是否显示调试信息=========
	 * @param {Object} isShow
	 */
	var show_local_log = function(isShow){
		var debugDom = document.getElementById("show-debug-info");
		
		var clearDebugDom = document.getElementById("clear-debug-info");
		if(isShow){
			debugDom.innerHTML = "";
			debugDom.style.display="block";
			clearDebugDom.style.display="block";
		}else{
			debugDom.innerHTML = "";
			debugDom.style.display="none";
			clearDebugDom.style.display="none";
			_cache_checkin.dev_info.debugPage == "0";
		}
		
	}
	
	/**
	 * 
	 */
	
	/**
	 * ==============清理日志信息=========
	 * @param {Object} isShow 是否隐藏显示信息
	 */
	var clear_local_log = function(isShow){
		var debugDom = document.getElementById("show-debug-info");
		debugDom.innerHTML = "";
			
		var clearDebugDom = document.getElementById("clear-debug-info");
		if(isShow){
			debugDom.style.display="block";
			clearDebugDom.style.display="block";
		}else{
			debugDom.style.display="none";
			clearDebugDom.style.display="none";
		}
		
	}

	/**
	 * ===================记录本地日志=================
	 */
	var local_log_other = function(content) {
		// var time = new Date().format("dd hh:mm:ss.S");
		// if(window.JSON){
		//     content = JSON.stringify(content);
		// }
		// content = time +"======"+content;
		// console.log(content);
		// myPlugin.sysLogMethod(content);
	}
	return {
		"common_pop": common_pop,
		"addClass": addClass,
		"isFunc": isFunc,
		"start_heartbeat_timer": start_heartbeat_timer,
		"start_init_dev": start_init_dev,
		"common_set_order_to_cache": common_set_order_to_cache,
		"getElementsByClassName": getElementsByClassName,
		"clear_biz_cache_info": clear_biz_cache_info,
		"removeClass": removeClass,
		"make_qrcode": make_qrcode,
		"get_unit_sn": get_unit_sn,
		"common_set_single_order": common_set_single_order,
		"common_msg_pop": common_msg_pop,
		"get_first_name": get_first_name,
		"get_time_hello": get_time_hello,
		"hasClass": hasClass,
		"get_ip_and_port_for_url": get_ip_and_port_for_url,
		"get_open_key_sign": get_open_key_sign,
		"is_mobile_available": is_mobile_available,
		"g_start_page_timer": g_start_page_timer,
		"g_restart_page_timer": g_restart_page_timer,
		"g_stop_page_timer": g_stop_page_timer,
		"common_pop_v2": common_pop_v2,
		"common_msg_pop_V2": common_msg_pop_V2,
		"change_page_language": change_page_language,
		"common_confirm_pop": common_confirm_pop,
		"vue_remove_class": vue_remove_class,
		"vue_has_class": vue_has_class,
		"vue_add_class": vue_add_class,
		"send_card": send_card,
		"is_popup_open": is_popup_open,
		"common_popup_close": common_popup_close,
		"local_log": local_log,
		"convertBase64UrlToBlob": convertBase64UrlToBlob,
		"get_random_8": get_random_8,
		"_g_page_timer_start": _g_page_timer_start,
		"is_open_page_timout_timer": is_open_page_timout_timer,
		"local_log_other": local_log_other,
		"reset_page_style":reset_page_style,
		"reset_page_new_style":reset_page_new_style,
		"clear_local_log":clear_local_log,
		"show_local_log":show_local_log
	}
})();

//任务状态常量
var _G_TASK_WORK_STATUS = {
	"NO_WORK":0,//未处理
	"ON_WORKING":1,//处理中
	"WORK_COMPLETE":2,//已处理
	"WORK_REPEAT":3,//循环处理
	"WORK_STOP":4,//终止流程
	"TASK_NO_ACTIVE":0,//任务未激活
	"TASK_ACTIVE":1//任务激活
}

/**
 * ========================任务信息=====================
 * @param {task_id}  任务编号  任务唯一标识
 * @param {task_name}  任务名
 * @param {work_status}  工作状态 0：未处理，1：处理中，2：已处理，3：循环处理,4：终止流程
 * @param {data} 任务相关参数
 * @param {flow_active}  流程激活标识，0：未激活任务，1：已激活任务
 */
var _G_TASK_DATA = [
	{"task_id":"SEND_CARD","task_name":"发卡","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":4},
	{"task_id":"RECIEVE_CARD","task_name":"收卡","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":5},
	{"task_id":"GET_CARD_STATUS","task_name":"获取卡机状态","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"READ_CARD","task_name":"读卡","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"FAKE_SEND_CAED","task_name":"发空卡","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"SCAN_ID","task_name":"扫描证件","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":1},
	{"task_id":"STOP_SCAN_ID","task_name":"停止扫描证件","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"FLASH_OPEN","task_name":"打开闪光灯","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"FLASH_CLOSE","task_name":"关闭闪光灯","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"M1_SCAN","task_name":"扫描M1卡","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":1},
	{"task_id":"STOP_M1_SCAN","task_name":"停止扫描M1卡","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":100},
	{"task_id":"PRINT_XML","task_name":"打印xml格式内容","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":3},
	{"task_id":"PRINT_STR","task_name":"打印字符串","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":3},
	{"task_id":"FACE_DETECT","task_name":"人脸识别","work_status":0,"desc":"","data":null,"flow_active":0,"sort_order":2}
];

/**
 * ===============封装任务处理函数====================
 */
var _G_TASK_DATA_PROCESS = (function(){
	/**
	 * ====================根据任务ID获取任务信息==================
	 * @param {Object} tid
	 */
	var get_task_by_taskid = function(tid){
		var task;
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			if(_G_TASK_DATA[i].task_id==tid){
				task = _G_TASK_DATA[i];
				break;
			}
		}
		return task;
	}
	
	/**
	 * ================重置任务状态数据为初始状态==============
	 */
	var reset_task_data_status_default = function(){
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			_G_TASK_DATA[i].work_status = _G_TASK_WORK_STATUS.NO_WORK;
		}
	}
	
	/**
	 * ================重置任务流程数据为初始状态=============
	 */
	var reset_task_data_flow_active_default = function(){
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			//置任务为未激活状态
			_G_TASK_DATA[i].flow_active=_G_TASK_WORK_STATUS.TASK_NO_ACTIVE;
		}
		task_sort();
	}
	
	/**
	 * ======设置任务的参数信息==============
	 * @param {Object} tid
	 * @param {Object} params
	 */
	var set_task_data_params = function(tid,params){
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			if(_G_TASK_DATA[i].task_id==tid){
				_G_TASK_DATA[i].data=params;
				break;
			}
		}
	}
	
	/**
	 * ======设置任务的参数信息==============
	 * @param {Object} tid
	 * @param {Object} stauts
	 */
	var set_task_work_status = function(tid,stauts){
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			if(_G_TASK_DATA[i].task_id==tid){
				_G_TASK_DATA[i].work_status=stauts;
				break;
			}
		}
	}
	
	/**
	 * ==============设置激活任务=================
	 * @param {Object} tid 任务id
	 * @param {Object} sort_order 排序号
	 */
	var active_task = function(tid,sort_order){
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			if(_G_TASK_DATA[i].task_id==tid){
				var sort = sort_order && null != sort_order ? sort_order : _G_TASK_DATA[i].sort_order;
				//置任务为激活状态
				_G_TASK_DATA[i].flow_active=_G_TASK_WORK_STATUS.TASK_ACTIVE;
				_G_TASK_DATA[i].sort_order = sort;
				
				break;
			}
		}
	}
	
	/**
	 * ==============获取要执行的任务（已激活且未完成的任务）=================
	 */
	var get_excute_task = function(){
		var task = null;
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			if(_G_TASK_DATA[i].flow_active==_G_TASK_WORK_STATUS.TASK_ACTIVE && _G_TASK_DATA[i].work_status!=_G_TASK_WORK_STATUS.WORK_COMPLETE){
				task = _G_TASK_DATA[i];
				break;
			}
		}
		return task;
	}
	
	/**
	 * =============获取激活任务总数===============
	 */
	var get_total_active_task_count = function(){
		var totalCount = 0;
		for(var i=0,len=_G_TASK_DATA.length;i<len;i++){
			if(_G_TASK_DATA[i].flow_active==_G_TASK_WORK_STATUS.TASK_ACTIVE){
				totalCount += 1;
			}
		}
		return totalCount;
	}
	/**
	 * ================执行任务排序
	 * @param {Object} compare
	 */
	var task_sort = function(){
		_G_TASK_DATA.sort(compare);
	}
	
	/**
	 * =============升序===================
	 * @param {Object} obj1
	 * @param {Object} obj2
	 */
	var compare = function (obj1, obj2) {
	    var val1 = obj1.sort_order;
	    var val2 = obj2.sort_order;
	    if (val1 < val2) {
	        return -1;
	    } else if (val1 > val2) {
	        return 1;
	    } else {
	        return 0;
	    }            
	} 
	
	return {
		"get_task_by_taskid":get_task_by_taskid,
		"reset_task_data_status_default":reset_task_data_status_default,
		"reset_task_data_flow_active_default":reset_task_data_flow_active_default,
		"set_task_data_params":set_task_data_params,
		"set_task_work_status":set_task_work_status,
		"get_total_active_task_count":get_total_active_task_count,
		"get_excute_task":get_excute_task,
		"active_task":active_task,
		"task_sort":task_sort
	}
})()
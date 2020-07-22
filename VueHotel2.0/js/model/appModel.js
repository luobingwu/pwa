var BizModel = (function(){
	function ClientGetCusRecReq(hotelId,idNo){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.idNo=idNo;
	    return obj;    
	}
	function clientReqOrder(hotelId,idName,idNo,pageIndex,pageSize){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.idName=idName;
	    obj.idNo=idNo;
	    obj.pageIndex=pageIndex;
	    obj.pageSize=pageSize;
	    return obj;    
	}
	function ClientGetHotelAvailableRoomsReq(hotelId,total,reservationId,roomTypeId){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.reservationId=reservationId;
	    obj.total=total;
	    obj.roomTypeId=roomTypeId;
	    return obj;    
		
	}
	//选房
	function ClientChooseRoomReq(hotelId,total,isHour,roomTypeId){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.total=total;
	    obj.isHour=isHour;
	    obj.roomTypeId=roomTypeId;
	    return obj;    
	}
	function ClientAssignRoomReq(hotelId,reservationId,confirmationNo,roomNo){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.reservationId=reservationId;
	    obj.confirmationNo=confirmationNo;
	    obj.roomNo=roomNo;
	    return obj;    
	}
	function ClientGetMemberInfoByIdNoReq(hotelId,idNo){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.idNo=idNo;
	    return obj;    
	}
	//查询订单详情
	function ClientGetResOrderReq(hotelId,reservationId,confirmationNo,lastName,accountNo){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.reservationId=reservationId;
	    obj.confirmationNo=confirmationNo;
	    obj.lastName=lastName;
		obj.accountNo=accountNo;
	    return obj;    
	}
	//心跳请求
	function ClientHeartBeatReq(hotelId,lastReportTime,timeConsuming,appVersion){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.lastReportTime=lastReportTime;
	    obj.timeConsuming=timeConsuming;
	    obj.appVersion=appVersion;
	    return obj;    
	}
	//查询酒店房间信息请求
	function ClientQueryHotelRoomReq(hotelId,roomTypeId,memberId,memberLevel,total,cardNo,isHour){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.roomTypeId=roomTypeId;
	    obj.memberId=memberId;
	    obj.memberLevel=memberLevel;
	    obj.total=total;
	    obj.cardNo=cardNo;
	    obj.isHour=isHour;
	    return obj;    
	}
	//订单支付请求
	function ClientOrderPayReq(){
	    var obj = new Object();
	    obj.hotelId="";
        //预订单单ID
	    obj.reservationId="";
        //确认号
	    obj.confirmationNo="";
        //商户流水号
	    obj.orderQueryId="";
        //身份证号
	    obj.idNo="";
        //会员ID
	    obj.memberId="";
	    //现金支付时，员工卡号
	    obj.cardNumber="";
        //员工班次类型
	    obj.userShift="";
        //是否是小时房，0：否；1：是
	    obj.isHour="";
        //支付类型，CASHPay：现金支付；CRMValue：储值卡支付；CRMPoint：积分支付；CRMWallet：红包支付；AlipayNativeScanCode：支付宝原生扫码支付；WeChatNativeScanCode：微信原生扫码支付；ChinaUmsPay：银联商务
	    obj.payType="";
        //支付金额
	    obj.totalPrice="";
        //房间号
	    obj.roomNo="";
	    return obj;    
	}
	//制卡信息
	function MakeCardInfo(){
	    var obj = new Object();
	    obj.lockType="";
	    obj.writeKey="";
	    obj.systemPw="";
	    obj.room="";
	    obj.startTime="";
	    obj.endTime="";
	    obj.inmate="";
	    obj.batchNo="";
	    obj.waterNo="";
	    obj.roomNo="";
	    obj.expectedDate="";
	    return obj;    
	}
	//查询支付状态
	function ClientGetPayStatusReq(hotelId,orderQueryId){
	    var obj = new Object();
	    obj.hotelId=hotelId;
        //订单流水ID
	    obj.orderQueryId=orderQueryId;
	    return obj;
	}
	//获取推荐房
	function ClientGetRecommendRoomReq(hotelId,total,isHour,roomTypeId,reservationId,confirmationNo){
	    var obj = new Object();
	    obj.hotelId=hotelId;
	    obj.total=total;
	    obj.isHour=isHour;
	    obj.roomTypeId=roomTypeId;
	    obj.reservationId=reservationId;
	    obj.confirmationNo=confirmationNo;
	    return obj;   
	}
	//入住请求
	function ClientCheckInReq(){
	    var obj = new Object();
		/** 预订单ID **/
		obj.reservationId;
		/** 确认号 **/
		obj.confirmationNo;
		/** 酒店ID **/
		obj.hotelId;
		/** 订单联系人手机号 **/
		obj.linkMobile;
		/** 入住房间号 **/
		obj.roomNo;
		/** 入住人证件号 **/
		obj.idNo;
		/** 入住人证件名字 **/
		obj.idName;
		/** 证件信息 **/
		obj.identityCardEntity;
	    return obj;
	}
	//添加同住人请求
	function ClientAddShareReq(){
	    var obj = new Object();
		/** 预订单ID **/
		obj.reservationId;
		/** 确认号 **/
		obj.confirmationNo;
		/** 酒店ID **/
		obj.hotelId;
		/** 证件信息 **/
		obj.identityCardEntity;
	    return obj;
	}
	function ClientIdentityCardEntity(){
	    var obj = new Object();
	    obj.strName="";
	    obj.strSex="";
	    obj.sex=0;
	    obj.strNationCode="";
	    obj.strNation="";
	    obj.strBirth="";
	    obj.strAddr="";
	    obj.strIdCode="";
	    obj.strIssue="";
	    obj.strIssue="";
	    obj.strBeginDate="";
	    obj.strEndDate="";
	    obj.strUid="";
	    return obj;    
	}
	//员工登录请求
	function ClientUserLoginAuthReq(hotelId,cardNumber){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = hotelId;
		/** 会员卡号**/
		obj.cardNumber = cardNumber;
	    return obj;
		
	}
	//获取制卡信息请求
	function ClientGetWriteCardInfoReq(hotelId,reservationId,roomNo,confirmationNo){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = hotelId;
		/** 预订单号**/
		obj.reservationId = reservationId;
		/** 房间号**/
		obj.roomNo = roomNo;
		/** 确认号**/
		obj.confirmationNo = confirmationNo;
	    return obj;
		
	}
	//回写制卡信息接口
	function ClientWriteCardReq(){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = "";
		/** 预订单号**/
		obj.reservationId = "";
		/** 房间号**/
		obj.roomNo = "";
		/** 确认号**/
		obj.confirmationNo = "";
		/** 开始时间 yyyy-MM-dd HH:mm:ss**/
	    obj.start="";
		/** 结束时间 yyyy-MM-dd HH:mm:ss**/
	    obj.end="";
	    /** 是否续卡 1：续卡；0：发卡 **/
	    obj.extension="";
	    /** 证件号 **/
	    obj.idNo="";
	/** 证件名称 **/
	    obj.idName="";
	    /**卡号**/
	    obj.cardSn = "";
	    return obj;
		
	}
	//创建订单请求
	function ClientCreateReservationReq(){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId="";
		/** 预订单号**/
		obj.daysCount = 0;
		/** 房间类型ID**/
		obj.roomTypeId = "";
		/** 房间号**/
		obj.rateCode = "";
		/** 房间号**/
		obj.roomNo = "";
		/** 非会员下单，联系人手机号**/
		obj.linkMobile = "";
		/** 非会员下单，联系人手机号**/
		obj.identityCardEntity = new ClientIdentityCardEntity();
	    return obj;
	}
	//退房请求
	function ClientCheckOutReq(hotelId,reservationId,roomNo,cardSn,confirmationNo){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = hotelId;
		/** 预订单号**/
		obj.reservationId = reservationId;
		/** 房间号**/
		obj.roomNo = roomNo;
		/** 房卡号**/
		obj.cardSn = cardSn;
		/** 确认号**/
		obj.confirmationNo = confirmationNo;
	    return obj;
	}
	//判断是否可退房请求
	function ClientCheckCheckOutReq(hotelId,roomNo,cardSn){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = hotelId;
		/** 房间号**/
		obj.roomNo = roomNo;
		/** 房卡号**/
		obj.cardSn = cardSn;
	    return obj;
	}
	//上传设备配置信息
	function ClientUpdateDeviceConfReq(){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = "";
		/** 是否开通公安上传**/
		obj.openedUploadPolice = "";
		/** 公安上传地址**/
		obj.uploadPoliceUrl = "";
		/** 是否开通员工卡确认，0：否；1：是**/
		obj.opendedCardAck = "";
		/** 是否开通人脸识别，0：否；1：是 **/
		obj.openedFaceDetect = "";
		/** 是否开启语音播报，0：否；1：是**/
		obj.isOpenSound = "";
	    return obj;
		
	}
	//获取订单账单信息
	function ClientQueryBillsReq(hotelId,reservationId,roomNo,confirmationNo,accountNo){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = hotelId;
		/** 预订单号**/
		obj.reservationId = reservationId;
		/** 房间号**/
		obj.roomNo = roomNo;
		/** 确认号**/
		obj.confirmationNo = confirmationNo;
		/** 账号**/
		obj.accountNo = accountNo;
	    return obj;
		
	}
	function ClientGetReservationsByKeyCardReq(hotelId,reservationId,cardSn,roomNo,confirmationNo,accountNo,lockRoomNo){
	    var obj = new Object();
		/** 酒店编号 **/
		obj.hotelId = hotelId;
		/** 预订单号**/
		obj.reservationId = reservationId;
		/** 卡号**/
		obj.cardSn = cardSn;
		/** 房间号**/
		obj.roomNo = roomNo;
		/** 门锁房间号**/
		obj.lockRoomNo = lockRoomNo;
		/** 确认号**/
		obj.confirmationNo = confirmationNo;
		/** 账号**/
		obj.accountNo = accountNo;
	    return obj;
	}
	return {
		"clientReqOrder":clientReqOrder,
		"ClientGetMemberInfoByIdNoReq":ClientGetMemberInfoByIdNoReq,
		"ClientHeartBeatReq":ClientHeartBeatReq,
		"ClientQueryHotelRoomReq":ClientQueryHotelRoomReq,
		"ClientGetPayStatusReq":ClientGetPayStatusReq,
		"ClientOrderPayReq":ClientOrderPayReq,
		"ClientUserLoginAuthReq":ClientUserLoginAuthReq,
		"ClientGetWriteCardInfoReq":ClientGetWriteCardInfoReq,
		"MakeCardInfo":MakeCardInfo,
		"ClientCheckInReq":ClientCheckInReq,
		"ClientCreateReservationReq":ClientCreateReservationReq,
		"ClientGetResOrderReq":ClientGetResOrderReq,
		"ClientChooseRoomReq":ClientChooseRoomReq,
		"ClientGetRecommendRoomReq":ClientGetRecommendRoomReq,
		"ClientGetHotelAvailableRoomsReq":ClientGetHotelAvailableRoomsReq,
		"ClientGetCusRecReq":ClientGetCusRecReq,
		"ClientCheckOutReq":ClientCheckOutReq,
		"ClientCheckCheckOutReq":ClientCheckCheckOutReq,
		"ClientAssignRoomReq":ClientAssignRoomReq,
		"ClientUpdateDeviceConfReq":ClientUpdateDeviceConfReq,
		"ClientAddShareReq":ClientAddShareReq,
		"ClientWriteCardReq":ClientWriteCardReq,
		"ClientGetReservationsByKeyCardReq" :ClientGetReservationsByKeyCardReq,
		"ClientQueryBillsReq" : ClientQueryBillsReq
	};
})();


function userInfo(){
    var obj = new Object();
    obj.idName="";
    obj.idNo="";
    obj.memberId="";
    obj.cardNo="";
    obj.idNoType="";
    obj.memberLevel="";
    obj.memberLevelDesc="";
    obj.gender="";
    obj.genderText="";
    obj.mobile="";
    obj.headerImg = "";//头像信息
    obj.sceneImg = "";//现场照
    obj.faceSimilarExpect = "";//相似度
    obj.isCheckin = false;
    obj.strNationCode = "";
    obj.strNation = "";
    obj.strBirth = "";
    obj.strAddr = "";
    obj.strIssue = "";
    obj.strBeginDate = "";
    obj.strEndDate = "";
    
    return obj;    
}
function hotelInfo(){
    var obj = new Object();
    obj.hotelId="";
    obj.hotelName="";
    obj.lockType="";
    obj.psbId="";
    obj.uploadPoliceUrl="";
    obj.remotePoliceUploadUrl="";
    obj.uploadPoliceUrl="";
    return obj;    
}
function order(){
    var obj = new Object();
    //支付流水号 
    obj.orderQueryId="";
    //微信支付二维码链接
    obj.wx_pay_code_url="";
    //支付方式
    obj.payType = "";
    //支付宝支付二维码链接
    obj.ali_pay_code_url="";
    obj.checkInTime="";
    obj.checkOutTime="";
    obj.childCnt="";
    obj.baseRate="";
    obj.buyBkf="";
    obj.confirmationNo="";
    obj.currency="";
    obj.currencyCode="";
    obj.daysCnt="";
    obj.firstName ="";
    obj.fullName="";
    obj.hotelId="";
    obj.includingBkf="";
    obj.isChooseRoom="";
    obj.isDeposit="";
    obj.lastName="";
    obj.linkEmail="";
    obj.linkMobile="";
    obj.middleName="";
    obj.payOk="";
    obj.profileId="";
    obj.rateCode="";
    obj.rateSecret="";
    obj.reservationId="";
    obj.reservationStatus="";
    obj.roomCnt="";
    obj.roomTypeId="";
    obj.roomTypeName="";
    obj.roomTypeNameEn="";
    obj.totalConsumeFee="";
    obj.totalNeedPreAuthPayFee="";
    obj.totalNeedToPayPrice="";
    obj.totalPayPrice="";
    obj.totalPayedPreAuthPayFee="";
    obj.totalPreAuthPayFee="";
    obj.totalPrice="";
    obj.roomNos=[];
    obj.liveGuests = [],
    obj.rooms=[];
    return obj;    
}
//页面编号
var _pages_view = {
	"order_page":"PG001",//订单确认页
	"orders_page":"PG002",//订单列表页面
	"pay_page":"PG003",//支付页面
	"scan_page":"PG004",//扫描证件页面
	"hotel_rooms_price_page":"PG005",//房价牌页面
	"select_room_page":"PG006",//选房页面
	"checkout_page":"PG007",//退房页面
	"checkout_succss_page":"PG008",//退房成功页面
	"checkin_succss_page":"PG009",//入住成功页面
	"auth_page":"PG010",//授权卡页面
	"make_card_page":"PG011",//制卡页
	"police_upload_page":"PG012",//公安上传页,//制卡页
	"add_mobile_page":"PG013",//填写手机号页
	"home_page":"PG014",//首页
	"checkout_account_page":"PG015",//退房账单页面
	"other_way_page":"PG016",//退房账单页面
	"keepoccupancy_page":"PG017",//续住页面
	"keepoccupancy_read_page":"PG018",//续住读卡页面
	"setting_page":"PG019",//续住读卡页面
	"index_page":"PG020"//续住读卡页面
}
var server_infaces = {
	"scanId":"S0001",//扫描身份证流程
	"scanCard":"S0002",//授权卡流程
	"getCardStatus":"S0003",//获取卡机状态流程
	"sendCard":"S0004",//发卡流程
	"check_person_auth":"S0005",//认证合一授权流程
	"to_checkin":"S0006",//去办理入住流程
	"order_ack":"S0007",//订单确认页流程
	"readCard":"S0008",//读卡流程
	"changeRoom":"S0009",//换房流程
	"psbUpload":"S0010",//上传公安
	"getRoomTypes":"R0001",//查询酒店所有房型
	"getAllHotelRoomsAndPrice":"R0002",//查询酒店所有客房及房价信息
	"getHotelRoomAndPrice":"R0003",//查询酒店指定客房及房价信息
	"getAvalidRooms":"R0004",//查询可用房信息
	"getRecommondRoom":"R0005",//查询推荐房信息
	"getOrders":"O0001",//查询客人预订单信息
	"getMemberOrders":"O0002",//查询会员预订单信息
	"getOrderDetail":"O0003",//查询订单详情
	"orderSplit":"O0004",//订单拆分接口
	"createOrder":"O0005",//创建订单接口
	"assignRoom":"O0006",//订单排房接口
	"checkin":"O0007",//入住接口
	"getWriteCardInfo":"O0008",//获取订单制卡信息
	"writeCard":"O0009",//回写制卡信息
	"canCheckout":"O0010",//判断订单是否可以办理退房接口
	"checkout":"O0011",//退房接口
	"canKeepOccupancy":"O0012",//判断订单是否可以办理续住
	"keepOccupancy":"O0013",//续住接口
	"addShare":"O0014",//添加同住客人
	"addShareOrder":"O0015",//添加Share订单
	"getLiveOrder":"O0016",//查询客人在住订单
	"getOrderByCardSn":"O0017",// 根据房卡查询订单信息
	"getBillInfo":"B0001",//查询订单/房间账务信息
	"addPayBill":"B0002",//入付款账务接口
	"addDebit":"B0003",//入消费账务接口
	"changeAR":"B0004",//转AR接口
	"changeBill":"B0005",//转账接口
	"getCredit":"C0001",//查询信用接口
	"addCredit":"C0002",//新增预授权
	"comleteCredit":"C0003",//预授权完成
	"cancelCredit":"C0004",//预授权撤销
	"completeCancelCredit":"C0005",//预授权完成撤销
	"getPayQRcode":"P0001",//获取支付二维码接口
	"getPayStatus":"P0002",//查询订单支付状态接口
	"cashPay":"P0003",//现金支付接口
	"inital":"G0001",//客户端初始化接口
	"heartBeat":"G0002",//客户端心跳接口
	"uploadDevStatus":"G0003",//客户端上报设备状态
	"uploadPsbStatus":"G0004",//客户端上报上传公安状态
	"employeeAuth":"G0005",//员工授权接口
	"uploadPosSign":"G0006",//上传POS签购单信息
	"uploadDevConfig":"G0007",//更新设备配置
	"yituFace":"F0001",//亿图人脸比对
	"3MFace":"F0002",//3M人脸比对
	"getMemberInfo":"M0001",//查询会员信息
	"registerMember":"M0002",//注册会员信息
	"updateMember":"M0003"//更新会员信息
}
//人脸上传相关参数
var _cache_erpaier = {
	"erpaier_login_url":"http://card.erpaier.com:10080/v1/login",
	"erpaier_people_url":"http://card.erpaier.com:10080/v1/people",
	"erpaier_uploadhead_url":"http://card.erpaier.com:10080/v1/uploadHead",
	"sensewe_api_base":"http://120.55.157.19/sensewe-api",
	"token":"",
	"check_out_date":"",
	"gender":"2",
	"mainId":"",//主体ID
	"u_idNo":"",//证件号
	"u_num":"",//会员num
	"phone":"",//账号手机
	"u_phone":"",//会员手机
	"u_cardId":"",//会员卡号
	"u_headimg":"",//会员照片
	"u_name":"", //上传的会员名
	"upload_img_url":"", //上传人脸照片地址
	"privilege":"" //上传的会员名
}

var _cache_checkin = {
	"kee_occupancy_data":{},//续住信息
	"is_first_open_pages":true,//是否首次打开页面
	"recommend_room_info":null,//推荐房信息
	"page_process_tag":"",//当前页面处理标志，用于标识上一个页面处理的流程
	"ws_log_info":"",
	"current_page_language":"cn",//当前页面使用语言，cn:中文，en:英文
	"locate_timer":null,
	"from_page":"",//来源页面
	"current_page":"",//当前页面
	"link_mobile":"",//保存填写的联系人手机号
	"process_tag" : "0",//当前业务请求流程标志，用于标识当前发生的业务服务请求
	"hotelInfo" : hotelInfo(),
	"userInfo" : userInfo(),
	"identy_info":null,//身份证扫描结果
	"checkout_info":{"roomNo":"","cardSn":"","reservationId":"","confirmationNo":""},//退房相关信息
	"order" : order(),//临时存储的订单信息
	"hall_useable_rooms":[],//可用房信息
	"orderList" : [],//查询的订单列表
	"card_make_info":null,
	"is_show_ws_close_tips":false,//是否显示弹窗
	"ws_error_counter":0,//计算websocket连接错误次数
	"ws_error_limit_counter":0,//显示websocket错误弹窗信息的临界测试
	"ws_error_counter_scal":1.5,//下次显示websocket信息是上次显示临界此时的倍数
	"auth_card_sn" : "",
	"user_shift" : "",
	"pms_biz_url":"",
	"hotel_rooms_list":[],
	"pms_monitor_url":"",
	"is_card_in_read":0,//读卡位置是否有卡，0：无，1：有
	"current_select_room":{"roomNo":"","days":0,"roomTypeId":"","ratecode":""},//当前选择的房间
	"checkin_guests":null, //办理入住的客人信息集合（Map)
	"ws_ip":"",
	"open_key_config" :{
	    "open_key_qr_url":"https://openkeychina.cn/business/user/pms/weChat/dynamicCode?mobile=<MOBIEL>&sign=",
	    "appKey":"a265567fb0d9cd97",
	    "appSecret":"fdd0ae1f7e42aa05b6f657",
	},
	"dev_info":{
		"serviceId":"",//请求服务ID
		"devUniqueNo":"e3fceaf418ef560e",//APP编号
		"devModel":"",//设备模型
		"platform":"",//平台
		"ethMac":"",//有线mac
		"ethIp":"",
		"wifiMac":"",
		"wifiIp":"",
		"androidModel":"",
		"androidVersion":"",
		"face_similar_span":0.2,//人脸识别男女识别的差值
	    "face_similar_expect":"0.5",//人脸识别相似度判断值
		"devOsVer":"",
		"appVer":"Version1.7",
		"echostr":"",
		"retryKey":"",
		"isEmployeeCardSkipFaceRecognize":0,
		"isIca":0,
		"isOpenSound":0,
		"isPosUseEmployeeCard":0,
		"isShowPassportInfo":0,
		"isUploadFaceToMiniFcs":0,
		"localPoliceUpload":0,
		"opendedCardAck":0,
		"logoLocation":0,
		"opendedSelection":0,
		"openedFaceDetect":0,
		"openedPassport":0,
		"openedUploadPolice":0,
		"openedWxApplet":0,//是否打开微信小程序
		"uploadFaceInfo":0,//是否上传人脸信息
		"openedItc":0,//是否打开智能客控
		"wxAppletUrl":"http://test.com",//微信小程序地址
		"payType":"",
		"popup":0,
		"openTestScanID":1,
		"openTestSendCard":1,
		"openTestFaceDetect":1,
		"openTestSendCard":1,
		"openTestRecieveCard":1,
		"openTestScanM1":0,
		"openTestPrint":1,
		"openedOnlineVersion":1, //是否打开线上版本，1：线上版，0：演示版
		"printType":"PRINTER",//打印机类型
		"popupUrl":"",
		"posType":"",
		"receivePoliceKeyUrl":"",
		"remoteSettingUrl":"",
		"pmsMonitorUrl":"",
		"pmsBizUrl":"http://139.196.110.35:8099/api_beta/kws",
		"devDriverUrl":"ws://127.0.0.1:9001/v1/ws_devtalk",
		"pmsBizIp":"139.196.110.35:8099",
		"devDriverIp":"localhost:9001",
		"pmsMonitorIp":"",
		"debug":"0",//是否打开debug,1:开，0：关
		"debugPage":"0",//是否打开页面debug,1:开，0：关
		"keyAppUpUrl":"http://139.196.110.35:8088/ruby/shhq",
		"keyAppUpIp":"",
		"keyAppCloudUrl":"",
		"keyAppCloudIp":"",
		"uploadPoliceUrl":"",
		"read_card_timer_count":1000,
		"isSendCard":1 ,//是否发卡，1：发卡，0：不发卡
		"sensewe_valid_code":"" //商汤接口验证码
	},
	"webSocketError":"",
	"webSocketResultCode":""
};
var _web_socket_code = {
	"CMD_CONFIG_MACHINE":"CONFIG_MACHINE",
	"METHOD_CONFIG_LOCK":"config_lock",
	"CMD_IDCARD":"IDCARD",
	"METHOD_SCAN":"scan",
	"METHOD_STOP":"stop",
	"METHOD_M1_SCAN":"m1_scan",
	"METHOD_M1_STOP":"m1_stop",
	"CMD_CARD_MACHINE":"CARD_MACHINE",
	"METHOD_STATUS":"status",
	"METHOD_SEND_CARD":"send_card",
	"METHOD_FAKE_SEND_CAED":"fake_send_card",
	"METHOD_RECEIVE_CARD":"receive_card",
	"METHOD_MOVE_CARD_TO_HOLDER":"receive_card_to_creceiveardbox",
	"METHOD_MOVE_CARD_TO_MOUTH":"move_card_to_mouth",
	"METHOD_READ_CARD":"read_card",
	"METHOD_CHECKOUT_CARD":"jinwei_check_out",
	"CMD_PRINTER":"PRINTER",
	"CMD_PRINTER_YL":"PRINTER_YL",
	"METHOD_IS_OUT_PAPER":"is_out_paper",
	"METHOD_PRINT_XML":"print_xml",
	"METHOD_PRINT_STRING":"print_string",
	"CMD_FLASH":"FLASH",
	"METHOD_CLOSE":"close",
	"METHOD_OPEN":"open",
	"sucess":"0200",
	"unknow_dev":"0201",
	"error_op":"0202",
	"used_dev":"0203",
	"error_req":"0204",
	"exception":"0400",
	"card_pwd_error":"67",//读卡验证密码有误
	"read_card_error":"65",//寻卡失败
	"com_read_error":"-103",//串口读取数据错误
	"error_format":"-1"
}
//驱动管理标志
var driver_proxy_flags = {
	"ID_FLAG":1,//是否可以发送证件指令标志，0：不可以，1：可以
	"CARD_FLAG":1,//是否可以发送卡机指令标志，0：不可以，1：可以
	"PRINT_FLAG":1,//是否可以发送打印指令标志，0：不可以，1：可以
	"CONFIG_FLAG":1,//是否可以发送配置指令标志，0：不可以，1：可以
	"FLESH_FLAG":1//是否可以发送闪光灯指令标志，0：不可以，1：可以
}
var card_status = {
	"card_in_mouth":"8000",//卡嘴有卡
	"card_in_read":"8001",//读卡位置有卡
	"card_null":"8003"//卡空
}
var _pay_type = {
	"CASH":"CASH",
	"STROE_VALUE_CARD":"STROE_VALUE_CARD",
	"CRMPoint":"CRMPoint",
	"CRMWallet":"CRMWallet",
	"ALIPAY":"ALI",
	"WECHAT":"WECHAT",
	"BANK_CARD":"BC"
}
//业务返回码
var _business_code = {
	"BIZ_CODE_01":"0000",//成功
	"BIZ_CODE_02":"3010" //没有在住信息
}
//"ALIPAY,BANK_CARD,STROE_VALUE_CARD,CASH,WECHAT
var _constants = {
	"http_time_out":10,
	"scan_time_out":5000,
	"on_hold_time_out":2000,
	"page_change_time_out":500,
	"page_time_out":30,
	"page_time_out_temp":30,
	"page_time_out_60":60,
	"heartbeat_time_out":30000,
	"page_time_out_5":5,
	"sucess":"0000",
	"lastReportTime":0,
	"toast_time_out":3,
	"lock_time_out":5//弹窗超时时间
}
//页面功能权限开关
var _page_function_auth = {
	"room_selection":false //是否开启选房功能
}




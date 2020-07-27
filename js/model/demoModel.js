//演示数据模型
var DEMO_MODEL = (function(){
	//可用房价牌demo数据
	var _hotel_room_prices = {
		"roomInfos":[
			{
				"hotelId":"H000015",
				"roomTypeId":"1SK",
				"roomTypeName":"一居室海景套房",
				"ratecode":"WKI",
				"packages":"BFN2",
				"pkgdes":"西式早餐二份",
				"roomPrices":[
					{
						"marketPrice":0.01,
						"memberPrice":0.01,
						"bizDay":"2019-12-31"
					}
				],
				"chamberNumber":"0610",
				"usableMinCount":10
			},
			{
				"hotelId":"H000015",
				"roomTypeId":"SGK",
				"roomTypeName":"园景大床房",
				"ratecode":"WKI",
				"packages":"BFN2",
				"pkgdes":"西式早餐二份",
				"roomPrices":[
					{
						"marketPrice":0.01,
						"memberPrice":0.01,
						"bizDay":"2019-12-31"
					}
				],
				"chamberNumber":"0515",
				"usableMinCount":8
			},
			{
				"hotelId":"H000015",
				"roomTypeId":"SGT",
				"roomTypeName":"园景双床房",
				"ratecode":"WKI",
				"packages":"BFN2",
				"pkgdes":"西式早餐二份",
				"roomPrices":[
					{
						"marketPrice":0.01,
						"memberPrice":0.01,
						"bizDay":"2019-12-31"
					}
				],
				"chamberNumber":"0404",
				"usableMinCount":13
			}
		]
	}
	
	//可用房间demo数据
	var _valid_rooms = {
		"SGT":{   //园景双床房
			"halls": [
			  {
				"usableMinCount": 39,
				"hallID": "1",
				"hallName": "主楼",
				"floors": [
				  {
					"floorID": "3",
					"floorImgUrl": null,
					"floorName": "03",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0304"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0311"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0314"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0315"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0318"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0323"
					  }
					]
				  },
				  {
					"floorID": "4",
					"floorImgUrl": null,
					"floorName": "04",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0403"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0404"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0415"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0418"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0423"
					  }
					]
				  },
				  {
					"floorID": "5",
					"floorImgUrl": null,
					"floorName": "05",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0521"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0523"
					  }
					]
				  }
				]
			  }
			]
		 },
		"SGK":{ //园景大床房
			"halls": [
			  {
				"usableMinCount": 24,
				"hallID": "1",
				"hallName": "主楼",
				"floors": [
				  {
					"floorID": "3",
					"floorImgUrl": null,
					"floorName": "03",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "3",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0309"
					  }
					]
				  },
				  {
					"floorID": "4",
					"floorImgUrl": null,
					"floorName": "04",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0412"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "4",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0413"
					  }
					]
				  },
				  {
					"floorID": "5",
					"floorImgUrl": null,
					"floorName": "05",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0504"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0509"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0512"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0515"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "5",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0520"
					  }
					]
				  }
				]
			  }
			]
		},
		"1SK": { //一居室海景套房
			"halls": [
			  {
				"usableMinCount": 70,
				"hallID": "1",
				"hallName": "主楼",
				"floors": [
				  {
					"floorID": "11",
					"floorImgUrl": null,
					"floorName": "11",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "11",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "1110"
					  }
					]
				  },
				  {
					"floorID": "12",
					"floorImgUrl": null,
					"floorName": "5楼",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "12",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "1205"
					  }
					]
				  },
				  {
					"floorID": "15",
					"floorImgUrl": null,
					"floorName": "8楼",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "15",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "1505"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "15",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "1510"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "15",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "1517"
					  }
					]
				  },
				  {
					"floorID": "16",
					"floorImgUrl": null,
					"floorName": "8楼",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "16",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "1603"
					  }
					]
				  },
				  {
					"floorID": "6",
					"floorImgUrl": null,
					"floorName": "06",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "6",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0605"
					  },
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "6",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0610"
					  }
					]
				  },
				  {
					"floorID": "7",
					"floorImgUrl": null,
					"floorName": "07",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "7",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0717"
					  }
					]
				  },
				  {
					"floorID": "8",
					"floorImgUrl": null,
					"floorName": "08",
					"latLngBounds": null,
					"rooms": [
					  {
						"features": [],
						"building": "1",
						"chamberType": "",
						"storey": "8",
						"isAssign": 0,
						"clientLatLngBounds": null,
						"chamberNumber": "0817"
					  }
					]
				  }
				]
			  }
			]
		  }
	};
	
	
	//订单列表
	var _order_list = [];
	var _order_bills_list = [];
	var _send_card_log = [];
	
	/**
	 * ===============退房删除订单相关记录==============
	 * @param {Object} orderId
	 * @param {Object} cardNo
	 */
	var check_out = function(orderId,cardNo){
		var new_order_list = [],new_order_bill_list = [];
		//删除订单信息
		if(_order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationId != orderId){
					new_order_list.push(_order_list[i]);
				}
			}
			
			_order_list.length = 0;//清除数据
			if(new_order_list.length > 0){
				//重新复制
				for(var i=0,len=new_order_list.length;i<len;i++){
					_order_list.push(new_order_list[i]);
				}
			}
		}
		//删除订单账单信息
		if(_order_bills_list.length > 0){
			for(var i=0,len=_order_bills_list.length;i<len;i++){
				if(_order_bills_list[i].reservationId != orderId){
					new_order_bill_list.push(_order_bills_list[i]);
				}
			}
			
			_order_bills_list.length = 0;//清除数据
			if(new_order_bill_list.length > 0){
				//重新复制
				for(var i=0,len=new_order_bill_list.length;i<len;i++){
					_order_bills_list.push(new_order_bill_list[i]);
				}
			}
		}
		if(!cardNo){
			return true;
		}
		var new_send_card_log = [];
		//根据卡号删除发卡记录
		if(_send_card_log.length > 0){
			for(var i=0,len=_send_card_log.length;i<len;i++){
				if(_send_card_log[i].cardNo != cardNo){
					new_send_card_log.push(_send_card_log[i]);
				}
			}
			
			_send_card_log.length = 0;//清除数据
			if(new_send_card_log.length > 0){
				//重新复制
				for(var i=0,len=new_send_card_log.length;i<len;i++){
					_send_card_log.push(new_send_card_log[i]);
				}
			}
		}
		
		return true;
	}
	
	/**
	 * ==============获取房型房价========
	 * @param {Object} roomType 房型号
	 */
	var get_room_type_price = function(roomType){
		var price = 0;
		var roomInfos = _hotel_room_prices.roomInfos;
		for(var i=0,len=roomInfos.length;i<len;i++){
			if(roomType = roomInfos[i].roomTypeId){
				price = roomInfos[i].roomPrices[0].marketPrice;
				break;
			}
		}
		return price;
	}
	/**
	 * ==================获取房型名=============
	 * @param {Object} roomType
	 */
	var get_roomtype_name = function(roomType){
		var name = "";
		var roomInfos = _hotel_room_prices.roomInfos;
		for(var i=0,len=roomInfos.length;i<len;i++){
			if(roomType = roomInfos[i].roomTypeId){
				name = roomInfos[i].roomTypeName;
				break;
			}
		}
		return name;
	}
	
	/**
	 * ==========根据房卡号查订单信息=========
	 * @param {Object} cardNo
	 */
	var get_order_by_carNo = function(cardNo){
		var orderId = null;
		var res = null;
		if(!cardNo){
			return null;
		}
		if(_send_card_log.length > 0){
			for(var i=0,len=_send_card_log.length;i<len;i++){
				if(cardNo == _send_card_log[i].cardNo){
					orderId = _send_card_log[i].orderId;
					break;
				}
			}
		}
		if(null != orderId){
			var order = get_order_by_orderId(orderId);
			if(order){
				var orders = [];
				orders.push(order);
				res = {"isCheckedOut":0,"recOrders":orders};
			}else{
				//已退房
				res = {"isCheckedOut":1,"recOrders":orders};
			}
		}
		return res;
	}
	
	/**
	 * ============判断订单是否账平==========
	 * @param {Object} orderId
	 */
	var is_bill_balance = function(orderId){
		var debitTotal = 0;//房费总额
		var creditTotal= 0;//消费总额
		var order = get_order_by_orderId(orderId);
		if(!order){
			return false;
		}
		if(order.checkOutTime){
			var checkoutTime = new Date(order.checkOutTime).getTime();
			var nowTime = new Date().getTime();
			if(nowTime > checkoutTime){//超过退房时间，账不平
			    return false;
			}
		}
		
		if(_order_bills_list.length > 0){
			var allBills = null;
			for(var i=0,len=_order_bills_list.length;i<len;i++){
				if(_order_bills_list[i].reservationId == orderId){
					allBills = _order_bills_list[i].billItems;
					break;
				}
			}
			if(null != allBills && allBills.length > 0){
				for(var i=0,len=allBills.length;i<len;i++){
					if(allBills[i].isCreditOrDebit == 1){
						//房费
						debitTotal = debitTotal + allBills[i].price;
					}else{
						//支付费用
						creditTotal = creditTotal + allBills[i].price;
					}
				}
			}
		}
		var res = false;
		var minusTotal = creditTotal - debitTotal;
		if(debitTotal > 0 && minusTotal == 0){
			//账平
			res = true;
		}
		return res;
	}
	
	/**
	 * ==========新增发卡记录=========
	 * @param {Object} orderId
	 * @param {Object} cardNo
	 */
	var add_send_card_log = function(orderId,cardNo){
		var send_card_data = {"orderId":orderId,"cardNo":cardNo};
		_send_card_log.push(send_card_data);
		return true;
	}
	/**
	 * =============获取已入住的订单房间==============
	 */
	var get_checkin_rooms = function(){
		var roomsInfo = "";
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationStatus == 1){
					//已入住订单
					roomsInfo += _order_list[i].assignInfos[0].roomNo+",";
				}
				
			}
		}
		return roomsInfo;
	}
	
	/**
	 * =============更新订单为已经支付=============
	 * @param {Object} orderId
	 * @param {Object} payFee   支付金额
	 */
	var update_order_pay_status = function(orderId,payFee){
		var order = null;
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationId == orderId){
					_order_list[i].payOk=1;
					if(payFee){
						_order_list[i].totalPayPrice = _order_list[i].totalPayPrice+payFee;
					}
					order=_order_list[i];
					break;
				}
				
			}
		}
	}
	
	/**
	 * ===============换房=================
	 * @param {Object} roomNo 要换的新房间号
	 * @param {Object} orderId  订单号
	 */
	var assign_room = function(roomNo,orderId){
		var res = false;
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationId == orderId){
					_order_list[i].assignInfos[0].roomNo = roomNo;
					res = true;
					break;
				}
				
			}
		}
		return res;
	}
	
	/**
	 * ================续住，修改订单退房时间==============
	 * @param {Object} orderId
	 * @param {Object} dayCount
	 */
	var keep_occupancy = function(orderId,dayCount){
		var res = false;
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationId == orderId){
					var spanTime= dayCount * 24*60*60*1000;
					var day1 = new Date(_order_list[i].checkOutTime);
					day1.setTime(day1.getTime()+spanTime);
					var newTime = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate()+" 14:00:00";
					_order_list[i].checkOutTime = newTime;
					break;
				}
				
			}
		}
		return true;
	}
	
	/**
	 * ============根据订单号查订单信息=========
	 * @param {Object} orderId
	 */
	var get_order_by_orderId = function(orderId){
		var order = null;
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationId == orderId){
					order=_order_list[i];
					break;
				}
				
			}
		}
		
		return order;
	}
	
	/** 
	 * ===========添加账务信息======
	 * @param {Object} isAddRoomFee 是否添加房费，false:添加客户付款账务，true:添加一笔房费
	 * @param {Object} billInfo 主要是现金支付信息
	 * @param {Object} orderId 订单号
	 */
	var add_order_bill = function(isAddRoomFee,orderId,billInfo){
		var isNewBill = true;//是否是添加新账单记录（查不到订单账单信息）
		var bill = null;
		var payFee = 0;
		var order = get_order_by_orderId(orderId);
		if(!order){
			return false;
		}
		
		var orderTotalPrice = order.totalPrice;
		
		if(!isAddRoomFee){
			//添加客户付款账务
			payFee = billInfo.totalPrice;
			bill = {
						"trnCode":""+get_random_no(10000,99999),
						"price":payFee,
						"quantity":1,
						"currencyCode":"￥",
						"currency":"CNY",
						"checkNo":"1",
						"description":"人民币现金",
						"isCreditOrDebit":0,
						"date":new Date().format("d-M-yy"),
						"time":new Date().format("h:m:s")
					}
		}else{
			//添加房费
			payFee = order.totalPrice/order.daysCnt;
			bill = {
						"trnCode":""+get_random_no(10000,99999),
						"price":payFee,
						"quantity":1,
						"currencyCode":"￥",
						"currency":"CNY",
						"checkNo":"1",
						"description":"稽核房费",
						"isCreditOrDebit":1,
						"date":new Date().format("dd-MM-yy"),
						"time":new Date().format("hh:mm:ss")
					}
		}
		if(_order_bills_list.length > 0){
			for(var i=0,len=_order_bills_list.length;i<len;i++){
				if(_order_bills_list[i].reservationId == orderId){
					isNewBill = false;
				}
				if(!isNewBill){
					//存在账单
					bill.checkNo=_order_bills_list[i].billItems.length + 1;
					_order_bills_list[i].billItems.push(bill);
					if(!isAddRoomFee){
						//添加客户付款账务
						_order_bills_list[i].totalPayedFee = _order_bills_list[i].totalPayedFee+bill.price;
						var needPay = _order_bills_list[i].totalNeedPayFee - bill.price;
						if(needPay < 0){
							needPay = 0
						}
						_order_bills_list[i].totalNeedPayFee = needPay;
						//更新订单支付状态
						update_order_pay_status(orderId,bill.price);
					}else{
						//房费
						_order_bills_list[i].totalConsumeFee = _order_bills_list[i].totalConsumeFee+bill.price;
					}
					break;
				}
			}
		}
		if(isNewBill){
			//新账单
			var roomNo = order.assignInfos && order.assignInfos.length>0?order.assignInfos[0].roomNo:"";
			var payFee = 0;//已支付金额
			var consumeFee = 0;//房费
			var totalNeedPay = orderTotalPrice;
			if(isAddRoomFee){
				//加收房费
				consumeFee = bill.price;
			}else{
				//收款入账
				payFee = bill.price;
				totalNeedPay = totalNeedPay - payFee;
			}
			var newBill = {
				"hotelId":order.hotelId,
				"isBalance":0,
				"hotelName":"测试酒店",
				"arrvie":order.checkInTime,
				"departure":order.checkOutTime,
				"today":new Date().format("yyyy-MM-dd"),
				"roomNo":roomNo,
				"reservationId":order.reservationId,
				"guestName":order.fullName,
				"totalPreAuthPayFee":0,
				"totalPayedFee":payFee,
				"totalConsumeFee":consumeFee,
				"totalNeedPayFee":totalNeedPay,
				"billItems":[]
			};
			newBill.billItems.push(bill);
			_order_bills_list.push(newBill);
			if(!isAddRoomFee){
				//入账
				//更新订单支付状态
				update_order_pay_status(orderId,bill.price);
			}
		}
		
		return true;
	}
	
	/**
	 * ==============查询订单的账单信息============
	 * @param {Object} orderId
	 */
	var get_order_bills = function(orderId){
		var res = null;
		if(_order_bills_list.length > 0){
			for(var i=0,len=_order_bills_list.length;i<len;i++){
				if(_order_bills_list[i].reservationId == orderId){
					res = _order_bills_list[i];
					break;
				}
			}
		}
		return res;
	}
	
	/**
	 * ================获取可用房信息,过滤订单入住的房间==========
	 * @param {Object} roomType
	 */
	var get_useabel_rooms = function(roomType){
		var result=null;
		var useabel_rooms = _valid_rooms[roomType];
		//已入住房间
		var live_rooms = get_checkin_rooms();
		if("" != live_rooms && useabel_rooms){
			//过滤已入住房间
			var halls = useabel_rooms.halls;
			var new_floors = [],new_halls = [];
			for(var i=0,len=halls.length;i<len;i++){
				var floors = halls[i].floors;//楼层
				var roomCount = 0;
				for(var j=0,len2=floors.length;j<len2;j++){
					var rooms = floors[j].rooms;//房间
					var new_rooms = [];
					var new_floor = floors[j];
					for(var ij=0,len3=rooms.length;ij<len3;ij++){
						if(live_rooms.indexOf(rooms[ij].chamberNumber) == -1){
							//房间没入住
							new_rooms.push(rooms[ij]);
							roomCount += 1;
						}
					}
					if(new_rooms.length > 0){
						new_floor.rooms = new_rooms;
						new_floors.push(new_floor);
					}
				}
				if(new_floors.length>0){
					var hall = {
						"usableMinCount": roomCount,
						"hallID": halls[i].hallID,
						"hallName": halls[i].hallName,
						"floors":new_floors
					}
					//hall.push(new_floors);
					new_halls.push(hall);
				}
			}
			result = {
				"halls":new_halls
			}
		}else{
			result = useabel_rooms;
		}
		return result;
	}
	
	/**
	 * =============获取推荐房========
	 * @param {Object} roomTypeId 
	 */
	var get_recommand_room = function(roomTypeId){
		var roomNo = "";
		var useabel_rooms = get_useabel_rooms(roomTypeId);
		var hall = useabel_rooms.halls[0];
		if(hall && hall.floors.length > 0){
			var floor = hall.floors[0];
			if(floor && floor.rooms.length> 0){
				roomNo = floor.rooms[0].chamberNumber;
			}
		}
		return roomNo;
	}
	
	/**
	 * ===========获取房价牌信息===================
	 */
	var get_rooms_price = function(){
		for(var i=0,len=_hotel_room_prices.roomInfos.length;i<len;i++){
			var roomTypeId = _hotel_room_prices.roomInfos[i].roomTypeId;
			//获取可用房
			var recommandRoomNo = get_recommand_room(roomTypeId);
			_hotel_room_prices.roomInfos[i].chamberNumber = recommandRoomNo;
		}
		return _hotel_room_prices;
	}
	
	/**
	 * ========获取随机数=====
	 * @param {Object} m
	 * @param {Object} n
	 */
	function get_random_no(m,n){
	　　var num = Math.floor(Math.random()*(m - n) + n);
	    return num;
	}
	
	/**
	 * ============根据身份号或姓名查预订单信息=========
	 * @param {Object} idNo
	 */
	var get_live_orders = function(idNo){
		var orders = [];
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				var isHas = false;
				if(_order_list[i].reservationStatus==1){
					isHas = true;
				}
				if(isHas){//预订人查不到，查在住人
					var liveGuests = _order_list[i].liveGuests;
					if(liveGuests && liveGuests.length > 0){
						//查询在住人
						for(var j=0,len2=liveGuests.length;j<len2;j++){
							if(idNo == liveGuests[j].idNo){
								orders.push(_order_list[i]);
							}
						}
					}
				}
				
			}
		}
		
		return orders;
	}
	
	/**
	 * ============根据身份号或姓名查预订单信息=========
	 * @param {Object} orderId
	 */
	var get_res_orders = function(idNo,name){
		var orders = [];
		if(_order_list && _order_list.length > 0){
			for(var i=0,len=_order_list.length;i<len;i++){
				if(_order_list[i].reservationStatus==0 && _order_list[i].fullName == name){
					orders.push(_order_list[i]);
				}
			}
		}
		return orders;
	}
	
	/**
	 * ======添加同住人===========
	 * @param {Object} checkinReq
	 */
	var add_checkin_person = function(checkinReq){
		var res ={"isSuccess":true,"data":null,"msg":""};
		var isOk = false;
		var order = null;
		if(checkinReq){
			var orderId = checkinReq.reservationId;
			var idNo = checkinReq.idNo;
			
			if(!_order_list || _order_list.length == 0){
				//订单不存在
				res.msg = "订单不存在";
				res.isSuccess=false;
				return res;
			}
		    var persons = checkinReq.shares;
			if(!persons || persons.length == 0){
				return res;
			}
			
			for(var i=0,len=persons.length;i<len;i++){
				var idNo = persons[i].strIdCode;
				var idName = persons[i].strName;
				for(var i=0,len=_order_list.length;i<len;i++){
					var is_continue = false;
					//订单是否存在
					if(_order_list[i].reservationId == orderId){
						is_continue = true;
					}
					var liveGuests = _order_list[i].liveGuests;
					if(is_continue){//是否存在入住人
					    var has_live = false;
						if(liveGuests && liveGuests.length > 0){
							//查询在住人
							for(var j=0,len2=liveGuests.length;j<len2;j++){
								//已存在在住人
								if(liveGuests[j].idNo && idNo == liveGuests[j].idNo){
									has_live = true;
									break;
								}
							}
						}else{
							 _order_list[i].liveGuests = [];
						}
						if(!has_live){
							var guest = {
								"idNo":idNo,
								"idName":idName
							}
							_order_list[i].liveGuests.push(guest);
						}else{
							//订单不存在
							res.msg = "入住人存在";
							res.isSuccess=false;
							return res;
						}
						var data = {
							"hotelId":_order_list[i].hotelId,
						    "reservationId":_order_list[i].reservationId,
							"accountNo":_order_list[i].accountNo,
							"roomNo":"0517",
							"pay_money":"0.0",
							"money":_order_list[i].totalPrice,
							"rsvno":_order_list[i].reservationId,"msg":"入住成功"};
						res.data = data;
						res.isSuccess=true;
						//加收房费
						break;
					}else{
						//订单不存在
						res.msg = "订单不存在";
						res.isSuccess=false;
					}
					
				}
			}
		}else{
			res.msg = "入住人信息有误";
			res.isSuccess=false;
		}
		
		return res;
	}
	
	/**
	 * ============入住===============
	 * @param {Object} checkinReq
	 */
	var checkin = function(checkinReq){
		var res ={"isSuccess":true,"data":null,"msg":""};
		var isOk = false;
		var order = null;
		if(checkinReq){
			var orderId = checkinReq.reservationId;
			var idNo = checkinReq.idNo;
			
			if(_order_list && _order_list.length > 0){
				for(var i=0,len=_order_list.length;i<len;i++){
					var is_continue = false;
					//订单是否存在
					if(_order_list[i].reservationId == orderId){
						is_continue = true;
					}
					var liveGuests = _order_list[i].liveGuests;
					if(is_continue){//是否存在入住人
					    var has_live = false;
						if(liveGuests && liveGuests.length > 0){
							//查询在住人
							for(var j=0,len2=liveGuests.length;j<len2;j++){
								//已存在在住人
								if(liveGuests[j].idNo && idNo == liveGuests[j].idNo){
									has_live = true;
									break;
								}
							}
						}else{
							 _order_list[i].liveGuests = [];
							 //首次入住，加收房费
							 add_order_bill(true,orderId);
						}
						if(!has_live){
							var guest = {
								"idNo":idNo,
								"idName":checkinReq.idName
							}
							_order_list[i].liveGuests.push(guest);
							_order_list[i].reservationStatus=1;
						}
						var data = {
							"hotelId":_order_list[i].hotelId,
						    "reservationId":_order_list[i].reservationId,
							"accountNo":_order_list[i].accountNo,
							"roomNo":"0517",
							"pay_money":"0.0",
							"money":_order_list[i].totalPrice,
							"rsvno":_order_list[i].reservationId,"msg":"入住成功"};
						res.data = data;
						res.isSuccess=true;
						//加收房费
						break;
					}else{
						//订单不存在
						res.msg = "订单不存在";
						res.isSuccess=false;
					}
					
				}
			}else{
				//订单不存在
				res.msg = "订单不存在";
				res.isSuccess=false;
			}
			var persons = checkinReq.shares;
			if(persons && persons.length > 0){
				//添加同住人
				add_checkin_person(checkinReq);
			}
		}else{
			res.msg = "入住人信息有误";
			res.isSuccess=false;
		}
		return res;
	}
	
	/**
	 * ==============新增订单记录==================
	 * @param {Object} createOrderReq
	 */
	var add_order_to_list = function(createOrderReq){
		//{\"hotelId\":\"H000015\",\"daysCount\":1,\"roomTypeId\":\"1GK\",\"rateCode\":\"WKI\",\"roomNo\":\"0317\",\"linkMobile\":\"18963309178\",\"identityCardEntity\":{\"strName\":\"冯兵\",\"strSex\":\"男\",\"sex\":0,\"strNationCode\":\"01\",\"strNation\":\"汉\",\"strBirth\":\"1992/12/27\",\"strAddr\":\"山东省临朐县沂山镇胜利村31号\",\"strIdCode\":\"370724199212275174\",\"strIssue\":\"\",\"strBeginDate\":\"20190107\",\"strEndDate\":\"20390107\",\"strUid\":\"\"}}
		
			var od = order();
			od.baseRate = 0;
			var checkinTime = new Date().format("yyyy/MM/dd");
			var checkOutTime = get_special_day(createOrderReq.daysCount).format("yyyy/MM/dd");
			od.checkInTime = checkinTime;
			od.checkOutTime = checkOutTime;
			od.confirmationNo = get_random_no(10000,99999);
			od.currencyCode = "￥";
			od.currency = "CNY";
			od.firstName = createOrderReq.identityCardEntity.strName;
			od.fullName = createOrderReq.identityCardEntity.strName;
			od.daysCnt = createOrderReq.daysCount;
			od.hotelId = createOrderReq.hotelId;
			od.isChooseRoom = 0;
			od.isDeposit = 0;
			od.lastName = createOrderReq.identityCardEntity.strName;
			od.linkMobile = createOrderReq.linkMobile;
			od.payOk = 0;
			od.rateSecret = 0;
			od.reservationId = CHUtil.get_unit_sn();
			od.reservationStatus = 0;
			od.accountNo = get_random_no(1000,9999);
			var assignInfos = [];
			var rooms = [];
			var roomCnt = 1;
			if(createOrderReq.roomNo && "" != createOrderReq.roomNo){
				assignInfos = [{
					"roomNo":createOrderReq.roomNo
				}];
				rooms.push(createOrderReq.roomNo);
			}
			od.assignInfos = assignInfos;
			
			var totalPrice = get_room_type_price(createOrderReq.roomTypeId) * od.daysCnt;
			od.totalPrice = totalPrice*100;
			
			od.totalNeedToPayPrice = totalPrice*100;
			od.roomCnt = roomCnt;
			od.roomNos = rooms;
			od.roomTypeId = createOrderReq.roomTypeId;
			od.roomTypeName = get_roomtype_name(createOrderReq.roomTypeId);
			od.liveGuests = [];
			_order_list.push(od);
			return {"hotelId":od.hotelId,"reservationId":od.reservationId,"accountNo":od.accountNo};
	}
	return{
		"hotel_room_prices":get_rooms_price,
		"get_useabel_rooms":get_useabel_rooms,
		"checkin":checkin,
		"add_order_bill":add_order_bill,
		"add_order_to_list":add_order_to_list,
		"get_order_by_orderId":get_order_by_orderId,
		"get_order_bills":get_order_bills,
		"get_res_orders":get_res_orders,
		"get_live_orders":get_live_orders,
		"get_order_by_carNo":get_order_by_carNo,
		"add_send_card_log":add_send_card_log,
		"get_recommand_room":get_recommand_room,
		"is_bill_balance":is_bill_balance,
		"check_out":check_out,
		"keep_occupancy":keep_occupancy,
		"assign_room":assign_room
	}
})();

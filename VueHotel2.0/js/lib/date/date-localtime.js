var showtime=false;
var showtime_flag="&nbsp;";

function getLocaleDate(objD){
	var str, fonthead, fontfoot;
	var localTime = objD.getTime();
  var localOffset=objD.getTimezoneOffset()*60000;   //getTimezoneOffset()返回是以分钟为单位，需要转化成ms
  var utc = localTime + localOffset;
  offset =9; //以韩国时间为例，东9区
  korean= utc + (3600000*offset)-3600000;
  objD = new Date(korean);
  
	var yy = objD.getYear();
	if(yy < 1900) yy = yy + 1900;
	var MM = objD.getMonth() + 1;
	if(MM < 10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd < 10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh < 10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm < 10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss < 10) ss = '0' + ss;
	var ww = objD.getDay();
	
	if(ww == 0) ww = _locate_message.common_tip.COMMON_MSG_020;//"周日";
	if(ww == 1) ww = _locate_message.common_tip.COMMON_MSG_014;//"周一";
	if(ww == 2) ww = _locate_message.common_tip.COMMON_MSG_015;//"周二";
	if(ww == 3) ww = _locate_message.common_tip.COMMON_MSG_016;//"周三";
	if(ww == 4) ww = _locate_message.common_tip.COMMON_MSG_017;//"周四";
	if(ww == 5) ww = _locate_message.common_tip.COMMON_MSG_018;//"周五";
	if(ww == 6) ww = _locate_message.common_tip.COMMON_MSG_019;//"周六";
	
// 	if(ww == 0) ww = "周日";
// 	if(ww == 1) ww = "周一";
// 	if(ww == 2) ww = "周二";
// 	if(ww == 3) ww = "周三";
// 	if(ww == 4) ww = "周四";
// 	if(ww == 5) ww = "周五";
// 	if(ww == 6) ww = "周六";
	
	if(showtime)
	{
		showtime_flag=" ";
		showtime=false;
	}else{
		showtime_flag=":";
		showtime=true;
	}
	var timedes = '<div  class="txt-localtime-1 color-header-black"><span class="txt-localtime-time">'+hh+showtime_flag+mm+'</span>&nbsp;&nbsp;'+MM+_locate_message.common_tip.COMMON_MSG_012+dd+_locate_message.common_tip.COMMON_MSG_013+'&nbsp;&nbsp;'+ww+'';
	return {
		"hh":hh,
		"mm":mm,
		"MM":MM,
		"dd":dd,
		"ww":ww,
		"timedes":timedes,
		"month_text":_locate_message.common_tip.COMMON_MSG_012,
		"day_text":_locate_message.common_tip.COMMON_MSG_013,
		"showtime_flag":showtime_flag
	};
}

function showLocale(objD) {
//	var str, fonthead, fontfoot;
//	var localTime = objD.getTime();
//var localOffset=objD.getTimezoneOffset()*60000;   //getTimezoneOffset()返回是以分钟为单位，需要转化成ms
//var utc = localTime + localOffset;
//offset =9; //以韩国时间为例，东9区
//korean= utc + (3600000*offset)-3600000;
//objD = new Date(korean);
//
//	var yy = objD.getYear();
//	if(yy < 1900) yy = yy + 1900;
//	var MM = objD.getMonth() + 1;
//	if(MM < 10) MM = '0' + MM;
//	var dd = objD.getDate();
//	if(dd < 10) dd = '0' + dd;
//	var hh = objD.getHours();
//	if(hh < 10) hh = '0' + hh;
//	var mm = objD.getMinutes();
//	if(mm < 10) mm = '0' + mm;
//	var ss = objD.getSeconds();
//	if(ss < 10) ss = '0' + ss;
//	var ww = objD.getDay();
//	
//	
//	fonthead = "<span class='txt-localtime-time'>";
//	
//	fontfoot = "</span>"
//	
//	if(ww == 0) ww = _locate_message.common_tip.COMMON_MSG_020;//"周日";
//	if(ww == 1) ww = _locate_message.common_tip.COMMON_MSG_014;//"周一";
//	if(ww == 2) ww = _locate_message.common_tip.COMMON_MSG_015;//"周二";
//	if(ww == 3) ww = _locate_message.common_tip.COMMON_MSG_016;//"周三";
//	if(ww == 4) ww = _locate_message.common_tip.COMMON_MSG_017;//"周四";
//	if(ww == 5) ww = _locate_message.common_tip.COMMON_MSG_018;//"周五";
//	if(ww == 6) ww = _locate_message.common_tip.COMMON_MSG_019;//"周六";
//	
//	if(showtime)
//	{
//		showtime_flag="&nbsp;";
//		showtime=false;
//	}else{
//		showtime_flag=":";
//		showtime=true;
//	}
//	
//	str = fonthead + hh + showtime_flag + mm + fontfoot + "&nbsp;&nbsp;" + MM + "月" + dd + "日" + "&nbsp;&nbsp;" + ww ;
//	
//	//str = colorhead + yy + "年" + MM + "月" + dd + "日" + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
//	return str;
}


Date.prototype.format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * =============获取指定日期
 * @param {Object} dayCount 距离当前时间前后天数，负数为今天以前日期，正数为今天以后的日期，0为当前日期
 */
function get_special_day(dayCount){
	var spanTime= dayCount * 24*60*60*1000;
	var day1 = new Date();
	day1.setTime(day1.getTime()+spanTime);
	//var s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
	return day1;
}


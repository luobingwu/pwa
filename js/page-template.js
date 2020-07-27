/**
 * =====================引导页模板===============================
 */
_tpl_index_html = '<div class="dk-page index-page-bg">'+
    '<div class="dk-page-main">'+
'<div class="dk-header">'+
'         <div class="top-jump">'+
'         	<a @touchend="to_home_p()" style="color:red;">跳转首页({{page_time_count}})&nbsp;>></a>'+
'	      </div>'+
'   </div>'+
'	        <div class="dk-wc-content" style="">'+
'	        	<div class="">欢迎使用自助机</div>'+
'	        </div>'+
'      <div class="dk-footer"><div style="position: absolute;width: 100%;text-align: center;bottom: 1rem;font-size: 1rem;">bizurl:{{bizurl}},  hotel:{{hotelName}}({{hotelId}})</div></div>'+
    '   </div>'+
    '</div>';

/**
 * =====================首页模板===============================
 */
_tpl_home_html = '<div class="dk-page home-page-bg2">'+
    '<div class="dk-page-main">'+
'<div v-if="SHOW_WS_LOG" style="background-color:#000000;color:#ffffff;overflow:auto;width:30%;z-index:99;height:90%;position:relative;"><div style="background-color:#000000;color:#ffffff;width:100%;overflow:auto;"><button style="position:absolute;left:0;top:0;width: 5rem;height: 1.5rem;font-size: 1rem;" @touchend="clear_log()">清除</button><div style="margin-top:2rem;font-size:0.7rem;width:100%;height:90%;overflow:auto;"  v-html="ws_log_info_str"></div></div></div>'+
'<div class="dk-header">'+
'       <div class="dk-header-time-top" v-html="localeTime.timedes"></div>'+
'         <div class="top-languge">'+
'         	<div @touchend="change_language(\'cn\');" :class ="current_language == \'cn\' ?\'on_lan\':\'\'">中</div>'+
'         	<div @touchend="change_language(\'en\');" :class ="current_language == \'en\' ?\'on_lan\':\'\'">En</div>'+
'	      </div>'+
'   </div>'+
'   <div class="card home-box-content box-center">'+
'	        <div class="home-logo-img" @touchstart="touch_start()" @touchend="touch_end()"><div>{{COMMON_MSG_021}}</div><div>{{HOTEL_NAME}}</div></div>'+
'	        <div class="home-btns">'+
//'	        	<div class="home-btn">'+
'	        	    <button class="common-btn11" @touchend="to_checkin();">{{BTN_MSG_005}}</button>'+
//'	        	</div>'+
//'	        	<div class="home-btn">'+
'	        	    <button class="common-btn10" @touchend="check_out();" style="margin-left: 1rem;">{{BTN_MSG_006}}</button>'+
//'	        	</div>'+
// '	        	<div class="home-btn">'+
// '	        	    <button class="common-btn3" @touchend="keeo_room();" style="left: -3rem;font-size:36px;">{{BTN_MSG_007}}</button>'+
// '	        	</div>'+
'	        	'+
'	        </div>'+
'	        <div class="home-brand-icon" @touchstart="touch_start()" @touchend="touch_end()"></div>'+
'      </div>'+
'      <div class="dk-footer">'+
'          <div style="color: #bdbbb6;position: absolute;bottom: 0.5rem;font-size: 0.9rem;padding: 0.5rem 0;width: 100%;text-align:center;">{{COMMON_MSG_022}}</div>'+
//'          <div style="color: #bdbbb6;position: absolute;bottom: 0.5rem;font-size: 0.9rem;padding: 0.5rem;right: 1rem;">{{appVersion}}</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================测试页面================================
 */

_tpl_test_1_html2 =  '<div>'+
'     <div class="test-left">'+
'			<ul>'+
'				<li :class="{\'dev-on\':SHOW_CARD}" @click="change_dev(\'CARD_MACHINE\')">发卡机</li>'+
'				<li :class="{\'dev-on\':SHOW_IDCARD}" @click="change_dev(\'IDCARD\')">身份证</li>'+
'				<li :class="{\'dev-on\':SHOW_PRINT}" @click="change_dev(\'PRINTER\')">小票打印</li>'+
'				<li :class="{\'dev-on\':SHOW_QRCODE}" @click="change_dev(\'QRCODE\')">二维码</li>'+
'				<li :class="{\'dev-on\':SHOW_FLASH}" @click="change_dev(\'FLASH\')">闪光灯</li>'+
'				<li :class="{\'dev-on\':SHOW_FACEDETE}" @click="change_dev(\'FACEDETE\')">人脸识别</li>'+
'				<li :class="{\'dev-on\':SHOW_APP_SETTING}" @click="change_dev(\'APP_SETTING\')">APP设值</li>'+
'				<li :class="{\'dev-on\':SHOW_TOUCH}" @click="change_dev(\'TOUCH\')">触屏事件</li>'+
'				<li  @click="test_screen()">屏幕测试</li>'+
'				<li  @click="go_back()">返回</li>'+
'			</ul>'+
'		</div>'+
'		<div class="test-right">'+
'			<div class="test-top" >'+
'				<div class="test-top-panel" v-show="SHOW_CARD">'+
'					<select value="devInfo.dev_method" v-model="devInfo.dev_method">'+
'						<option class="" value="status">获取卡机状态</option>'+
'						<option class="" value="send_card">发卡</option>'+
'						<option class="" value="fake_send_card">发一张空卡</option>'+
'						<option class="" value="receive_card">回收卡</option>'+
'						<option value="receive_card_to_creceiveardbox">移至卡槽</option>'+
'						<option value="move_card_to_mouth">移至卡嘴</option>'+
'						<option value="read_card">读卡</option>'+
'						<option value="checkout_card">注销卡</option>'+
'					</select>'+
'				</div>'+
'			    <div class="test-top-panel" v-show="SHOW_IDCARD">'+
'					<select value="devInfo.dev_method" v-model="devInfo.dev_method">'+
'						<option class="" value="scan">扫描ID</option>'+
'						<option class="" value="stop">停止扫描ID</option>'+
'						<option class="" value="m1_scan">扫描M1</option>'+
'						<option class="" value="m1_stop">停止扫描M1</option>'+
'					</select>'+
'				</div>'+
'				<div class="test-top-panel-1" v-show="SHOW_PRINT">'+
'					<select id="p-2" value="devInfo.dev_method" v-model="devInfo.dev_method">'+
'						<option class="" value="is_out_paper">是否缺纸</option>'+
'						<option class="" value="print_string">字符串打印</option>'+
'						<option class="" value="print_xml">XML打印</option>'+
'					</select>'+
'					<select id="p-1" value="devInfo.printType" v-model="devInfo.printType">'+
'						<option class="" value="PRINTER">嵌入式</option>'+
'						<option class="" value="PRINTER_YL">桌面</option>'+
'					</select>'+
'				</div>'+
'				<div class="test-top-panel" v-show="SHOW_QRCODE">'+
'					<select value="devInfo.dev_method"v-model="devInfo.dev_method">'+
'						<option class="" value="scan">扫描</option>'+
'						<option class="" value="stop">停止扫描</option>'+
'					</select>'+
'				</div>'+
'				<div class="test-top-panel" v-show="SHOW_FLASH">'+
'					<select value="devInfo.dev_method"v-model="devInfo.dev_method">'+
'						<option class="" value="close">补光灯关闭</option>'+
'						<option class="" value="open">补光灯打开</option>'+
'					</select>'+
'				</div>'+
'				<div class="test-top-panel"><span>时间间隔(ms)：</span><input type="text" value="devInfo.ex_timspan"v-model="devInfo.ex_timspan" class="test-timespan"/></div>'+
'				<div class="test-top-panel"><span>调用次数：</span><input type="text" value="devInfo.ex_count"v-model="devInfo.ex_count" class="test-count"/></div>'+
'				<div class="test-top-panel" style="margin-left: 3rem;">'+
'					<button class="" @click="startExcute();">开始</button>'+
'					<button class="" @click="stopExcuteTimer();">停止</button>'+
'					<button class="" @click="clear();">清空</button>'+
'				</div>'+
'		    </div>'+
'			<div class="test-top" v-show="SHOW_FACEDETE">'+
'				<div class="test-top-panel" style="margin-left: 3rem;">'+
'					<button class="" @click="start_to_face_detetect();">开始人脸</button>'+
'					<button class="" @click="clear();">清空</button>'+
'				</div>'+
'			</div>'+
'			<div class="test-top" v-show="SHOW_APP_SETTING">'+
'				<div class="test-top-panel"><span>APP更新地址：</span><input type="text" ng-value="devInfo.keyAppUpUrl"v-model="devInfo.keyAppUpUrl" style="width: 10rem!important;"/></div>'+
'				<div class="test-top-panel"><span>APP云端地址：</span><input type="text" ng-value="devInfo.keyAppCloudUrl"v-model="devInfo.keyAppCloudUrl" style="width: 10rem!important;"/></div>'+
'				<div class="test-top-panel" style="margin-left: 3rem;">'+
'					<button class="" @click="save_setting();">保存</button>'+
'					<button class="" @click="clear();">清空</button>'+
'				</div>'+
'			</div>'+
'			<div v-html="ws_response" class="test-text" ></div>'+
'		</div>'+
'</div>';

/**
 * ========================设置界面================================
 */
var tpl_setting_html = '<div class="dk-page setting-page-bg">'+
    '<div class="dk-page-main">'+
'<div class="dk-header">'+
'     <div class="btn-top">'+
'        <button class="button button-assertive common-btn2 quite-black" @touchend="go_exit();">退出</button>'+
'     </div>'+
'   </div>'+
'		<div class="setting-main">'+
'			<button class="com-btn7" @touchend="select_setting(1)">重启APP</button>'+
'			<button class="com-btn7" @touchend="select_setting(7)">清除缓存</button>'+
'			<button class="com-btn7" @touchend="select_setting(2)">APP应用设置</button>'+
'			<button class="com-btn7" @touchend="select_setting(3)">{{menu}}</button>'+
'			<button class="com-btn7" @touchend="select_setting(5)">系统设置</button>'+
'			<button class="com-btn7" @touchend="to_page()">驱动API测试</button>'+
'			<button class="com-btn7" @touchend="to_auto_test()">定时测试设备</button>'+
'			<button class="com-btn7" @touchend="checkVersion()">APP更新</button>'+
'			<button class="com-btn7" @touchend="sysVersion()">固件升级</button>'+
'			<button class="com-btn7" @touchend="to_set_lock()">门锁设置</button>'+
'		</div>'+
'      <div class="dk-footer">'+
'          <div class="setting-footer">设备序列号：{{devNo}}，IP：{{devIp}}，MAC：{{mac}}，WIFIIP：{{wifiIp}}，WIFIMAC：{{wifiMac}}，AndrodModel：{{androidModel}}，HotelId：{{hotelId}}，appVer：{{appVersion}}</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================设置界面================================
 */
var tpl_test_setting_html = '<div class="dk-page setting-page-bg">'+
'		<div class="setting-main" style="top:3rem;height:25rem;">'+
'			<button class="com-btn7-1" @touchend="select_setting(1)">重启APP</button>'+
'			<button class="com-btn7-1" @touchend="select_setting(3)">{{menu}}</button>'+
'			<button class="com-btn7-1" @touchend="select_setting(5)">系统设置</button>'+
'			<button class="com-btn7-1" @touchend="to_page()">驱动API测试</button>'+
'			<button class="com-btn7-1" @touchend="to_auto_test()">定时测试设备</button>'+
'			<button class="com-btn7-1" @touchend="sysVersion()">固件升级</button>'+
'			<button class="com-btn7-1" @touchend="to_set_lock()">门锁设置</button>'+
'		</div>'+
// '      <div class="dk-footer">'+
// '      </div>'+
'</div>';

/**
 * ========================门锁设置界面================================
 */
var tpl_lock_setting_html = '<div class="dk-page setting-page-bg">'+
    '<div class="dk-page-main">'+
'<div class="dk-header">'+
'      <div class="btn-top">'+
'		    <button class="button button-balanced common-btn2 go-back-black" @touchend="go_back();">返回</button>'+
'		    <button class="button button-assertive common-btn2 quite-black" @touchend="go_exit();">退出</button>'+
'		</div>'+
'   </div>'+
'<div class="setting-sys-main">'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 11.8rem;">门锁服务端地址：</label>'+
'				<input type="text" value="lockInfo.lockServerAddr" v-model="lockInfo.lockServerAddr" placeholder="请输入云端配置地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 11.8rem;">授权应用ID号：</label>'+
'				<input type="text" value="lockInfo.lockAppID" v-model="lockInfo.lockAppID" placeholder="请输入自助机业务地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 11.8rem;">设备安装的序列号：</label>'+
'				<input type="text" value="lockInfo.machineSN" v-model="lockInfo.machineSN" placeholder="请输入监控地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 11.8rem;">酒店ID号：</label>'+
'				<input type="text" value="lockInfo.hotelID" v-model="lockInfo.hotelID" placeholder="请输入驱动地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 11.8rem;">保留信息：</label>'+
'				<input type="text" value="lockInfo.reservation" v-model="lockInfo.reservation" placeholder="" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 11.8rem;">选择门锁：</label>'+
'				<select value="lockInfo.lockType" v-model="lockInfo.lockType" placeholder="" style="width: 68%;left: 7%;position: relative;">'+
'			        <option value="0">科新</option>'+
'			        <option value="1">必达</option>'+
'			        <option value="2">创佳</option>'+
'			        <option value="3">劲卫</option>'+
'			    </select>'+
'			</div>'+
'			<div class="" style="text-align: center;margin-top: 1rem;margin-bottom: 3rem;">'+
'			    <button class="button" @touchend="save_config_p()" style="padding: 0.3rem 2rem;">保存</button>'+
'			</div>'+
'			'+
'		</div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================系统配置设置界面================================
 */
var tpl_sys_setting_html = '<div class="dk-page setting-page-bg">'+
    '<div class="dk-page-main">'+
'<div class="dk-header">'+
'      <div class="btn-top">'+
'		    <button class="button button-balanced common-btn2 go-back-black" @touchend="go_back();">返回</button>'+
'		    <button class="button button-assertive common-btn2 quite-black" @touchend="go_exit();">退出</button>'+
'		</div>'+
'   </div>'+
'<div class="setting-sys-main">'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">开通选房：</label>'+
'				      开<input type="radio" name="opendedSelection" value="1" title="开" v-model="devInfo.opendedSelection" @change="select_event();">'+
'				      关<input type="radio" name="opendedSelection" value="0" title="关" v-model="devInfo.opendedSelection" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">打开声音：</label>'+
'				      开<input type="radio" name="isOpenSound" value="1" title="开" v-model="devInfo.isOpenSound" @change="select_event();">'+
'				      关<input type="radio" name="isOpenSound" value="0" title="关" v-model="devInfo.isOpenSound" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">人脸识别：</label>'+
'				      开<input type="radio" name="openedFaceDetect" value="1" title="开" v-model="devInfo.openedFaceDetect" @change="select_event();">'+
'				      关<input type="radio" name="openedFaceDetect" value="0" title="关" v-model="devInfo.openedFaceDetect" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">证合一验证：</label>'+
'				      开<input type="radio" name="isIca" value="1" title="开" v-model="devInfo.isIca" @change="select_event();">'+
'				      关<input type="radio" name="isIca" value="0" title="关" v-model="devInfo.isIca" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">是否弹窗：</label>'+
'				      开<input type="radio" name="popup" value="1" title="开" v-model="devInfo.popup" @change="select_event();">'+
'				      关<input type="radio" name="popup" value="0" title="关" v-model="devInfo.popup" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">POS授权卡：</label>'+
'				      开<input type="radio" name="isPosUseEmployeeCard" value="1" title="开" v-model="devInfo.isPosUseEmployeeCard" @change="select_event();">'+
'				      关<input type="radio" name="isPosUseEmployeeCard" value="0" title="关" v-model="devInfo.isPosUseEmployeeCard" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">员工卡确认：</label>'+
'				      开<input type="radio" name="opendedCardAck" value="1" title="开" v-model="devInfo.opendedCardAck" @change="select_event();">'+
'				      关<input type="radio" name="opendedCardAck" value="0" title="关" v-model="devInfo.opendedCardAck" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">人脸调试功能：</label>'+
'				      开<input type="radio" name="debug" value="1" title="开" v-model="devInfo.debug" @change="select_event();">'+
'				      关<input type="radio" name="debug" value="0" title="关" v-model="devInfo.debug" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">版本切换：</label>'+
'				      线上版<input type="radio" name="openedOnlineVersion" value="1" title="线上版" v-model="devInfo.openedOnlineVersion" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				      演示版<input type="radio" name="openedOnlineVersion" value="0" title="演示版" v-model="devInfo.openedOnlineVersion" @change="select_event();">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">页面调试功能：</label>'+
'				      开<input type="radio" name="debugPage" value="1" title="开" v-model="devInfo.debugPage" @change="select_event();">'+
'				      关<input type="radio" name="debugPage" value="0" title="关" v-model="devInfo.debugPage" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">语音播报：</label>'+
'				      开<input type="radio" name="isDemo" value="1" title="开" v-model="devInfo.isDemo" @change="select_event();">'+
'				      关<input type="radio" name="isDemo" value="0" title="关" v-model="devInfo.isDemo" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">跳过人脸授权：</label>'+
'				      开<input type="radio" name="isEmployeeCardSkipFaceRecognize" value="1" title="开" v-model="devInfo.isEmployeeCardSkipFaceRecognize" @change="select_event();">'+
'				      关<input type="radio" name="isEmployeeCardSkipFaceRecognize" value="0" title="关" v-model="devInfo.isEmployeeCardSkipFaceRecognize" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">上传人脸：</label>'+
'				      开<input type="radio" name="uploadFaceInfo" value="1" title="开" v-model="devInfo.uploadFaceInfo" @change="select_event();">'+
'				      关<input type="radio" name="uploadFaceInfo" value="0" title="关" v-model="devInfo.uploadFaceInfo" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">发房卡：</label>'+
'				      开<input type="radio" name="isSendCard" value="1" title="开" v-model="devInfo.isSendCard" @change="select_event();">'+
'				      关<input type="radio" name="isSendCard" value="0" title="关" v-model="devInfo.isSendCard" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">公安上传：</label>'+
'				      开<input type="radio" name="openedUploadPolice" value="1" title="开" v-model="devInfo.openedUploadPolice" @change="select_event();">'+
'				      关<input type="radio" name="openedUploadPolice" value="0" title="关" v-model="devInfo.openedUploadPolice" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'					<input type="text" value="devInfo.remotePoliceUploadUrl" v-model="devInfo.remotePoliceUploadUrl" placeholder="请输入公安上传地址" style="width: 95%;"/>'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">手机开门：</label>'+
'				      开<input type="radio" name="openedWxApplet" value="1" title="开" v-model="devInfo.openedWxApplet" @change="select_event();">'+
'				      关<input type="radio" name="openedWxApplet" value="0" title="关" v-model="devInfo.openedWxApplet" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'					<input type="text" value="devInfo.wxAppletUrl" v-model="devInfo.wxAppletUrl" placeholder="请输入微信小程序" style="width: 95%;"/>'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left">'+
'				    <label class="form-label">智能客控：</label>'+
'				      开<input type="radio" name="openedItc" value="1" title="开" v-model="devInfo.openedItc" @change="select_event();">'+
'				      关<input type="radio" name="openedItc" value="0" title="关" v-model="devInfo.openedItc" @change="select_event();">'+
'				</div>'+
'				<div class="right">'+
'					<input type="text" value="devInfo.wxAppletUrl" v-model="devInfo.wxAppletUrl" placeholder="请输入微信小程序" style="width: 95%;"/>'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">云端配置地址：</label>'+
'				<input type="text" value="devInfo.remoteSettingUrl"v-model="devInfo.remoteSettingUrl" placeholder="请输入云端配置地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">自助机业务地址：</label>'+
'				<input type="text" value="devInfo.pmsBizIp" v-model="devInfo.pmsBizIp" placeholder="请输入自助机业务地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">自助机监控地址：</label>'+
'				<input type="text" value="devInfo.pmsMonitorUrl" v-model="devInfo.pmsMonitorUrl" placeholder="请输入监控地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">设备驱动地址：</label>'+
'				<input type="text" value="devInfo.devDriverIp" v-model="devInfo.devDriverIp" placeholder="请输入驱动地址" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">APP更新地址：</label>'+
'				<input type="text" value="devInfo.keyAppUpUrl" v-model="devInfo.keyAppUpUrl" placeholder="" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">APP云端地址：</label>'+
'				<input type="text" value="devInfo.keyAppCloudUrl" v-model="devInfo.keyAppCloudUrl" placeholder="" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">人脸识别相似度：</label>'+
'				<input type="text" value="devInfo.face_similar_expect"v-model="devInfo.face_similar_expect" placeholder="请输入人脸识别相似度" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">读卡机状态时间间隔（ms)：</label>'+
'				<input type="text" value="devInfo.read_card_timer_count"v-model="devInfo.read_card_timer_count" placeholder="请输入时间间隔毫秒数" style="width: 68%;left: 7%;"/>'+
'			</div>'+
'			<div class="form-item">'+
'				<label class="form-label" style="width: 10.8rem;">人脸上传验证码设置：</label>'+
'				<input type="text" value="devInfo.sensewe_valid_code"v-model="devInfo.sensewe_valid_code" placeholder="" style="width: 68%;left: 7%;"/>'+
'			</div>'+

'			<div class="" style="text-align: center;margin-top: 1rem;margin-bottom: 3rem;">'+
'			    <button class="button" @touchend="save_config_p()" style="padding: 0.3rem 2rem;">保存</button>'+
'			</div>'+
'			'+
'		</div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

var _tpl_header_com_html = ''+
'      <div v-if="SHOW_WS_LOG" style="background-color:#000000;color:#ffffff;overflow:auto;width:30%;z-index:99;height:90%;position:relative;"><div style="background-color:#000000;color:#ffffff;width:100%;overflow:auto;"><button style="position:absolute;left:0;top:0;width: 5rem;height: 1.5rem;font-size: 1rem;" @touchend="clear_log()">清除</button><div style="margin-top:2rem;font-size:0.7rem;width:100%;height:90%;overflow:auto;"  v-html="ws_log_info_str"></div></div></div>'+
'      <div class="dk-header white">'+
'        <div class="btn-top">'+
'           <div class="dk-header-time-top" v-html="localeTime.timedes"></div>'+
'           <button class="button button-balanced common-btn2 go-back-white" @touchend="go_back();">返回</button>'+
'           <button class="button button-assertive common-btn2 quite-white" @touchend="go_exit();">退出</button>'+
'        </div>'+
'      </div>';
var _tpl_header_com_no_time_html = ''+
'     <div class="dk-header white">'+
'       <div class="btn-top">'+
'           <div class="dk-header-time-top" v-html="localeTime.timedes"></div>'+
'           <button class="button button-balanced common-btn2 go-back-white" @touchend="go_back();">返回</button>'+
'           <button class="button button-assertive common-btn2 quite-white" @touchend="go_exit();">退出</button>'+
'       </div>'+
'     </div>';
/**
 * ========================证件扫描界面================================
 */
var tpl_id_scan_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
// '      <div v-if="SHOW_WS_LOG" style="background-color:#000000;color:#ffffff;overflow:auto;width:30%;z-index:99;height:90%;position:relative;"><div style="background-color:#000000;color:#ffffff;width:100%;overflow:auto;"><button style="position:absolute;left:0;top:0;width: 5rem;height: 1.5rem;font-size: 1rem;" @touchend="clear_log()">清除</button><div style="margin-top:2rem;font-size:0.7rem;width:100%;height:90%;overflow:auto;"  v-html="ws_log_info_str"></div></div></div>'+
// '      <div class="dk-header white">'+
// '        <div class="btn-top">'+
// '           <div class="dk-header-time-top" v-html="localeTime.timedes"></div>'+
// '           <button class="button button-balanced common-btn2 go-back-black" @touchend="go_back();"></button>'+
// '           <button class="button button-assertive common-btn2 quite-black" @touchend="go_exit();"></button>'+
// '        </div>'+
// '      </div>'+
_tpl_header_com_html+
'      <div class="card box-content box-center">'+
'	   	  <div class="dt-scan-top-txt">{{SCAN_MSG_5}}</div>'+
'		  <div class="scan-panel">'+
'		  	<div class="scan-area">'+
'		  		<div class="scan-img"></div>'+
'		  	</div>'+
'		  	<div class="scan-label" ng-show="showOPTips">{{scanTips}}</div>'+
'		  	<div class="scan-time-label" ng-hide="showOPTips">{{timerCout}}{{SCAN_MSG_3}}</div>'+
'		  </div>'+
'		  <div class="scan-warning-text">{{SCAN_MSG_1}}{{SCAN_MSG_2}}</div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0001}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0002}}</span>'+
'		    <span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0003}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0009}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0004}}</span>'+
'		</div>'+
'      </div>'+
'      </div>'+
'      <div v-if="showPageDebug" v-html="debugContent" style="word-break: break-word;overflow: auto;height: 92%;z-index: 100;top: 0px;position: absolute;color: red;font-size: 22px;width: 40%;background-color: rgb(190, 197, 197);"></div>'+
'</div>';

/**
 * ========================退房界面================================
 */
var tpl_checkout_html = '<div class="dk-page page-bg-01">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
// '     <div class="dk-header white">'+
// '       <div class="btn-top">'+
// '           <div class="dk-header-time-top" v-html="localeTime.timedes"></div>'+
// '           <button class="button button-balanced common-btn2 go-back-black" @touchend="go_back();"></button>'+
// '           <button class="button button-assertive common-btn2 quite-black" @touchend="go_exit();"></button>'+
// '       </div>'+
// '     </div>'+
'      <div class="card box-content box-center">'+
'	   	  <div class="dt-mc-main">'+
'		   <div class="dt-mc-item">'+
'		  	     <div class="dt-mc-text">{{INSERT_CARD_PLEASE}}</div>'+
'		  		<img src="./style/img/insert_card.gif" class="gif-card-out"/>'+
'		  	</div>'+
'		  </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0007}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0008}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================订单列表界面================================
 */
var tpl_orders_html = '<div class="dk-page home-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'          <div class="orders-warning-text dt-font-size-14">{{ORDER_TOP_MSG}}</div>'+
'		   <div class="orders-main">'+
'		       <div class="orders-left">'+
'		       	<div class="order-items">'+
'		     '+
'		       	<div class="order-item"  v-for="order in orderList">'+
'		       		<div class="dt-item-top dt-background-color">'+
'		       			<div class="dt-room-no">{{order.roomNos[0]}}</div>'+
'		       			<div class="dt-room-type">{{order.roomTypeName}}</div>'+
'		       			<div class="dt-order-date">{{order.checkInTime}}--{{order.checkOutTime}}</div>'+
'		       		</div>'+
'		       		<div class="dt-item-middle">'+
'		       			<div class="dt-left">'+
'		       				<div class="dt-label-1">{{ORDER_MSG_22}}</div>'+
'		       				<div class="dt-label-5">{{order.roomCnt}}间</div>'+
'		       				<div class="dt-label-2">{{ORDER_MSG_24}}</div>'+
'		       			</div>'+
'		       			<div class="dt-right">'+
'		       				<div class="dt-label-3" v-for="guest in order.liveGuests">{{guest.idName}}</div>'+
'		       				<div class="dt-label-4">￥{{order.totalPrice/100}}</div>'+
'		       			</div>'+
'		       		</div>'+
'		       		<div class="dt-item-bottom">'+
'		       				<button v-if="order.payOk==1 && order.reservationStatus == 1" class="button button-assertive common-btn4" @touchend="to_take_card(order.reservationId,order.roomCnt);">领取房卡</button>'+
'		       				<button v-if="order.payOk==1 && order.reservationStatus == 0" class="button button-assertive common-btn4" @touchend="to_checkin(order.reservationId,order.roomCnt)">办理入住</button>'+
'		       				<button v-if="order.payOk==0" class="button button-assertive common-btn4"  @touchend="checkin_order(order.reservationId,order.roomCnt);">支付入住</button>'+
'		       		</div>'+
'		       	</div>'+
'		       	</div>'+
'		       </div>'+
'		        <div class="orders-right">'+
'					<button class="button button-assertive common-btn5 new-order-btn" @touchend="to_rooms_price();">新的订单</button>'+
'		        </div>'+
'		   </div>'+
'		   <div class="dt-order-text2">{{ORDER_TIPS_1}}</div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0010}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0002}}</span>'+
'		    <span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0003}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0009}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0004}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================订单界面================================
 */
var tpl_order_html = '<div class="dk-page home-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'			<div class="order-main">'+
'				<div class="order-top-tips">'+
'					<span class="line-1">{{ORDER_TIPS_1}}</span>'+
'				</div>'+
'				<div class="order-top-tips">'+
'					<span class="line-2">{{ORDER_TIPS_2}}</span>'+
'				</div>'+
'				<div class="order-items-2">'+
'					<div class="order-room-info dt-background-color">'+
'						<div class="room-no dt-font-color-white">{{order.roomNos[0]}}</div>'+
'						<div class="room-type dt-font-color-white">{{order.roomTypeName}}</div>'+
'						<a href="javascript:void(0);" class="room-tips">{{ORDER_MSG_55}}</a>'+
'						<div class="dt-change-room" v-if="canSelectRoom" @touchend="change_room_p();"><{{ORDER_MSG_56}}></div>'+
'					</div>'+
'					<div class="right">'+
'						<div class="guest-items">'+
'							<div class="guest-info dt-background-color" v-for="guest in guests"><i :class="guest.genderText==\'男\'? \'man\':\'woman\'" class="icon-guest"></i><span class="guest-name">{{guest.idName}}</span><i class="icon-del" v-if="guest.isCheckin==false" @touchend="del_checkin_guest_p(guest.idNo)">×</i></div>'+
'							<div class="guest-info add-color" v-if="HIDE_ADD_MORE==false" @touchend="add_guest_p();" style="margin-right: 0;"><i class="icon-add">+</i><span class="guest-name">添加</span></div>'+
'						</div>'+
'					</div>'+
'					'+
'					<div class="order-op">'+
'                       <div class="order-date-info">入住日期：{{order.checkInTime}}~{{order.checkOutTime}}<br/> 入住天数：<span class="dt-day-cnt">{{order.daysCnt}}</span></div>'+
'						<button v-if="order.payOk==1 && order.reservationStatus == 0" class="button button-assertive common-btn6"  @touchend="order_process_p();">{{BTN_MSG_009}}</button>'+
'						<button v-if="order.payOk==1 && order.reservationStatus == 1" class="button button-assertive common-btn6"  @touchend="order_process_p();">{{BTN_MSG_010}}</button>'+
'						<button v-if="order.payOk==0" class="button button-assertive common-btn6"  @touchend="order_process_p();">{{BTN_MSG_011}}</button>'+
'					</div>'+
'				</div>'+
'				<div class="dt-od-text">{{ORDER_MSG_38}}</div>'+
'			</div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0010}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0002}}</span>'+
'		    <span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0003}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0009}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0004}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================订单支付界面================================
 */
var tpl_order_pay_html = '<div class="dk-page home-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'         <div class="pay-info">{{ORDER_TOP_MSG}}{{ORDER_MSG_6}}<span class="price">{{order.totalNeedToPayPrice/100}}{{ORDER_MSG_19}}</span>{{ORDER_MSG_7}}</div>'+
'	       <div class="pay-main">'+
'	       	  <div class="flip_wrap CASH wrap-cash" @touchend="select_pay_p(\'CASH\',$event);">'+
'		       	  <div :class="CASH_SCROLL? \'back-wrap\':\'font-wrap\'" class="flip">'+
'			       	  <div class="pay-type front dt-cash">'+
'			       	  	<i class="icon-cash inner-item"></i>'+
'			       	  	<div class="icon-text inner-item">{{ORDER_MSG_8}}</div>'+
'			       	  </div>'+
'			       	  <div class="pay-type back dt-cash" >'+
'			       	  	<i class="icon-cash-on inner-item"></i>'+
'			       	  	<div class="icon-text-2 inner-item">{{ORDER_MSG_12}}<br/>{{ORDER_MSG_13}}</div>'+
'			       	  </div>'+
'		       	  </div>'+
'	       	  </div>'+
'	       	  <div class="flip_wrap BANK_CARD wrap-bank" style="left: 11rem;" @touchend="select_pay_p(\'BC\',$event);">'+
'		       	  <div :class="BANK_CARD_SCROLL? \'back-wrap\':\'font-wrap\'" class="flip" >'+
'			       	  <div class="pay-type front dt-bank" >'+
'			       	  	<i class="icon-pos inner-item"></i>'+
'			       	  	<div class="icon-text inner-item">{{ORDER_MSG_9}}</div>'+
'			       	  </div>'+
'			       	  <div class="pay-type back dt-bank">'+
'			       	  	<i class="icon-pos-on inner-item"></i>'+
'			       	  	<div class="icon-text-2 inner-item">{{ORDER_MSG_14}}<br/>{{ORDER_MSG_15}}</div>'+
'			       	  </div>'+
'		       	  </div>'+
'	       	  </div>'+
'	       	  <div class="flip_wrap WECHAT" style="left: 20rem;" @touchend="select_pay_p(\'WECHAT\',$event);">'+
'		       	  <div :class="WECHAT_SCROLL? \'back-wrap\':\'font-wrap\'" class="flip">'+
'			       	  <div class="pay-type front dt-wechat">'+
'				       	  	<i class="icon-wechat inner-item"></i>'+
'				       	  	<div class="icon-text inner-item">{{ORDER_MSG_10}}</div>'+
'			       	  </div>'+
'			       	  <div class="pay-type back dt-wechat">'+
'				       	  	<div id="wechat-rqcode" class="inner-item icon-qr-on">{{ORDER_MSG_25}}</div>'+
'			       	  	<div class="inner-item icon-text-2">{{ORDER_MSG_16}}<br/>{{ORDER_MSG_17}}</div>'+
'			       	  </div>'+
'		       	  </div>'+
'	       	  </div>'+
'	       	  <div class="flip_wrap ALIPAY" style="left: 29rem;" @touchend="select_pay_p(\'ALI\',$event,this);">'+
'		       	  <div :class="ALIPAY_SCROLL? \'back-wrap\':\'font-wrap\'" class="flip">'+
'			       	  <div class="pay-type front dt-ali">'+
'				       	  	<i class="inner-item icon-ali"></i>'+
'				       	  	<div class="inner-item icon-text">{{ORDER_MSG_11}}</div>'+
'			       	  </div>'+
'			       	  <div class="pay-type back dt-ali">'+
'				       	  	<div id="ali-rqcode" class="inner-item icon-qr-on">{{ORDER_MSG_25}}</div>'+
'			       	  	<div class="inner-item icon-text-2">{{ORDER_MSG_18}}<br/>{{ORDER_MSG_17}}</div>'+
'			       	  </div>'+
'		       	  </div>'+
'	       	  </div>'+
'               </div>'+
'	       <div class="pay-status-info">{{PAY_STATUS_MSG}}</div>'+
'	       <div class="dt-discover-bg" v-show="btn_lock"></div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0010}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0002}}</span>'+
'		    <span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font proccess_on">{{FT_MSG_0003}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0009}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0004}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================发卡界面================================
 */
var tpl_make_card_html = '<div class="dk-page home-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'			<div class="dt-top-text dt-font-size-14">{{DT_TOP_MSG}}</div>'+
'			<div class="dt-mc-main">'+
'				<div class="dt-mc-timer" v-show="SHOW_TIMER">{{timerCout}}</div>'+
'				<div class="dt-mc-item" v-show="SHOW_SEND_CARD">'+
'					<div class="dt-mc-text">{{MAKE_CARD_PROCCESS}}</div>'+
'					<img src="./style/img/out_card.gif" class="gif-card-out"/>'+
'				</div>'+
'				<div class="dt-mc-item " :class ="SHOW_SEND_CARD ? \'dt-border-left\': \'\'" v-show="SHOW_APPLET">'+
'					<div id="app_qr_code" v-if="SHOW_WX_APP == false" class="dt-app-qr"><img :src="WX_QRCODE_RUI"/></div>'+
'					<div class="dt-app-wx" v-show="SHOW_WX_APP"><img :src="WX_APP_RUI"/></div>'+
'					<div class="dt-mc-text-2">{{COMMON_MSG_005}}<br/>{{COMMON_MSG_006}}</div>'+
'				</div>'+
'			</div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0010}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0002}}</span>'+
'		    <span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0003}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'		    <span class="footer-process-font font-color-1">{{FT_MSG_0009}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0004}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================入住成功界面================================
 */
var tpl_checkin_success_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'         <div class="dt-cs-download" v-show="SHOW_WX">'+
'				<div class="dt-cs-applet-icon"><div id="qr-mobile-code" class="qr-code"></div></div>'+
'				<div class="dt-cs-text1">{{ORDER_MSG_48}}</div>'+
'			</div>'+
'			<div class="dt-cs-main">'+
'				<div class="success-top">'+
'					<div class="left"></div>'+
'					<div class="right">'+
'						<div class="label">{{ORDER_MSG_28}}{{roomNo}}<br/>{{ORDER_MSG_29}}</div>'+
'					</div>'+
'				</div>'+
'			</div>'+
'	        <div class="success-bottom">'+
'				<button class="button button-assertive common-btn7 left" @touchend="checkin_success_exit_p();">{{BTN_MSG_001}}</button>'+
'				<button class="button button-assertive common-btn7 right" @touchend="make_card_p();">{{BTN_MSG_002}}</button>'+
'				'+
'	        </div>'+
'	        <div class="dt-cs-guanzhu" v-show="IS_SHOW_QRCODE">'+
'				<div class="dt-cs-wx-icon">'+
'					<div id="qr-code" class="qr-code"><img :src="IMG_QRCODE" style="width:100%;"></div>'+
'				</div>'+
'				<div class="dt-cs-text2">{{ORDER_MSG_49}}</div>'+
'	        </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<div class="logo-bottom"></div>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================退房成功界面================================
 */
var tpl_checkout_success_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'			<div class="dt-cs-main">'+
'				<div class="success-top">'+
'					<div class="left"></div>'+
'					<div class="right">'+
'						<div class="label">{{ORDER_MSG_26}}<br/><span v-show="SHOW_ROOMNO">{{ORDER_MSG_27}}{{roomNo}}</span></div>'+
'					</div>'+
'					<div class="dt-co-text">{{LESS_MSG}}</div>'+
'				</div>'+
'			</div>'+
'		        <div class="success-bottom">'+
'					<button class="button button-assertive common-btn7 left" @touchend="go_exit();">{{BTN_MSG_001}}</button>'+
'					<button class="button button-assertive common-btn7 right dt-disabled">{{BTN_MSG_003}}</button>'+
'					'+
'		        </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0007}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0008}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================退房账单信息界面================================
 */
var tpl_checkout_account_success_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'			<div class="dt-csac-main">'+
'			   <div class="dt-csac-left">'+
'				<div class="item"><div class="dt-label-6">{{COMMON_MSG_025}}</div><div class="dt-label-7">{{order_bill.guestName}}</div></div>'+
'				<div class="item"><div class="dt-label-6">{{COMMON_MSG_027}}</div><div class="dt-label-7">{{order_bill.accountNo}}</div></div>'+
'				<div class="item"><div class="dt-label-6">{{COMMON_MSG_028}}</div><div class="dt-label-7">{{order_bill.roomNo}}</div></div>'+
'				<div class="item"><div class="dt-label-6">{{COMMON_MSG_029}}</div><div class="dt-label-7">{{order.daysCnt}}</div></div>'+
'				<div class="item"><div class="dt-label-6">{{COMMON_MSG_030}}</div><div class="dt-label-7">{{order_bill.arrvie}}</div></div>'+
'				<div class="item"><div class="dt-label-6">{{COMMON_MSG_031}}</div><div class="dt-label-7">{{order_bill.departure}}</div></div>'+
'			  </div>'+
'			   <div class="dt-csac-right">'+
'			   <div class="dt-csac-title-1">'+
'			       <div class="dt-csac-title-item">{{COMMON_MSG_032}}</div>'+
'			       <div class="dt-csac-title-item">{{COMMON_MSG_033}}</div>'+
'			       <div class="dt-csac-title-item">{{COMMON_MSG_037}}(CNY)</div>'+
'			       <div class="dt-csac-title-item">{{COMMON_MSG_034}}(CNY)</div>'+
'			   </div">'+
'			   <div class="dt-csac-bills">'+
'			       <div class="dt-csac-title-2" v-for="bitem in order_bill_items">'+
'			           <div class="dt-csac-title-item">{{bitem.date}}</div>'+
'			           <div class="dt-csac-title-item">{{bitem.description}}</div>'+
'			           <div class="dt-csac-title-item"><span v-if="bitem.isCreditOrDebit==1">{{bitem.price/100}}</span></div>'+
'			           <div class="dt-csac-title-item"><span v-if="bitem.isCreditOrDebit==0">{{bitem.price/100}}</span></div>'+
'			       </div">'+
'			   </div">'+
'			   <div class="dt-csac-title-1">'+
'			       <div class="dt-csac-title-item"></div>'+
'			       <div class="dt-csac-title-item">{{COMMON_MSG_036}}</div>'+
'			       <div class="dt-csac-title-item">{{order_bill.totalConsumeFee/100}}</div>'+
'			       <div class="dt-csac-title-item">{{order_bill.totalPayedFee/100}}</div>'+
'			   </div">'+
'			   <div class="dt-csac-title-1">'+
'			       <div class="dt-csac-title-item"></div>'+
'			       <div class="dt-csac-title-item">{{COMMON_MSG_038}}</div>'+
'			       <div class="dt-csac-title-item"></div>'+
'			       <div class="dt-csac-title-item">{{order_bill.totalNeedPayFee/100}}</div>'+
'			   </div">'+
'			  </div>'+
'			</div>'+
'		        <div class="csac-bottom">'+
'					<button class="button button-assertive common-btn6 left" @touchend="next();">{{BTN_MSG_012}}</button>'+
'					'+
'		        </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="btn-footer-scan footer-process">'+
'			<span class="footer-process-font proccess_on">{{FT_MSG_0007}}</span>'+
'			<span class="arrow-footer font-color-1"> &nbsp;》&nbsp; </span>'+
'			<span class="footer-process-font font-color-1">{{FT_MSG_0008}}</span>'+
'		</div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================其他方式查询订单界面================================
 */
var tpl_other_way_find_order_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'        <hr class="dk-seperator-1">'+
'        <hr class="dk-seperator-2">'+
'        <span class="dk-select-or">{{COMMON_MSG_042}}</span>'+
'        <div class="dt-ot-panel-1">'+
'            <div class="input-tips">{{ORDER_MSG_62}}</div>'+
'		     <button class="button button-assertive common-btn4 left" style="top: 5rem;" @touchend="to_new_order();">{{BTN_MSG_014}}</button>'+
'        </div>'+
'        <div class="dt-ot-panel-2">'+
'            <div class="input-tips">{{ORDER_MSG_58}}</div>'+
'            <div class="input-box">'+
'               <div class="input-content">'+
'                  <input v-model.trim.number="input0" ref="input0" v-on:input ="changeValue($event,\'input0\',\'input0\',\'input1\')" type="number" placeholder=""/>'+
'                  <input v-model.trim.number="input1" ref="input1" v-on:input ="changeValue($event,\'input0\',\'input1\',\'input2\')" type="number" placeholder=""/>'+
'                  <input v-model.trim.number="input2" ref="input2" v-on:input ="changeValue($event,\'input1\',\'input2\',\'input3\')" type="number" placeholder=""/>'+
'                  <input v-model.trim.number="input3" ref="input3" v-on:input ="changeValue($event,\'input2\',\'input3\',\'input3\')" type="number" placeholder=""/>'+
// '                  <input v-model.trim.number="input4" ref="input4" v-on:input ="changeValue($event,\'input3\',\'input4\',\'input4\')" type="number" placeholder=""/>'+
// '             <input v-model.trim.number="input5" ref="input5" v-on:input ="changeValue($event,\'input4\',\'input5\',\'input5\')" type="number" placeholder=""/>'+
'               </div>'+
'            </div>'+
'		<button class="button button-assertive common-btn4 left" style="top: 2rem;" @touchend="to_order();">{{BTN_MSG_015}}</button>'+
'       </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================续住读卡界面================================
 */
var tpl_keep_occupancy_read_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
'	   	  <div class="dt-mc-main">'+
'		   <div class="dt-mc-item">'+
'		  	     <div class="dt-mc-text">{{INSERT_CARD_PLEASE}}</div>'+
'		  		<img src="./style/img/insert_card.gif" class="gif-card-out"/>'+
'		  	</div>'+
'		  </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================续住界面================================
 */
var tpl_keep_occupancy_html = '<div class="dk-page scan-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'      <div class="card box-content box-center">'+
//'	   <div class="dt-top-text dt-font-size-14">{{DT_TOP_MSG}}</div>'+
'		   	<div class="condition-table-top">'+
'		   		<div class="room-cols-th">{{TITLE_ROOM_TYPE}}</div>'+
'		   		<div class="room-cols-th">{{TITLE_ROOM_PRICE}}</div>'+
'		   		<div class="room-cols-th">{{COMMON_MSG_043}}</div>'+
'		   		<div class="room-cols-th">{{TITLE_ROOMNO}}</div>'+
'		   		<div class="room-cols-th">{{TITLE_RES_DAYS}}</div>'+
'		   		<div class="room-cols-th"></div>'+
'		   	</div>'+
'		   <div class="condition-items">'+
'			   		<div class="room-item">'+
'			   			<div class="room-cols">{{orderInfo.roomTypeName}}</div>'+
'			   			<div class="room-cols">￥{{orderInfo.totalPrice/100}}</div>'+
'			   			<div class="room-cols">{{orderInfo.checkOutTime}}</div>'+
'			   			<div class="room-cols">{{orderInfo.assignInfos[0].roomNo}}</div>'+
'			   			<div class="room-cols">'+
'			   				<div class="group-inset">'+
'							  <div class="minus" @touchend="change_number_p(false,$event);">'+
'							    <i class="icon ion-android-remove"></i>'+
'							  </div>'+
'							  <div class="num-in">'+
'							  	<input type="number" class="num" value="1">'+
'							  </div>'+
'							  <div class="plus" @touchend="change_number_p(true,$event);">'+
'							    <i class="icon ion-android-add"></i>'+
'							  </div>'+
'							</div>'+
'			   			</div>'+
'			   			<div class="room-cols"><button class="layui-btn do-selection" @touchend="do_keep();">{{BTN_NAME_OK}}</button></div>'+
'			   		</div>'+
'		   </div>'+
'       </div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';


/**
 * ========================房价牌界面================================
 */
var tpl_hotel_rooms_prices_html = '<div class="dk-page condition-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'   <div class="card box-content box-center">'+
'	   <div class="dt-top-text dt-font-size-14">{{DT_TOP_MSG}}</div>'+
'		   	<div class="condition-table-top">'+
'		   		<div class="room-cols-th">{{TITLE_ROOM_TYPE}}</div>'+
'		   		<div class="room-cols-th">{{TITLE_ROOM_PRICE}}</div>'+
'		   		<div class="room-cols-th">{{TITLE_RES_DAYS}}</div>'+
'		   		<div class="room-cols-th">{{TITLE_ROOMNO}}</div>'+
'		   		<div class="room-cols-th"></div>'+
'		   	</div>'+
'		   <div class="condition-items">'+
'			   		<div class="room-item" v-for="room in roomList">'+
'			   			<div class="room-cols">{{room.roomTypeName}}</div>'+
'			   			<div class="room-cols">￥{{room.roomPrices[0].memberPrice}}</div>'+
'			   			<div class="room-cols">'+
'			   				<div class="group-inset">'+
'							  <div class="minus" @touchend="change_number_p(false,$event,room.chamberNumber,room.usableMinCount);">'+
'							    <i class="icon ion-android-remove"></i>'+
'							  </div>'+
'							  <div class="num-in">'+
'							  	<input type="number" class="num" value="1">'+
'							  </div>'+
'							  <div class="plus" @touchend="change_number_p(true,$event,room.chamberNumber,room.usableMinCount,room.roomTypeId);">'+
'							    <i class="icon ion-android-add"></i>'+
'							  </div>'+
'							</div>'+
'			   			</div>'+
'			   			'+
'			   			<div class="room-cols">{{room.chamberNumber}}'+
'			   				<span v-if="room.usableMinCount>1 && pageAuth.room_selection">(<a href="javascript:void(0);"@touchend="change_room_p(room.chamberNumber,room.roomTypeId,room.ratecode);">{{COMMON_MSG_024}}</a>)</span>'+
'			   				<span v-else-if="room.usableMinCount==1">({{COMMON_MSG_001}})</span>'+
'			   				<span v-else-if="room.usableMinCount==0">{{COMMON_MSG_023}}</span>'+
'			   			</div>'+
'			   			<div class="room-cols">'+
'                            <button v-if="room.usableMinCount>=1" class="layui-btn do-selection" @touchend="select_room_p(room.chamberNumber,room.roomTypeId,room.ratecode);">{{BTN_NAME_OK}}</button>'+
'                            <button v-else-if="room.usableMinCount<1" class="layui-btn do-selection dk-disabled">{{BTN_NAME_OK}}</button>'+
'                       </div>'+
'			   		</div>'+
'		   </div>'+
'	   </div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================换房界面================================
 */
var tpl_room_select_html = '<div class="dk-page condition-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'   <div class="card box-content box-center">'+
' 	    <div class="dt-top-text dt-font-size-14">{{DT_TOP_MSG}}</div>'+
'			<div class="select-left">'+
'				<ul>'+
'					<li class="hall">{{hallName}}</li>'+
'					<li  v-for="floor in floors" class="floor-item" v-bind:class ="floor.floorID==current_floor?\'floor-on\':\'\'" @touchend="change_floor_p($event,floor.floorID);">{{floor.floorName}}</li>'+
'				</ul>'+
'			</div>'+
'			<div class="select-right">'+
'				<div class="item-box" v-for="room in current_rooms">'+
'					<div class="item-1">'+
'						<div>{{room.chamberNumber}}</div>'+
'					</div>'+
'					<div class="item-2 hide-more">'+
'						<span v-for="attr in room.features"><span class="arr-dot">●</span>{{attr}}</span>'+
'						  <button v-show="null != room.features && null != room.features.attrs && room.features.attrs.length > 4"class="layui-btn" @touchend="show_more_p($event)">'+
'						    <i class="layui-icon">&#xe61a;</i>'+
'						  </button>'+
'					</div>'+
'					<div class="item-3">'+
'						<div class="op-panel">'+
'						  <div :class ="room.chamberNumber!=current_roomNo?\'hide\':\'\'" class="on-select" @touchend="do_select_p($event,room.chamberNumber)">'+
'						    <i class="icon ion-ios-checkmark-outline"></i>'+
'						  </div>'+
'						  <div :class ="room.chamberNumber==current_roomNo?\'hide\':\'\'" class="no-select" @touchend="do_select_p($event,room.chamberNumber)">'+
'						    <i class="icon ion-ios-checkmark"></i>'+
'						  </div>'+
'						</div>'+
'					</div>'+
'				</div>				'+
'			</div>'+
'			<div class="select-bottom">'+
'			   <span class="show-selct">{{current_roomNo}}</span>'+
'			   <button class="layui-btn " @touchend="final_select()">确认</button>'+
'			</div>'+
'	   </div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

/**
 * ========================添加手机号界面================================
 */
var tpl_add_mobile_html = '<div class="dk-page condition-page-bg">'+
    '<div class="dk-page-main">'+
	_tpl_header_com_no_time_html+
'   <div class="card box-content box-center">'+
'      <div class="waite-top">'+
'				<div class="waite-text">{{ORDER_MSG_53}}</div>'+
'				<div class="mobile-input-panel"><input :autofocus="true" type="number" id="mobile_input" value="mobileInfo.contactMobile"v-model="mobileInfo.contactMobile" class="dt-mobile-input" maxlength="11"/><button class="button button-assertive common-btn9" @touchend="next_p();">{{NEXT_BTN}}</button></div>'+
'				<div></div>'+
'	        </div>'+
'	   </div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
'      </div>'+
'</div>';

/**
 * ========================弹窗================================
 */
var tpl_popup_html = '			  <div class="dk-popup-main">'+
'			  	<!-- <div class="dk-popup-title">[POPUP_TITLE]</div>-->'+
'			  	 <div class="dk-popup-info">[POPUP_INFO]</div>'+
'			  	 <div class="dk-popup-op">'+
'			  	 	<button class="common-btn3 dk-popup-ok">[POPUP_OK]</button>'+
'			  	 	<div class="dk-popup-error-tips" ontouchend="popup_ok_eve();">[POPUP_ERROR_CODE]</span>'+
'			  	 </div>'+
'			  </div>';

/**
 * ========================确认弹窗================================
 */
var tpl_confirm_popup_html = '			  <div class="dk-popup-main">'+
'			  	<div class="dk-popup-close">x</div>'+
'			  	 <div class="dk-popup-info">[POPUP_INFO]</div>'+
'			  	 <div class="dk-popup-op">'+
'			  	 	<button class="common-btn6 dk-popup-no" style="margin-right: 1rem;">[POPUP_NO]</button>'+
'			  	 	<button class="common-btn6 dk-popup-ok">[POPUP_OK]</button>'+
'			  	 </div>'+
'			  </div>';
/**
 * ========================toast弹窗================================
 */
var tpl_msg_popup_html = '<div class="dk-popup-msg-main"><span class="dk-popup-msg-info">[POPUP_INFO]</span></div>';



/**
 * ========================测试页面================================
 */

var _tpl_auto_test_html =  '<div class="test-right-1">'+
'		<div class="test-right-panel" style="">'+
'			<div class="test-top" >'+
'				<div class="test-top-panel"><span>时间间隔(M)：</span><input type="text" value="devInfo.ex_timspan"v-model="devInfo.ex_timspan" class="test-timespan"/></div>'+
'				<div class="test-top-panel"><span>调用次数：</span><input type="text" value="devInfo.ex_count"v-model="devInfo.ex_count" class="test-count"/></div>'+
'				<div class="test-top-panel" style="margin-left: 3rem;">'+
'					<button class="" @click="startExcute();">开始</button>'+
'					<button class="" @click="stopExcuteTimer();">停止</button>'+
'					<button class="" @click="clear();">清空</button>'+
'					<button class="" @click="to_setting_page();">设置</button>'+
'					<button class="" @click="go_back();">返回</button>'+
'				</div>'+
'		    </div>'+
'			<div v-html="ws_response" class="test-text" id="auto-test-text"></div>'+
'		</div>'+
'</div>';
/**
 * ========================系统配置设置界面================================
 */
var _tpl_auto_test_setting_html = '<div class="dk-page setting-page-bg">'+
    '<div class="dk-page-main">'+
'<div class="dk-header">'+
'      <div class="btn-top">'+
'		    <button class="button button-balanced common-btn2 go-back-black" style="right: 30px;" @touchend="go_back();">返回</button>'+
'		</div>'+
'   </div>'+
'<div class="setting-sys-main">'+
'			<div >测试项配置</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">身份证测试：</label>'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开<input type="radio" name="openTestScanID" value="1" title="开" v-model="devInfo.openTestScanID">'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关<input type="radio" name="openTestScanID" value="0" title="关" v-model="devInfo.openTestScanID">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">M1卡测试：</label>'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开<input type="radio" name="openTestScanM1" value="1" title="开" v-model="devInfo.openTestScanM1">'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关<input type="radio" name="openTestScanM1" value="0" title="关" v-model="devInfo.openTestScanM1">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">人脸识别测试：</label>'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开<input type="radio" name="openTestFaceDetect" value="1" title="开" v-model="devInfo.openTestFaceDetect">'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关<input type="radio" name="openTestFaceDetect" value="0" title="关" v-model="devInfo.openTestFaceDetect">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">发卡测试：</label>'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开<input type="radio" name="openTestSendCard" value="1" title="开" v-model="devInfo.openTestSendCard">'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关<input type="radio" name="openTestSendCard" value="0" title="关" v-model="devInfo.openTestSendCard" >'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">收卡测试：</label>'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开<input type="radio" name="openTestRecieveCard" value="1" title="开" v-model="devInfo.openTestRecieveCard" >'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关<input type="radio" name="openTestRecieveCard" value="0" title="关" v-model="devInfo.openTestRecieveCard">'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">打印测试：</label>'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开<input type="radio" name="openTestPrint" value="1" title="开" v-model="devInfo.openTestPrint">'+
'				      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关<input type="radio" name="openTestPrint" value="0" title="关" v-model="devInfo.openTestPrint" >'+
'				</div>'+
'			</div>'+
'			<div class="form-item">'+
'				<div class="left-1">'+
'				    <label class="form-label">打印机类型：</label>'+
'				      嵌入式<input type="radio" name="printType" value="PRINTER" title="嵌入式" v-model="devInfo.printType" />'+
'				      立式<input type="radio" name="printType" value="PRINTER_YL" title="桌面" v-model="devInfo.printType"/>'+
'				</div>'+
'			</div>'+
'			<div class="" style="text-align: center;margin-top: 1rem;margin-bottom: 3rem;">'+
// '			    <button class="button" @touchend="save_config_p()" style="padding: 0.3rem 2rem;">保存</button>'+
'			</div>'+
'			'+
'		</div>'+
'      <div class="dk-footer">'+
'		<div class="logo-bottom"></div>'+
'      </div>'+
    '      </div>'+
'</div>';

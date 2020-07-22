//var router,app;

var Home = Vue.extend({
    template: _tpl_home_html,
    data: function() {
        return HomeController;
    },
    beforeCreate:function(){
    	HomeController.page_before_enter_event();
    },
    created : function(){
    	HomeController.inital();
    },
    beforeMount:function(){
		HomeController.before_mount();
    },
    mounted:function(){
		HomeController.mounted_p();
		// var pageMainArr = document.getElementsByClassName("dk-page-main");
		// if(pageMainArr && pageMainArr.length >0){
		// 	var pageHeight =  _g_client_width*9/16;
		// 	if(_g_is_v_screen){
		// 		//竖屏
		// 		pageHeight = _g_client_height*0.618;
		// 	}
			
		// 	var _g_top = (_g_client_height - pageHeight) /2;
		// 	for(var i=0,len=pageMainArr.length;i<len;i++){
		// 		pageMainArr[i].style.top=_g_top+"px";
		// 		pageMainArr[i].style.height=pageHeight+"px";
		// 		pageMainArr[i].style.paddingBottom="0px";
		// 		pageMainArr[i].style.backgroundColor="rgba(16, 25, 33, 0.52)";
		// 	}
		// }
		CHUtil.reset_page_new_style();
    },
    beforeUpdate:function(){
		HomeController.before_update();
    },
    updated:function(){
		HomeController.updated_p();
    },
    beforeDestroy:function(){
    	HomeController.page_leve_event();
    },
    destroyed:function(){
		HomeController.destroyed_p();
    },
    methods:{
    	detail : function(){
    		HomeController.get_sys_device_info();
    	},
    	to_checkin : function(){
    		HomeController.to_idscan();
    	},
    	check_out : function(){
    		app.$router.push({path:"/index"});
    	},
    	keeo_room : function(){
    		app.$router.push({path:"/keep_occupancy_read"});
    	},
    	touch_start:function(){
    		HomeController.touch_start_cl();
    	},
    	touch_end:function(){
    		HomeController.touch_end_cl();
    	},
		clear_log:function(){
			_cache_checkin.ws_log_info="";
		}
	},
	beforeRouteLeave:function(to, from, next){
		console.log("home-》beforeRouteLeave:"+from);
		next();
	},
	beforeRouteEnter:function(to, from, next){
		console.log("home-》beforeRouteEnter:"+from);
		next();
	},
	beforeRouteUpdate:function(to, from, next){
		console.log("home-》beforeRouteUpdate:"+from);
		next();
	},
	watch:{
	  //'$route':'getPath'
	}
});


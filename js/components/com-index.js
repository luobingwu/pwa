var router,app;

var Index_com = Vue.extend({
    template: _tpl_index_html,
    data: function() {
        return IndexController;
    },
    beforeCreate:function(){
    	IndexController.page_before_enter_event();
    },
    created : function(){
    	IndexController.inital();
    },
    beforeMount:function(){
		IndexController.before_mount();
    },
    mounted:function(){
		CHUtil.reset_page_new_style();
    },
    beforeUpdate:function(){
		IndexController.before_update();
    },
    updated:function(){
		IndexController.before_update();
    },
    beforeDestroy:function(){
    	IndexController.page_leve_event();
    },
    destroyed:function(){
		IndexController.destroyed_p();
    },
    methods:{
		to_home_p:function(){
			IndexController.to_home();
		}
	},
	beforeRouteLeave:function(to, from, next){
		console.log("index-》beforeRouteLeave:"+from);
		next();
	},
	beforeRouteEnter:function(to, from, next){
		console.log("index-》beforeRouteEnter:"+from);
		next();
	},
	beforeRouteUpdate:function(to, from, next){
		console.log("index-》beforeRouteUpdate:"+from);
		next();
	},
	watch:{
	  //'$route':'getPath'
	}
});


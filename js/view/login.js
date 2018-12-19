		/**
		 * 用于用户登录
		 */
		
		/**
		 * 自定义指令->用于 用户名回车-光标焦点->密码框 
		 */
		Vue.directive('focus',function(el,binding){
			if(binding.value){
				el.focus();
			}
		})
	/*用户名设置为20位以内,密码设置8位一下*/
		var vm=new Vue({
			el:'#login',
			data:{
				username:"admin",
				password:"123",
				passwordalert:'',
				usernamealert:'',
				disableds:false,
				isfocus:false
			},
			watch:{
				/**
				 *用户名监听 
				 * @param {Object} val
				 */
				username:function(val){
					if(val.length>20||val.length<1){
						this.usernamealert="*请输入正确的用户名位数";
					}
					else{
						this.usernamealert="";
					}
				},
				/**
				 *密码监听 
				 * @param {Object} val
				 */
				password:function(val){
					if(val.length>8||val.length<1){
						this.passwordalert="*请输入正确的密码位数";
					}
					else{
						this.passwordalert="";
					}
				}
			},
			computed:{
				/**
				 * 监听disabled 如果同时满足条件那么disabled=true,如果一方不行那么就不能提交
				 */
				disabled:function(){
					if(this.username.length>20||this.username.length<1||this.password.length>8||this.password.length<1){
						return this.disabled=true
					}
					else{
						return this.disabled=false
					}
				}
			},
			methods:{
				clearusername:function(){//清除用户名
					vm.username=""
				},
				clearpassword:function(){//清除密码
					vm.password=""
				},
				getfocus:function(){//获得密码焦点
					vm.isfocus=true
				},
				submits:function(){//提交
					var timestamp=Date.parse(new Date());
					if(vm.username=="admin"&&vm.password=="123"){//前端本地数据
					window.location="homeindex.html?r="+timestamp}
					else{
						return;
					}
					/*验证信息*/
					/*getValidateUser() 此方法为实战方法*/
				}
			}
		})
		
		function getValidateUser(){
			var timestamp=Date.parse(new Date());
			$.ajax({
		        url: "/api/user/login",
		        type: "POST",
		        data: {
		            "username": vm.username,
		            "userpwd": vm.password,
		            "r":timestamp
		        },
		        dataType: "json",
		        async: false,
		        success: function(resp) {
		            if(resp.success){
		            	window.location="homeindex.html"
		            }
		        },
		        error: function() {
		            alert("error.")
		        }
    		})
		}
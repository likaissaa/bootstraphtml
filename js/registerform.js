Vue.component('q-registerform',
	{ 
		template:'<div style="width:90%;margin:0 auto;">' +
				 	'<div class="lst_nobor center ht60 font24" style="font-weight: bold;color:#E03030;text-align: center;">请填写注册信息</div>' +
				 		'<div style="border:2px solid #E03030;height:50px;line-height: 50px;margin-top:15px;background-color: white;border-radius:5px;position: relative;overflow: hidden;">' +
				 		'<div style="float:left;width:50px;height:50px;background: url(/static/img/phone.png)  no-repeat 10px 10px;background-size: 30px 30px;border-right:2px dashed #eee;"></div>' +
				 		'<div style="margin-left:51px;overflow: hidden;"><input style="width:100%;height:50px;font-size:16px;font-weight: bold;padding-left:10px;border-radius:0 5px 5px 0;border: none;" type="text" placeholder="手机号将作为唯一账号" v-model="register.phonenum"/></div>' +
				 	'</div>' +
				 	'<div style="border:2px solid #E03030;height:50px;line-height: 50px;margin-top:15px;background-color: white;border-radius:5px;position: relative;overflow: hidden;">' +
				 		'<div style="float:left;width:50px;height:50px;background: url(/static/img/key.png)  no-repeat 10px 10px;background-size: 30px 30px;border-right:2px dashed #eee;"></div>' +
				 		'<div style="margin-left:51px;overflow: hidden;"><input  style="width:100%;height:50px;font-size:16px;font-weight: bold;padding-left:10px;border-radius:0 5px 5px 0;border: none;" type="text" placeholder="请输入验证码" v-model="register.smscode"/><div style="margin-left:5%"><div v-on:click="sendregistercode" v-bind:class="[register.issend?\'registerbtn2\' : \'registerbtn1\']">{{register.code}}</div></div>' +
				 	'</div>' +
				 '</div>' +
				 '<div class="center lst_nobor" style="width:90%;margin:0 auto;">' +
				 	'<input v-bind:class="[\'ckbox\',register.ischecked ? \'checked\' : \'\']" type="checkbox" name="agreepro" v-on:click="checkthis"/><label class="marginlt" v-on:click="checkthis"><span class="fontcolor1">我已经阅读并且同意</span></label><a href="/static/html/userprotocol.html" class="font3">《用户注册协议》</a>' +
				 	'<div class="btnbox"><div style="margin-top:25px;height:50px;line-height:50px;color:white;font-size:18px;background-color:#E03030 ;border-radius: 5px;text-align: center;font-weight: bold;" v-on:click="sendregisterinfo">注册</div></div>' +
				 '</div>',
		props:{
			usertype: {
				type: String,
				default: "0",
			}
		},
		
		data: function() {
			return {
				register:{
					phonenum: '',
					smscode: '',
					code: '发送验证码',
					issend: false,
					ischecked: false,
				},
				countdown: 120,
				reflag : 0,
			}
		},
		
		methods: {
			checkthis: function(){
				this.register.ischecked = !this.register.ischecked;
			},
			
			sendregistercode:function(){
				var _self = this; //一定要这么设置，调用ajax后this指向就会变，就不是vue了
				if (_self.register.issend) return; //正在发送验证码
				if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.register.phonenum))){ 
			        alert("亲，手机号码输错了噢。");  
			        return false; 
			    }
				this.register.issend = true;
				this.countdown = 120;
//				this.settime();
				//向后台请求发送验证码
				$.ajax({
					url: '/get/code',
					type : "GET",
					data : {
						"phone": this.register.phonenum
					},
					dataType : "json",
					async: false,
					success : function(resp) {
						if (resp.success) {
							_self.register.code = this.countdown;
							_self.settime();
						}
						else {
							_self.register.issend = false;
							alert("获取验证码失败2。");
						}
					},
					error : function(xhr, textStatus, errorThrown) {
						_self.register.issend = false;
						alert("获取验证码失败。");
					}
				});
			},
			
			getlogincode: function(_this) {
				return function() {
					console.log("Times:%d", _this.countdown);
					_this.register.code = _this.countdown;
					_this.countdown--;
					if(_this.countdown<0){
						_this.register.code = '重新发送';
						_this.register.issend = false;
					}
					else
						setTimeout(_this.getlogincode(_this), 1000);
				}
			},
			
			settime: function() {
				setTimeout(this.getlogincode(this), 1000);
			},
			
			sendregisterinfo: function(){
				var _self = this;
				//判断输入项
				if (this.register.smscode.length == 0) {
					alert("亲，验证码忘记输入了噢。");
					return false;
				}
				if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.register.phonenum))){ 
			        alert("亲，手机号码输错了噢。");  
			        return false; 
			    }
				if(!this.register.ischecked){ 
			        alert("亲，您还没有同意注册呢。");  
			        return false; 
			    }
				if(this.reflag == 1){
					return false;
				}else{
					this.reflag = 1;
					//向后台提交注册信息
					$.ajax({
						url: '/api/user/register',
						type : "POST",
						data : {
							"apptype": "wx",
							"usertype": this.usertype,
							"phone": this.register.phonenum,
							"smscode": this.register.smscode,
						},
						dataType : "json",
						async: false,
						success : function(resp) {
							if (resp.success) {
								_self.$dispatch("success");
							}
							else if (resp.errcode != undefined && resp.errcode == "90003") {
								alert("亲，同一个手机号是不能重复注册的哦。");
								_self.reflag = 0;
							} else if (resp.errcode != undefined && resp.errcode == "00000")
							{
								alert("亲，验证码输错了啦。");
								_self.reflag = 0;
							} else if (resp.errcode != undefined && resp.errcode == "4085")
							{
								alert("您的手机号已发送超过单日最大限定条数验证码，请明天再试。");
								_self.reflag = 0;
							} 
							else
								alert("用户注册失败。");
								_self.reflag = 0;
						},
						error: function(xhr, textStatus, errorThrown) {
							alert("用户注册失败。");
							_self.reflag = 0;
						}
					});
				}
			},
		}
	}
);

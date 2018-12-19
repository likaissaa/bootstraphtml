// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+" : this.getMonth() + 1, //月份 
		"d+" : this.getDate(), //日 
		"h+" : this.getHours(), //小时 
		"m+" : this.getMinutes(), //分 
		"s+" : this.getSeconds(), //秒 
		"q+" : Math.floor((this.getMonth() + 3) / 3), //季度 
		"S" : this.getMilliseconds()
	//毫秒 
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

//alert弹出框
function alert(str){
	var html='<div id="alertpop" class="mdialog">'+
		'<div class="mdcontent80">'+
			'<div class="mdhd">'+str+'</div>'+
			'<button class="mdbtn" type="button" onclick="closeAlert(this)">确定</button>'+
		'</div>'+
	'</div>';
	$("body").append(html);
}

function confirmPop(str){
	var html='<div id="alertpop" class="mdialog center">'+
		'<div class="mdcontent80">'+
			'<div class="mdhd">'+str+'</div>'+
			'<div class="popbd"><div class="popbar"><a class="popbtn popbtn2" href="javascript:;" onclick="surebtnclick(this)">确定</a><a class="popbtn btn-default rt cancelbtn" href="javascript:;" onclick="closeAlertPop(this)">取消</a></div></div>'+
		'</div>'+
	'</div>';
	$("body").append(html);
}

function surebtnclick(obj) {
	$("#alertpop").remove();
}

function closeAlert(obj){
	$("#alertpop").remove();
	//var html = "";
}

function closeAlertPop(obj){
	$("#alertpop").remove();
	return false;
}

function getRandomInt(min,max) { // 产生两个范围的随机数
		var a=Math.floor(Math.random()*(max - min + 1) + min)
	}


if (!String.prototype.format) {  // 能将 ／summary/{0}/{1} 转换为 ／summary/haha/kaka
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

function alert(str){
	var html='<div id="alertpop" class="mdialog">'+
		'<div class="mdcontent80">'+
			'<div class="mdhd">'+str+'</div>'+
			'<button class="mdbtn" type="button" onclick="closeAlert(this)">确定</button>'+
		'</div>'+
	'</div>';
	$("body").append(html);
}
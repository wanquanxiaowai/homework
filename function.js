var getElementsByClassName=function(c){
	var ele=new Array();
	var tags=document.getElementsByTagName('*');
	for(var i=0;i<tags.length;i++){
		var temp=tags[i].className.split(" ");
		for(j in temp)
			if(temp[j]===c)
				sth[sth.length]=tags[i];
	}
	return ele;
}
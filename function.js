function getElementsByClassName(classname){
        var result = new Array();
        var all = document.getElementsByTagName("*");
        for(var i=0;i<all.length;i++){
                var temp = all[i].className.split(" ");
                for(var j=0; j<temp.length; j++){
                         if(temp[j] == classname){
				result.push(all[i]);
			}
		}
        }
        return result;
}

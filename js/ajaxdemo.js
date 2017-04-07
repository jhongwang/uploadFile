window.onload = function(){
   var oSearch = document.getElementById('search');
   var oCreate = document.getElementById('create');
   var oSearchText=document.getElementById('search_text');
   var oCreateText=document.getElementById('create_text');
   oSearch.onclick = function(){
   	 var oNum = document.getElementById('keyword').value;
   	 var request=new XMLHttpRequest();
   	 request.open('GET','service.php?number='+oNum);
   	 request.send();
   	 request.onreadystatechange = function(){
   	 	if(request.readyState===4){
   	 		if(request.status==200){
                oSearchText.innerHTML=request.responseText;
   	 		}else{
   	 			alert('错误信息'+request.status)
   	 		}
   	 	}
   	 }
   }

   oCreate.onclick=function(){
   	   var staffname = document.getElementById('staffname').value;
   	   var staffnumber = document.getElementById('staffnumber').value;
   	   var staffsex = document.getElementById('staffsex').value;
   	   var staffjob = document.getElementById('staffjob').value;
   	   var request=new XMLHttpRequest();
   	   request.open('POST','service.php');
   	   request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
       var data='number='+staffnumber+'&name='+staffname+'&sex='+staffsex+'&job='+staffjob;
   	   request.send(data);
   	   request.onreadystatechange=function(){
   	   	 if(request.readyState===4){
   	   	 	if(request.status===200){
               oCreateText.innerHTML=request.responseText;
   	   	 	}else{
   	   	 		alert('错误报告'+ request.status)
   	   	 	}
   	   	 }
   	   }
   }

}
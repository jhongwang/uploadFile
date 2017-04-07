window.onload = function(){
   var oSearch = document.getElementById('search');
   var oCreate = document.getElementById('create');
   var oSearchText = document.getElementById('search_text');
   var oCreateText = document.getElementById('create_text');
  oSearch.onclick = function(){
    var oNum=document.getElementById('keyword').value;
    var request;
    if(window.XMLHttpRequest){
      request=new XMLHttpRequest();
    }else{
      request=new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.open('GET','servicejson.php?number='+oNum);
    request.send();
    request.onreadystatechange=function(){
       if(request.readyState===4){
         if(request.status===200){
             var data=JSON.parse(request.responseText);
             if(data.success){
                oSearchText.innerHTML=data.msg;
             }else{
                oSearchText.innerHTML='错误信息：'+data.msg;
             }
         }else{
            alert('错误报告：'+request.status);
         }
       }
    }
  }
  oCreate.onclick=function(){
     var oNumber=document.getElementById('staffnumber').value;
     var oName=document.getElementById('staffname').value;
     var oSex=document.getElementById('staffsex').value;
     var oJob=document.getElementById('staffjob').value;
     var request;
     if(window.XMLHttpRequest){
      request=new XMLHttpRequest();
     }else{
      request=new ActiveXObject('Microsoft.XMLHTTP');
     }
     request.open('POST','servicejson.php');
     request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
     var data='number='+oNumber+'&name='+oName+'&sex='+oSex+'&job='+oJob;
     request.send(data);
     request.onreadystatechange=function(){
       if(request.readyState===4){
         if(request.status===200){
            var data_=JSON.parse(request.responseText);
            if(data_.success){
               oCreateText.innerHTML=data_.msg;
            }else{
               oCreateText.innerHTML='错误信息'+data_.msg;
            }
         }else{
            alert('错误报告：'+request.status);
         }
       }
     }
  }

  
}
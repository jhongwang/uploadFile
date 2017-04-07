$(document).ready(function(){
   $('#search').click(function(){
      $.ajax({
         type:'GET',
         url:'http://192.168.56.1/my/ajaxdemo/servicejsonp.php?number='+$('#keyword').val(),
         dataType:'jsonp',
         jsonp:'callback123',
         success:function(data){
            if(data.success){
               $('#search_text').html(data.msg);
            }else{
               $('#search_text').html('错误信息：'+data.msg);
            }
         },
         error:function(jqxhr){
           alert('错误报告：'+jqxhr.status);
         }
      })
   })

 $('#create').click(function(){
    $.ajax({
       type:'POST',
       url:'servicejsonp.php',
       dataType:'get',
       data:{
           number:$('#staffnumber').val(),
           name:$('#staffname').val(),
           sex:$('#staffsex').val(),
           job:$('#staffjob').val()
       },
       success:function(data){
         if(data.success){
            $('#create_text').html(data.msg);
         }else{
            $('#create_text').html('错误信息：'+data.msg);
         }
       },
       error:function(jqxhr){
          alert('错误报告：'+jqxhr.status);
       }
    })
 })
})


<?php 
//页面中./upload是地址路径
$file = $_FILES['mof'];
if($file['error']==0){
   if(!file_exists('./upload/'.$_POST['test'])){
     echo 'upfile';
   }else{
   	echo 'exist';
    unlink('./upload/'.$_POST['test']);
   }
}else{
 echo 'failednofile';
}
 
?>
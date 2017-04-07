<?php 
//页面中./upload是地址路径
$file = $_FILES['mof'];
if($file['error']==0){
 if(!file_exists('./upload/'.$_POST['test'])){
  if(!move_uploaded_file($file['tmp_name'],'./upload/'.$_POST['test'])){
   echo 'fileFailed';
  }
 }else{
  $content=file_get_contents($file['tmp_name']);
  if (!file_put_contents('./upload/'.$_POST['test'], $content,FILE_APPEND)) {
   echo 'fileFailed';
  }
 }
}else{
 echo 'fileFailed';
}
 
?>
<?php 
//页面中./upload是地址路径
$file = $_FILES['mof'];
if($file['error']==0){//不存在时候
echo 61;
 if(!file_exists('./upload/'.$_POST['test'])){
 	echo 611;
  if(move_uploaded_file($file['tmp_name'],'./upload/'.$_POST['test'])){
  	echo 6111;
   echo 'fileFailed1';
  }
 }else{//同名的走这里
 	echo 612;
  //$content=file_get_contents($file['tmp_name']);
  unlink('./upload/'.$_POST['test']);
  /*if (!file_put_contents('./upload/'.$_POST['test'], $content,FILE_APPEND)) {
  	echo 6121;
   echo 'fileFailed2';
  }*/
 }
}else{
 echo 62;
 echo 'fileFailed3';
}
 
?>
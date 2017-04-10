<?php 
//页面中./upload是地址路径
$file = $_FILES['mof'];
if($file['error']==0){//不存在时候
echo 71;
 if(!file_exists('./upload/'.$_POST['test'])){
 	echo 711;
  if(move_uploaded_file($file['tmp_name'],'./upload/'.$_POST['test'])){
  	echo 7111;
   echo 'fileFailed1';
  }
 }else{//同名的走这里
 	echo 'tongming';
  $content=file_get_contents($file['tmp_name']);
  if (!file_put_contents('./upload/'.$_POST['test'], $content,FILE_APPEND)) {
  	echo 7121;
    echo 'fileFailed2';
  }
 }
}else{
 echo 72;
 echo 'fileFailed3';
}
 
?>
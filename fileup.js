define(function(require,exports,module){
   function File(){
      var self = this;
      self.dom=document.getElementsById('fileForm');
 	  self.xhr=new XMLHttpRequest();
 	  self.fd;
 	  self.des=document.getElementById('load');
 	  self.num=document.getElementById('upimg');
 	  self.file;
 	  self.LENGTH=2*1024*1024;
 	  self.start;
 	  self.end;
 	  self.blob;
 	  self.pecent;
 	  self.filename;
   };
   File.prototype.upfile = function(){
   	 var self = this;
   	 self.start=0;
     self.end=self.LENGTH+self.start;
     self.file=document.getElementsByName('mof')[0].files[0];
	 self.filename = self.file.name;
	  if(!self.file){
	   alert('请选择文件');
	   return;
	  }
	  self.up();
   };
   File.prototype.up = function(){
   	   var self = this;
   	   if(self.start<self.file.size){
	   self.xhr.open('POST','servicejsonp.php',true);
	   //xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	   self.xhr.onreadystatechange=function(){
	    if(this.readyState==4){
	     if(this.status>=200&&this.status<300){
	      if(this.responseText.indexOf('failed') >= 0){
	       //alert(this.responseText);
	       alert('文件发送失败，请重新发送');
	       self.des.style.width='0%';
	       //num.innerHTML='';
	       //clearInterval(clock);
	      }else{
	       //alert(this.responseText)
	       // pending=false;
	       self.start=self.end;
	       self.end=self.start+self.LENGTH;
	       setTimeout('self.up()',1000);
	      }
	 
	     }
	    }
	   }
	   self.xhr.upload.onprogress=function(ev){
	    if(ev.lengthComputable){
	     pecent=100*(ev.loaded+self.start)/self.file.size;
	     if(pecent>100){
	      pecent=100;
	     }
	     //num.innerHTML=parseInt(pecent)+'%';
	     self.des.style.width=pecent+'%';
	     self.des.innerHTML = parseInt(pecent)+'%'
	    }
	   }
	　　　　　　　
	　　//分割文件核心部分slice
	   self.blob=self.file.slice(self.start,self.end);
	   self.fd=new FormData();
	   self.fd.append('mof',self.blob);
	   self.fd.append('test',self.file.name);
	   //console.log(fd);
	   //pending=true;
	   self.xhr.send(self.fd);
	  }else{
	   //clearInterval(clock);
	  }
   };
   return File;
});

 

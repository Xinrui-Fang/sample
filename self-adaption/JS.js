/*
* @Author: Lenovo
* @Date:   2020-02-19 11:53:14
* @Last Modified by:   Lenovo
* @Last Modified time: 2020-02-20 17:53:55
*/
var Music=document.getElementById("bgMusic");//获取音乐资源
var Btn=document.getElementById("toggleBtn");//播放和暂停
var Pre=document.getElementById("lastMusic");//上一首音乐
var Next=document.getElementById("nextMusic");//下一首音乐
var Sel=document.getElementById("selectChoice");//操作HTML中的select标签
var Pin=document.getElementById("pin");//唱针
var Img=document.getElementById("image");//播放和暂停图片

var musicList = new Array();//歌单
musicList = ["music","music2","music3"];
var num = 0;//用来切换歌曲计数

var name = document.getElementById("title");//获得歌曲名
//切换下拉菜单中的歌曲
Sel.onchange = function(){
    var val=Sel.value;//得到Option中的值
    var txt=Sel.options[Sel.selectedIndex].text//得到Option中的文本，即歌曲名 
    console.log(txt);
    Music.src=txt+".mp3"
	Music.play();
	//还要添加功能，切换歌曲的同时变换select中的曲目
}
//播放和暂停
Btn.onclick=function(){
	if(Music.paused){
		Music.play();//Play Music
		Pin.style.transform="rotate(0)";//唱针播放
		Img.src="diskPause.png";
	} else {
		Music.pause();//Pause Music
		Pin.style.transform="rotate(-33deg)";//唱针暂停
		Img.src="diskPlay.png";
	}
}
//上一首
Pre.onclick=function(){
	num=(num+2)%3;
	Music.src=musicList[num]+".mp3";
	Music.play();

	//当切换上一首歌时，select菜单中同时改变
    for(i=0;i<3;i++){
    	console.log(Sel.options[i].text);
    	if(Sel.options[i].text==musicList[num]){
    		Sel[i].selected=true;
    	}
    }
}
//下一首
Next.onclick=function(){
	num=(num+1)%3;
	Music.src=musicList[num]+".mp3"
	Music.play();
	//当切换下一首歌时，select菜单中同时改变
    for(i=0;i<3;i++){
    	console.log(Sel.options[i].text);
    	if(Sel.options[i].text==musicList[num]){
    		Sel[i].selected=true;
    	}
    }
}
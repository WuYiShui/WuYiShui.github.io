window.onload=function(){
    //var box1=document.getElementById("box1");
    var imgList=document.getElementById("imgList");
    var imgLis=imgList.getElementsByTagName("li");
    var cloneLi=imgList.children[0].cloneNode(true);
    var scrollBar=document.getElementById("scrollBar");
    var lis=scrollBar.getElementsByTagName("li");
    imgList.appendChild(cloneLi);




    for(var i=0;i<lis.length;i++){
        var li=lis[i];
        li.setAttribute("index",i);
        li.onclick=function(){
            for(var i=0;i<lis.length;i++){
                lis[i].className="";
            }
            this.className="current";
            var index=this.getAttribute("index");
            var imgIndex=-index*screen.width;
            animate(imgList,imgIndex,100);
        }
    }
}

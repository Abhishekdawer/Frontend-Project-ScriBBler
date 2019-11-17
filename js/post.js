//var b=document.getElementById("blogTitleNew").innerHTML;
var flag=0;
var likee=0;
function changeText()
{
if(flag==0)
{
    var a=document.getElementById("blogBody").innerHTML;
     var x=document.getElementById("temp").innerHTML;
    document.getElementById("text").innerHTML='Save';
    document.getElementById("text2").innerHTML=x;
    document.getElementById("textarea").value=a;
    document.getElementById("blogBody").style.display="none";
    document.getElementById("textarea").style.display="block";
    document.getElementById("textarea").style.width="95%";
    document.getElementById("textarea").style.height="260px";

    var title=document.getElementById("blogTitleNew").innerHTML;
		document.getElementById("titleArea").value=title;
		document.getElementById("blogTitleNew").style.display="none";
        document.getElementById("titleArea").style.display="block";
        flag=1;
}
else{
    var c = document.getElementById("textarea").value;
    document.getElementById("blogBody").innerHTML=c;
    document.getElementById("blogBody").style.display="block";
    document.getElementById("textarea").style.display="none";
    var d=document.getElementById("titleArea").value;
    document.getElementById("blogTitleNew").innerHTML=d;
    document.getElementById("blogTitleNew").style.display="block";
    document.getElementById("titleArea").style.display="none";
    var d=document.getElementById("temp2").innerHTML;
    document.getElementById("text").innerHTML='Edit';
    document.getElementById("text2").innerHTML=d;
    flag=0;
}
}
function liker()
{
    likee++;
    document.getElementsByClassName("likeText")[0].innerHTML="Liked!";
    if(likee==1)
    {
        document.getElementById("like").innerHTML="1 person likes this!";
    }
    else if(likee>1)
    {
        document.getElementById("like").innerHTML=likee+" people have liked this!";
    }
    document.getElementById("commentBox").style.display="block";

}
function cmnt()
{
    document.getElementById("commentArea").style.display="block";
	var text=document.getElementById("cmntText").value;
	document.getElementById("commentArea").innerHTML+="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+text+"</p>";
}
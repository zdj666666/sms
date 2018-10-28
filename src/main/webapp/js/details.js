/**
 * Created by Administrator on 2018/10/27.
 */

var flag = true;
function edit(obj){
    var info = document.getElementById("info");
    var groupInput = info.getElementsByTagName("input");
    var groupSelect = info.getElementsByClassName("select");
    if(flag){
        obj.value = "保存";
        for(var i = 0 ;i < groupInput.length; i++){
            groupInput[i].disabled = false;
        var info = document.getElementById("info");
            groupInput[i].style.border = "1px solid #d4d2d2";
            groupInput[i].style.borderRadius = "5px";
        }
        for(var j = 0 ; j < groupSelect.length; j++){
            groupSelect[j].disabled = false;
            groupSelect[j].style.border = "1px solid #d4d2d2";
        }
        flag = false;
    }else{
        obj.value = "编辑";
        console.log(obj);
        for(var i = 0 ;i < groupInput.length; i++){
            groupInput[i].disabled = true;
            groupInput[i].style.border = "none";
        }
        for(var j = 0 ; j < groupSelect.length; j++){
            groupSelect[j].disabled = true;
            groupSelect[j].style.border = "none";
        }
        flag = true;
    }

}
var flagIntro = true;
function editIntro(obj){
    var txt = document.getElementById("intro");
    if(flagIntro){
        obj.value = "保存";
        txt.removeAttribute("readonly");
        txt.style.border = "2px solid #a8ddff";

        flagIntro = false;
    }else{
        obj.value = "编辑";
        txt.setAttribute("readonly",true);
        txt.style.border = "2px solid #fff";
        flagIntro = true;
    }
}
function currentNav(obj){

    var list = document.getElementById("contentLeft");
    var li = list.getElementsByTagName("a");
    for(var a = 0 ; a< li.length ;a++){
        li[a].classList.remove("currentNav");
    }
    obj.classList.add("currentNav");
}
window.onload = function(){
    var date = new Date();
    var createTime = document.getElementById("createTime");
    createTime.value = date;
}




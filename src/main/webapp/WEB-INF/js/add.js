/**
 * Created by MI on 2018/10/28.
 */
<!-- 满足正则表达式-->
//        学号8位数
//        姓名汉字/不超过四位
//校验学号
function isStuNumber(){
    var Stunumber = document.getElementById("Stunumber");
    var StunumberMsg = document.getElementById("StunumberMsg");
    var Stunumberreg =/^1[0-9]{7}$/;
    if(Stunumber.value==""){
        StunumberMsg.innerHTML="学号不能为空!";
        StunumberMsg.style.color="red";
    }
    else if(Stunumberreg.test(Stunumber.value)){
        StunumberMsg.innerHTML="?";
        StunumberMsg.style.color="green";
    }
    else{
        StunumberMsg.innerHTML="请输入真实学号!";
        StunumberMsg.style.color="red";
    }
}
//校验年龄
function isAge(){
    var Age = document.getElementById("Age");
    var AgeMsg = document.getElementById("AgeMsg");
    var Agereg =/^([0-9]|[0-9]{2}|100)$/;
    if(Age.value==""){
        AgeMsg.innerHTML="年龄不能为空!";
        AgeMsg.style.color="red";
    }
    else if(Agereg.test(Age.value)){
        AgeMsg.innerHTML="?";
        AgeMsg.style.color="green";
    }
    else{
        AgeMsg.innerHTML="请输入真实年龄!"
        AgeMsg.style.color="red";
    }
}
//校验姓名
function isName(){
    var userName = document.getElementById("Name");
    var userNameMsg = document.getElementById("NameMsg");
    var userNamereg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(userName.value==""){
        userNameMsg.innerHTML="姓名不能为空!";
        userNameMsg.style.color="red";
    }
    else if(userNamereg.test(userName.value)){
        userNameMsg.innerHTML="?";
        userNameMsg.style.color="green";
    }
    else{
        userNameMsg.innerHTML="请输入真实姓名!";
        userNameMsg.style.color="red";
    }
}
//校验班级
function isClass(){
    var Class = document.getElementById("Class");
    var ClassMsg = document.getElementById("ClassMsg");
    var Classreg =/^1[0-9]{5}$/;
    if(Class.value==""){
        ClassMsg.innerHTML="班级不能为空!";
        ClassMsg.style.color="red";
    }
    else if(Classreg.test(Class.value)){
        ClassMsg.innerHTML="?";
        ClassMsg.style.color="green";
    }
    else{
        ClassMsg.innerHTML="请输入真实班级!";
        ClassMsg.style.color="red";
    }
}
//校验老师
function isTeacher(){
    var teacher = document.getElementById("Teacher");
    var teacherMsg = document.getElementById("TeacherMsg");
    var teacherreg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(teacher.value==""){
        teacherMsg.innerHTML="老师不能为空!";
        teacherMsg.style.color="red";
    }
    else if(teacherreg.test(teacher.value)){
        teacherMsg.innerHTML="?";
        teacherMsg.style.color="green";
    }
    else{
        teacherMsg.innerHTML="请输入老师真实姓名!";
        teacherMsg.style.color="red";
    }
}
//У��ѧ��
function isStuNumber(){
    var Stunumber = document.getElementById("Stunumber");
    var StunumberMsg = document.getElementById("StunumberMsg");
    var Stunumberreg =/^1[0-9]{7}$/;
    if(Stunumber.value==""){
        StunumberMsg.innerHTML="ѧ�Ų���Ϊ��!";
        StunumberMsg.style.color="red";
    }
    else if(Stunumberreg.test(Stunumber.value)){
        StunumberMsg.innerHTML="?";
        StunumberMsg.style.color="green";
    }
    else{
        StunumberMsg.innerHTML="��������ʵѧ��!";
        StunumberMsg.style.color="red";
    }
}

//У������
function isAge(){
    var Age = document.getElementById("Age");
    var AgeMsg = document.getElementById("AgeMsg");
    var Agereg =/^([0-9]|[0-9]{2}|100)$/;
    if(Age.value==""){
        AgeMsg.innerHTML="���䲻��Ϊ��!";
        AgeMsg.style.color="red";
    }
    else if(Agereg.test(Age.value)){
        AgeMsg.innerHTML="?";
        AgeMsg.style.color="green";
    }
    else{
        AgeMsg.innerHTML="��������ʵ����!"
        AgeMsg.style.color="red";
    }
}

//У������
function isName(){
    var userName = document.getElementById("Name");
    var userNameMsg = document.getElementById("NameMsg");
    var userNamereg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(userName.value==""){
        userNameMsg.innerHTML="��������Ϊ��!";
        userNameMsg.style.color="red";
    }
    else if(userNamereg.test(userName.value)){
        userNameMsg.innerHTML="?";
        userNameMsg.style.color="green";
    }
    else{
        userNameMsg.innerHTML="��������ʵ����!";
        userNameMsg.style.color="red";
    }
}
//У��༶
function isClass(){
    var Class = document.getElementById("Class");
    var ClassMsg = document.getElementById("ClassMsg");
    var Classreg =/^1[0-9]{5}$/;
    if(Class.value==""){
        ClassMsg.innerHTML="�༶����Ϊ��!";
        ClassMsg.style.color="red";
    }
    else if(Classreg.test(Class.value)){
        ClassMsg.innerHTML="?";
        ClassMsg.style.color="green";
    }
    else{
        ClassMsg.innerHTML="��������ʵ�༶!";
        ClassMsg.style.color="red";
    }
}
//У����ʦ
function isTeacher(){
    var teacher = document.getElementById("Teacher");
    var teacherMsg = document.getElementById("TeacherMsg");
    var teacherreg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(teacher.value==""){
        teacherMsg.innerHTML="��ʦ����Ϊ��!";
        teacherMsg.style.color="red";
    }
    else if(teacherreg.test(teacher.value)){
        teacherMsg.innerHTML="?";
        teacherMsg.style.color="green";
    }
    else{
        teacherMsg.innerHTML="��������ʦ��ʵ����!";
        teacherMsg.style.color="red";
    }
}
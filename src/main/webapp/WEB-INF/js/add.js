/**
 * Created by MI on 2018/10/28.
 */
<<<<<<< HEAD
<!-- ����������ʽ-->
//        ѧ��8λ��
//        ��������/��������λ
//У��ѧ��
=======
<!-- 满足正则表达式-->
//        学号8位数
//        姓名汉字/不超过四位
//校验学号
>>>>>>> origin/hx
function isStuNumber(){
    var Stunumber = document.getElementById("Stunumber");
    var StunumberMsg = document.getElementById("StunumberMsg");
    var Stunumberreg =/^1[0-9]{7}$/;
    if(Stunumber.value==""){
<<<<<<< HEAD
        StunumberMsg.innerHTML="ѧ�Ų���Ϊ��!";
=======
        StunumberMsg.innerHTML="学号不能为空!";
>>>>>>> origin/hx
        StunumberMsg.style.color="red";
    }
    else if(Stunumberreg.test(Stunumber.value)){
        StunumberMsg.innerHTML="?";
        StunumberMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        StunumberMsg.innerHTML="��������ʵѧ��!";
        StunumberMsg.style.color="red";
    }
}
//У������
=======
        StunumberMsg.innerHTML="请输入真实学号!";
        StunumberMsg.style.color="red";
    }
}
//校验年龄
>>>>>>> origin/hx
function isAge(){
    var Age = document.getElementById("Age");
    var AgeMsg = document.getElementById("AgeMsg");
    var Agereg =/^([0-9]|[0-9]{2}|100)$/;
    if(Age.value==""){
<<<<<<< HEAD
        AgeMsg.innerHTML="���䲻��Ϊ��!";
=======
        AgeMsg.innerHTML="年龄不能为空!";
>>>>>>> origin/hx
        AgeMsg.style.color="red";
    }
    else if(Agereg.test(Age.value)){
        AgeMsg.innerHTML="?";
        AgeMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        AgeMsg.innerHTML="��������ʵ����!"
        AgeMsg.style.color="red";
    }
}
//У������
=======
        AgeMsg.innerHTML="请输入真实年龄!"
        AgeMsg.style.color="red";
    }
}
//校验姓名
>>>>>>> origin/hx
function isName(){
    var userName = document.getElementById("Name");
    var userNameMsg = document.getElementById("NameMsg");
    var userNamereg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(userName.value==""){
<<<<<<< HEAD
        userNameMsg.innerHTML="��������Ϊ��!";
=======
        userNameMsg.innerHTML="姓名不能为空!";
>>>>>>> origin/hx
        userNameMsg.style.color="red";
    }
    else if(userNamereg.test(userName.value)){
        userNameMsg.innerHTML="?";
        userNameMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        userNameMsg.innerHTML="��������ʵ����!";
        userNameMsg.style.color="red";
    }
}
//У��༶
=======
        userNameMsg.innerHTML="请输入真实姓名!";
        userNameMsg.style.color="red";
    }
}
//校验班级
>>>>>>> origin/hx
function isClass(){
    var Class = document.getElementById("Class");
    var ClassMsg = document.getElementById("ClassMsg");
    var Classreg =/^1[0-9]{5}$/;
    if(Class.value==""){
<<<<<<< HEAD
        ClassMsg.innerHTML="�༶����Ϊ��!";
=======
        ClassMsg.innerHTML="班级不能为空!";
>>>>>>> origin/hx
        ClassMsg.style.color="red";
    }
    else if(Classreg.test(Class.value)){
        ClassMsg.innerHTML="?";
        ClassMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        ClassMsg.innerHTML="��������ʵ�༶!";
        ClassMsg.style.color="red";
    }
}
//У����ʦ
=======
        ClassMsg.innerHTML="请输入真实班级!";
        ClassMsg.style.color="red";
    }
}
//校验老师
>>>>>>> origin/hx
function isTeacher(){
    var teacher = document.getElementById("Teacher");
    var teacherMsg = document.getElementById("TeacherMsg");
    var teacherreg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(teacher.value==""){
<<<<<<< HEAD
        teacherMsg.innerHTML="��ʦ����Ϊ��!";
=======
        teacherMsg.innerHTML="老师不能为空!";
>>>>>>> origin/hx
        teacherMsg.style.color="red";
    }
    else if(teacherreg.test(teacher.value)){
        teacherMsg.innerHTML="?";
        teacherMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        teacherMsg.innerHTML="��������ʦ��ʵ����!";
=======
        teacherMsg.innerHTML="请输入老师真实姓名!";
>>>>>>> origin/hx
        teacherMsg.style.color="red";
    }
}
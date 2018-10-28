/**
 * Created by MI on 2018/10/28.
 */
<<<<<<< HEAD
<!-- Âú×ãÕýÔò±í´ïÊ½-->
//        Ñ§ºÅ8Î»Êý
//        ÐÕÃûºº×Ö/²»³¬¹ýËÄÎ»
//Ð£ÑéÑ§ºÅ
=======
<!-- æ»¡è¶³æ­£åˆ™è¡¨è¾¾å¼-->
//        å­¦å·8ä½æ•°
//        å§“åæ±‰å­—/ä¸è¶…è¿‡å››ä½
//æ ¡éªŒå­¦å·
>>>>>>> origin/hx
function isStuNumber(){
    var Stunumber = document.getElementById("Stunumber");
    var StunumberMsg = document.getElementById("StunumberMsg");
    var Stunumberreg =/^1[0-9]{7}$/;
    if(Stunumber.value==""){
<<<<<<< HEAD
        StunumberMsg.innerHTML="Ñ§ºÅ²»ÄÜÎª¿Õ!";
=======
        StunumberMsg.innerHTML="å­¦å·ä¸èƒ½ä¸ºç©º!";
>>>>>>> origin/hx
        StunumberMsg.style.color="red";
    }
    else if(Stunumberreg.test(Stunumber.value)){
        StunumberMsg.innerHTML="?";
        StunumberMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        StunumberMsg.innerHTML="ÇëÊäÈëÕæÊµÑ§ºÅ!";
        StunumberMsg.style.color="red";
    }
}
//Ð£ÑéÄêÁä
=======
        StunumberMsg.innerHTML="è¯·è¾“å…¥çœŸå®žå­¦å·!";
        StunumberMsg.style.color="red";
    }
}
//æ ¡éªŒå¹´é¾„
>>>>>>> origin/hx
function isAge(){
    var Age = document.getElementById("Age");
    var AgeMsg = document.getElementById("AgeMsg");
    var Agereg =/^([0-9]|[0-9]{2}|100)$/;
    if(Age.value==""){
<<<<<<< HEAD
        AgeMsg.innerHTML="ÄêÁä²»ÄÜÎª¿Õ!";
=======
        AgeMsg.innerHTML="å¹´é¾„ä¸èƒ½ä¸ºç©º!";
>>>>>>> origin/hx
        AgeMsg.style.color="red";
    }
    else if(Agereg.test(Age.value)){
        AgeMsg.innerHTML="?";
        AgeMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        AgeMsg.innerHTML="ÇëÊäÈëÕæÊµÄêÁä!"
        AgeMsg.style.color="red";
    }
}
//Ð£ÑéÐÕÃû
=======
        AgeMsg.innerHTML="è¯·è¾“å…¥çœŸå®žå¹´é¾„!"
        AgeMsg.style.color="red";
    }
}
//æ ¡éªŒå§“å
>>>>>>> origin/hx
function isName(){
    var userName = document.getElementById("Name");
    var userNameMsg = document.getElementById("NameMsg");
    var userNamereg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(userName.value==""){
<<<<<<< HEAD
        userNameMsg.innerHTML="ÐÕÃû²»ÄÜÎª¿Õ!";
=======
        userNameMsg.innerHTML="å§“åä¸èƒ½ä¸ºç©º!";
>>>>>>> origin/hx
        userNameMsg.style.color="red";
    }
    else if(userNamereg.test(userName.value)){
        userNameMsg.innerHTML="?";
        userNameMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        userNameMsg.innerHTML="ÇëÊäÈëÕæÊµÐÕÃû!";
        userNameMsg.style.color="red";
    }
}
//Ð£Ñé°à¼¶
=======
        userNameMsg.innerHTML="è¯·è¾“å…¥çœŸå®žå§“å!";
        userNameMsg.style.color="red";
    }
}
//æ ¡éªŒç­çº§
>>>>>>> origin/hx
function isClass(){
    var Class = document.getElementById("Class");
    var ClassMsg = document.getElementById("ClassMsg");
    var Classreg =/^1[0-9]{5}$/;
    if(Class.value==""){
<<<<<<< HEAD
        ClassMsg.innerHTML="°à¼¶²»ÄÜÎª¿Õ!";
=======
        ClassMsg.innerHTML="ç­çº§ä¸èƒ½ä¸ºç©º!";
>>>>>>> origin/hx
        ClassMsg.style.color="red";
    }
    else if(Classreg.test(Class.value)){
        ClassMsg.innerHTML="?";
        ClassMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        ClassMsg.innerHTML="ÇëÊäÈëÕæÊµ°à¼¶!";
        ClassMsg.style.color="red";
    }
}
//Ð£ÑéÀÏÊ¦
=======
        ClassMsg.innerHTML="è¯·è¾“å…¥çœŸå®žç­çº§!";
        ClassMsg.style.color="red";
    }
}
//æ ¡éªŒè€å¸ˆ
>>>>>>> origin/hx
function isTeacher(){
    var teacher = document.getElementById("Teacher");
    var teacherMsg = document.getElementById("TeacherMsg");
    var teacherreg =/^([\u4e00-\u9fa5]{2,4})$/;
    if(teacher.value==""){
<<<<<<< HEAD
        teacherMsg.innerHTML="ÀÏÊ¦²»ÄÜÎª¿Õ!";
=======
        teacherMsg.innerHTML="è€å¸ˆä¸èƒ½ä¸ºç©º!";
>>>>>>> origin/hx
        teacherMsg.style.color="red";
    }
    else if(teacherreg.test(teacher.value)){
        teacherMsg.innerHTML="?";
        teacherMsg.style.color="green";
    }
    else{
<<<<<<< HEAD
        teacherMsg.innerHTML="ÇëÊäÈëÀÏÊ¦ÕæÊµÐÕÃû!";
=======
        teacherMsg.innerHTML="è¯·è¾“å…¥è€å¸ˆçœŸå®žå§“å!";
>>>>>>> origin/hx
        teacherMsg.style.color="red";
    }
}
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/10/24
  Time: 9:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html;" pageEncoding="utf-8"%>
<html>
<head>
    <meta charset="utf-8">
    <title>SuiXingSchool</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/style/login.css" />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/style/loins.css" />
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/login.js"></script>
    <script>
        function submitBtn(obj){
            var name = document.getElementById("name");
            var psd = document.getElementById("password");
            if(name.value == ""  || psd.value == ""){
                window.document.
                alert("用户名和密码不能为空！");
            }else{
                obj.type = "submit";
            }
        }
    </script>
</head>

<body>
<div class="login">
    <video src="${pageContext.request.contextPath}/fla/loginvideo.mp4" loop autoplay></video>
    <div class="bg">
        <form method="post" action="login">
            <input type="text" placeholder="用户名" class="usersName" name="name" autofocus id="name" />
            <input type="password" placeholder="密码"  class="loginPassword" name="password" id="password" />
            <input type="button" class="loginBtn" onclick="submitBtn(this)"/>
            <input type="button" class="reBtn" />
        </form>
        <ul class="help">
            <li>回到主页</li>
            <li>登录遇到问题</li>
            <li class="ll">忘记密码</li>

        </ul>
    </div>

</div>

</body>
</html>

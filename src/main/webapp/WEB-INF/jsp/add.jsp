<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>添加管理系统</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/add.css" type="text/css">
    <script src="${pageContext.request.contextPath}/js/add.js"></script>
</head>
<body>
<div id="wrap">
    <div class="header">
        <div class="header_left">学生管理系统</div>
        <div class="header_right">
            <ul>
                <li class="welwords">
                    <img src="../../img/user_img.jpg" alt="" title="" name="user_img">
                    欢迎你的到来!
                </li>
                <li class="out">
                    <span></span>
                    <a href="../../../../test/check.html">退出</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="content">
        <div class="content_left">
            <ul>
                <li><a href="login">首页</a></li>
                <li><a href="#">学生管理</a></li>
                <li><a href="#">老师管理</a></li>
                <li><a href="#">管理员</a></li>
            </ul>
        </div>
        <div class="content_right">
            <div class="detailsCard">
                <div class="personalInfo">
                    <div class="cardTop">
                        <div class="tit"><h4>添加信息</h4></div>
                    </div>
                    <div class="cardBottom">
                        <ul class="infoList" id="info">
                            <li>
                                <label>学 号：</label>
                                <input type="text" value="" class="stuName" onblur="isStuNumber()" id="Stunumber">
                                <span id="StunumberMsg"></span>
                            </li>
                            <li>
                                <label>姓 名：</label>
                                <input type="text" value="" class="stuName" onblur="isName()" id="Name">
                                <span id="NameMsg"></span>
                            </li>
                            <li>
                                <label>年 龄：</label>
                                <input type="text" value="" class="stuName" onblur="isAge()" id="Age">
                                <span id="AgeMsg"></span>
                            </li>
                            <li>
                                <label>性 别：</label>
                                <select class="sex">
                                    <option>男</option>
                                    <option>女</option>
                                </select>
                            </li>
                            <li>
                                <label>班 级：</label>
                                <input type="text" value="" class="stuName" onblur="isClass()" id="Class">
                                <span id="ClassMsg"></span>
                            </li>
                            <li>
                                <label>老 师：</label>
                                <input type="text" value="" class="stuName" onblur="isTeacher()" id="Teacher">
                                <span id="TeacherMsg"></span>
                            </li>
                            <li>
                                <label>入学年份：</label>
                                <select class="stuName">
                                    <option>2018/9/01</option>
                                    <option>2017/9/01</option>
                                    <option>2017/9/01</option>
                                    <option>2016/9/01</option>
                                    <option>2015/9/01</option>
                                    <option>2014/9/01</option>
                                    <option>2013/9/01</option>
                                    <option>2012/9/01</option>
                                    <option>2011/9/01</option>
                                    <option>2010/9/01</option>
                                    <option>2009/9/01</option>
                                    <option>2008/9/01</option>
                                </select>
                            </li>
                            <li><label>是否毕业：</label>
                                <select class="stuName">
                                    <option>是</option>
                                    <option>否</option>
                                </select>
                            </li>
                            <li>
                                <label>创建时间：</label>
                                <select class="stuName">
                                    <option>2018/9/01</option>
                                    <option>2017/9/01</option>
                                    <option>2017/9/01</option>
                                    <option>2016/9/01</option>
                                    <option>2015/9/01</option>
                                    <option>2014/9/01</option>
                                    <option>2013/9/01</option>
                                    <option>2012/9/01</option>
                                    <option>2011/9/01</option>
                                    <option>2010/9/01</option>
                                    <option>2009/9/01</option>
                                    <option>2008/9/01</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <input type="submit" value="添加">
                        <input type="reset" value="取消">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
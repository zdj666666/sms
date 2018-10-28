<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>学生管理系统</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/style/details.css">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_892603_mcihuu1tybb.css">


</head>
<body>
<div id="wrap">
    <div class="header">
        <div class="header_left"><img src="${pageContext.request.contextPath}/img/logo.png" alt="" width="150"></div>
        <div class="header_right">
            <ul>
                <li class="welwords">

                    <span class="iconfont icon-laba" style="color:#36b0f4; font-weight: 600; font-size:18px;"> </span>
                    你好，SuiXingSchool欢迎你的到来!
                </li>
                <li class="out">
                    <span class="iconfont icon-h exit" ></span>
                    <a href="#"  style="padding-left: 0px;">退出</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="content">
        <div class="content_left">
            <ul id="contentLeft">
                <li><a href="#" class="currentNav" onmouseover="currentNav(this)"><span class="iconfont icon-homepage" style="font-size:18px;"></span>首页</a></li>
                <li><a href="#" onmouseover="currentNav(this)"><span class="iconfont icon-xuesheng" style="font-size:18px;"></span>学生管理</a></li>
                <li><a href="#" onmouseover="currentNav(this)"onmouseover="currentNav(this)"><span class="iconfont icon-jiaolian1" style="font-size:18px;"></span>老师管理</a></li>
                <li><a href="#" onmouseover="currentNav(this)"><span class="iconfont icon-icon_zhanghao" style="font-size:18px;"></span>管理员</a></li>
            </ul>
        </div>
        <div class="content_right">
            <div class="detailsTit" style="font-size:14px; font-weight:550; color:darkslategrey">
                Personal informations

            </div>
            <div class="detailsCard">
                <div class="personalInfo">
                    <div class="cardTop">
                        <div class="tit">个人简介</div>
                        <input class="modify" onclick="editIntro(this)" type="submit" value="编辑"/>
                    </div>
                    <div class="cardBottom">
                        <div class="pic">
                            <img src="${pageContext.request.contextPath}/img/adminPic1.png" alt="" width="94" >
                        </div>
                        <textarea class="intro"  readonly="readonly" id="intro">做事塌实认真，能吃苦耐劳；学习潜力强，能够很快的理解新事物；性格开朗，诚实正直，谦和自信，乐于进取乐于奉献，勤奋好学，用心上进，有较强的社会适应潜力。工作踏实，认真细致，具有强烈的事业心和工作职责心，善于处理人际关系，具有极佳的团队合作精神。
                            </textarea>
                    </div>

                </div>
            </div>
            <div class="detailsCard">
                <div class="personalInfo">
                    <div class="cardTop">
                        <div class="tit">基本资料</div>
                        <input class="modify" onclick="edit(this)" type="submit" value="编辑"/>
                    </div>
                    <div class="cardBottom">
                        <ul class="infoList" id="info">
                            <li><label>学号：</label><input type="text" value="01540601" class="stuName" disabled></li>
                            <li><label>姓名：</label><input type="text" value="啦啦啦" class="stuName" disabled></li>
                            <li><label>年龄：</label><input type="text" value="18" class="stuName" disabled></li>
                            <li>
                                <label>性别：</label>
                                <select class="stuName">
                                    <option>男</option>
                                    <option>女</option>
                                </select>
                            </li>
                            <li><label>班级：</label><input type="text" value="软件工程" class="stuName" disabled></li>
                            <li><label>指导老师：</label><input type="text" value="刘德华" class="stuName" disabled></li>
                            <li><label>入学年份：</label><input type="text" value="2018-10-27" class="stuName" disabled></li>
                            <li><label>创建时间：</label><input type="text" value="" class="stuName" disabled id="createTime"></li>
                            <li><label>是否在读：</label>
                                <select class="stuName">
                                    <option>是</option>
                                    <option>否</option>
                                </select>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/js/details.js"></script>
</body>
</html>

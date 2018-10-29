<%@ page import="com.suixingpay.pojo.Student" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/10/24
  Time: 9:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>学生管理系统</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/check.css">
</head>
<body>
<div id="wrap">
    <div class="header">
        <div class="header_left">学生管理系统</div>
        <div class="header_right">
            <ul>
                <li class="welwords">
                    <img src="${pageContext.request.contextPath}/img/user_img.jpg" alt="" title="" name="user_img">
                    你好，SuiXingSchool欢迎你!
                </li>
                <li class="out">
                    <span></span>
                    <a href="../../login.html">退出</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="content">
        <div class="content_left">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">学生管理</a></li>
                <li><a href="#">老师管理</a></li>
                <li><a href="#">管理员</a></li>
            </ul>
        </div>
        <div class="content_right">
            <div class="title">
                <div class="title_name">
                    <h3>学生管理</h3>
                    <p>学生管理系统>学生管理</p>
                </div>
                <div class="title_search">
                    <input type="text" class="study_num" placeholder="学号">
                    <input type="text" class="name" placeholder="姓名">
                    <input type="text" class="teacher" placeholder="指导老师">
                    <input type="button" class="check_but" value="查询">
                    <input type="button" class="add_but" value="增加" onclick="window.open('add.html')" >
                    <input type="button" class="del_but" value="删除" onclick="deleSome()">
                </div>
            </div>
            <div class="info">
                <table class="info_table">
                    <thead>
                    <tr>
                        <th><input type="checkbox" class="checkall" onclick="checkAll()">学号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>班级</th>
                        <th>指导老师</th>
                        <th>创建时间</th>
                        <th>入学年份</th>
                        <th>是否毕业</th>
                        <th>修改</th>
                        <th>查看</th>
                    </tr>
                    </thead>
                    <tbody>
                    <%List<Student> reStu=(List<Student>)request.getAttribute("allStudent");%>
                    <% for(Student stu:reStu){%>
                        <tr>
                            <td><input type="checkbox" class="checkone"><%=stu.getId()%></td>
                            <td><%=stu.getName()%></td>
                            <td><%=stu.getAge()%></td>
                            <td><%=stu.getSex()%></td>
                            <td><%=stu.getClasses()%></td>
                            <td><%=stu.getTeacher()%></td>
                            <td><%=stu.getCreateTime()%></td>
                            <td><%=stu.getEnrolment()%></td>
                            <td><%=stu.isStatus()%></td>
                            <td><input type="button" value="修改" class="change_butt" onclick="window.open('details.html')"></td>
                            <td><a href="${pageContext.request.contextPath}/student/details.action"><input type="button" value="详情" class="detail_butt" ></a></td>
                        </tr>
                    <%}%>
                    </tbody>
                </table>
            </div>
            <div class="page">
                <div class="nums">
                    <span class="before"><</span>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">...</a>
                    <span class="next">></span>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/js/check.js">
</script>
</body>
</html>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/10/24
  Time: 9:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>学生管理系统</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
        }
        #wrap{
            width: 95%;
            margin: 0px 2%;
            padding: 0px 0.5%;
            height: 100%;
        }
        #wrap .header{
            display: flex;
            height: 60px;
            border-bottom: solid 2px #eeeeee;
        }
        .header .header_left{
            width: 15%;
            line-height: 60px;
            font-size: 20px;
            padding-left: 2%;
        }
        .header .header_right{
            flex: 1;
            text-align: right;
        }
        .header .header_right ul{
            overflow: hidden;
            line-height: 60px;
            position: absolute;
            right: 80px;
        }
        .header .header_right li{
            list-style: none;
            float: left;
            font-size: 12px;
        }
        .header .header_right li.welwords{
            font-size: 12px;
            padding: 0px 5px;
        }
        .header .header_right li.welwords img{
            width: 25px;
            height: 25px;
            border-radius: 10px;
            display: inline-block;
        }
        .header .header_right ul li.out a{
            text-decoration: none;
            color: black;
            padding-left: 20px;
        }
        /*content*/
        .content{
            display: flex;
        }
        .content .content_left{
            width: 12%;
            padding-top: 20px;
            border-right: solid 1px #eeeeee;
        }
        .content .content_left li{
            list-style: none;
            height: 40px;
            line-height: 40px;
            padding: 10px 0px;
            text-align: center;
            font-size: 16px;
        }
        .content .content_left li a{
            display: inline-block;
            width: 80%;
            margin: 0 auto;
            text-decoration: none;
            color: black;
        }
        .content .content_left li a:hover{
            border-radius: 20px;
            background-color: #2099e9;
            color: #ffffff;
        }
        .content .content_right{
            padding-left: 30px;
            flex: 1;
        }
        .content .content_right .title{
            overflow: hidden;
            height: 60px;
            padding: 10px 0px;
        }
        .content .content_right .title_name{
            width: 15%;
            float: left;
            padding-top: 15px;
            color: #2099e9;
            font-weight: bolder;
        }
        .content .content_right .title_name p{
            color: #a7aaad;
            font-size: 12px;
            line-height: 18px;
        }
        .content .content_right .title_search{
            height: 100%;
            color: black;
            width: 77%;
            padding-left: 8%;
            float: right;
        }
        .content .content_right .title_search input[type="text"]{
            display: inline-block;
            width: 180px;
            height: 40px;
            margin: 15px 10px;
            padding: 0px 10px;
            background-color: #f2f7f8;
            border: none;
            color: #bdc0c2;
            border-radius: 10px;
        }
        .content .content_right .title_search input[type="button"]{
            width: 80px;
            display: inline-block;
            height: 40px;
            background-color: #ffa733;
            color: #ffffff;
            border: none;
            margin: 15px 5px;
            border-radius: 10px;
        }
        .info{
            width: 100%;
        }
        .info .info_table{
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border:solid 1px #dfdfdf;
        }
        .info .info_table tr{
            height: 50px;
        }
        .info .info_table .checkall{
            display: inline-block;
            margin-right: 10px;
            font-style: normal;
            width: 13px;
            height: 13px;
        }
        .info .info_table .check{
            display: inline-block;
            margin-right: 10px;
            font-style: normal;
            width: 13px;
            height: 13px;
        }
        .info .info_table tr th{
            font-weight: normal;
            border-right: 1px solid #dfdfdf;
            line-height: 50px;
            text-align: left;
            padding-left: 20px;
            border-bottom: solid 1px #dfdfdf;
        }
        .info .info_table tr th.change{
            text-align: center;
            padding-left: 0px;
        }
        .info .info_table tbody tr{
            border-bottom: solid 1px #dfdfdf;
        }
        .info .info_table tbody tr:nth-of-type(odd){
            background-color: #ffffff;
        }
        .info .info_table tbody tr:nth-of-type(even){
            background-color: #f7f7f7;
        }
        .info .info_table tbody tr td{
            padding-left: 20px;
        }
        .info .info_table tbody tr td input{
            padding-left: 0px;
            width: 36px;
            font-size: 12px;
            height: 30px;
            border: solid 1px #dfdfdf;
            background-color: #eeeeee;
            display: inline-block;
        }
        .page{
            padding-top: 20px;
        }
        .page .nums a{
            display: inline-block;
            text-decoration: none;
            color: #000000;
            text-align: center;
            margin: 0px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 100%;
        }
        .page .nums span{
            width: 28px;
            height: 28px;
            border: solid 1px #adb3b8;
            display: inline-block;
            text-align: center;
            line-height: 28px;
            border-radius: 10px;
            cursor: pointer;
            margin: 0px 2px;
        }
        .page .nums a:hover{
            color: #ffffff;
            background-color: #2099e5;
        }
    </style>
    <script type="text/javascript">
        window.onload=function(){
            var checkall = document.getElementsByClassName("checkall")[0];
            var checks = document.getElementsByClassName("check");
            //多选

            //全选
        }
    </script>
</head>
<body>
<div id="wrap">
    <div class="header">
        <div class="header_left">学生管理系统</div>
        <div class="header_right">
            <ul>
                <li class="welwords">
                    <img src="../img/user_img.jpg" alt="" title="" name="user_img">
                    欢迎你的到来!
                </li>
                <li class="out">
                    <span></span>
                    <a href="#">退出</a>
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
                    <input type="button" class="check" value="查询">
                    <input type="button" class="check" value="增加">
                    <input type="button" class="check" value="删除">
                </div>
            </div>
            <div class="info">
                <table class="info_table">
                    <thead>
                    <tr>
                        <th><input type="checkbox" class="checkall">学号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>班级</th>
                        <th>指导老师</th>
                        <th>创建时间</th>
                        <th>入学年份</th>
                        <th>是否毕业</th>
                        <th>修改</th>
                        <th>删除</th>
                        <th>查看</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="check">15051122</td>
                        <td>杨凌</td>
                        <td>21</td>
                        <td>女</td>
                        <td>150511</td>
                        <td>刘春明</td>
                        <td>2015.9.1</td>
                        <td>2015.9.1</td>
                        <td>否</td>
                        <td><input type="button" value="修改" class="change_butt"></td>
                        <td><input type="button" value="删除" class="delete_butt"></td>
                        <td><input type="button" value="详情" class="detail_butt"></td>
                    </tr>
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
</body>
</html>


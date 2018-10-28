package com.suixingpay.controller;

import com.suixingpay.pojo.Student;
import com.suixingpay.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

/**
 * Created by acer1 on 2018/10/27.
 */

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;


    @RequestMapping(value="index")
    public String login () {
        Student stu = new Student();
        stu.setId("1");
        stu.setName("xl");
        stu.setAge(12);
        stu.setCreateTime(new Date());
        studentService.addStudent(stu);
        return "login";
    }

    @RequestMapping(value = "/login")
    public String itemList3(HttpServletRequest request) throws Exception{
        String getName=request.getParameter("name");
        String getPassword=request.getParameter("password");
       List<Student> perStudent=studentService.getStudentByName(getName);
        if(perStudent.isEmpty()||perStudent==null){
            System.out.println("您的用户名输入错误");
            //返回登录页面
            return "login";
        }else{
            System.out.println("您的用户名输入正确！！！");
            List<Student> studentsList = studentService.getAllStudent();
            request.setAttribute("allStudent",studentsList);
           //跳到主页面
            return "check";
        }

    }
    @RequestMapping(value = "details")
    public String change(HttpServletRequest request)throws Exception{
        String id = request.getParameter("id");
        Student student = studentService.getStudentById(id);
        request.setAttribute("student",student);
        return "details";
    }


    @RequestMapping(value = "save")
    public String save(HttpServletRequest request){
        String id = request.getParameter("id");
        System.out.println(id);
        String name = request.getParameter("name");
       // String age =request.getParameter("age");
        /*String sex = request.getParameter("sex");
        String classes = request.getParameter("classes");
        String teacher = request.getParameter("teacher");
        String createTime = request.getParameter("createTime");
        String enrolment = request.getParameter("enrolment");
        String status = request.getParameter("status");*/
        Student student = new Student();
        System.out.println(student);
        student.setId(id);
        student.setName(name);
        //student.setAge(Integer.parseInt(age));
       /* student.setSex(sex);
        student.setClasses(classes);
        student.setName(teacher);
        student.setName(createTime);
        student.setName(enrolment);
        student.setName(status);*/
        studentService.editStudent(student);
        request.setAttribute("student",student);
        return "details";

    }



    @RequestMapping(value={"/add.action"})
    public String add(){
        return "add";
    }

    @RequestMapping(value={"/details.action"})
    public String details(){
        return "details";
    }





}

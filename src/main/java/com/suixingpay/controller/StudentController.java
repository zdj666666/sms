package com.suixingpay.controller;

import com.suixingpay.pojo.Student;
import com.suixingpay.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.HttpRequestHandler;
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


    @RequestMapping(value = "/login")
    public String itemList3(HttpServletRequest request) throws Exception{

        String getName=request.getParameter("name");
        String getPassword=request.getParameter("password");
       List<Student> perStudent=studentService.getStudentByName(getName);
        if(perStudent.isEmpty()||perStudent==null){
            System.out.println("您的用户名输入错误");
            return "login";
        }else{
            System.out.println("您的用户名输入正确！！！");


            return "check";
        }

    }

    @RequestMapping(value={"/add.action"})
    public String add(){
        Student stu = new Student();
        stu.setId("1");
        stu.setName("xl");
        stu.getAge(12);
        stu.getCreateTime(new Date());
        studentService.addStudent(stu);
        return "add";
    }

    @RequestMapping(value={"/details.action"})
    public String details(){
        Student stu = new Student();
        stu.setId("1");
        stu.setName("xl");
        stu.getAge(12);
        stu.getCreateTime(new Date());
        studentService.addStudent(stu);
        return "details";
    }





}
